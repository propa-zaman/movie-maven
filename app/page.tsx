"use client";

import { useState } from "react";
import { Navbar, Footer, ScrollToTop } from "@/components/global";
import { ExploreMovie, TrendingMovie } from "@/components/home";
import SearchResults from "@/components/home/SearchResults";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar setSearchQuery={setSearchQuery} /> 
      <div className="flex-1 sm:px-3 xs:py-5 py-7 w-full">
        <div className="max-w-[80%] sm:max-w-full lg:max-w-[90%] mx-auto flex flex-col gap-y-2">
          {searchQuery ? (
            <SearchResults searchQuery={searchQuery} /> 
          ) : (
            <>
              <TrendingMovie />
              <ExploreMovie /> 
            </>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Home;

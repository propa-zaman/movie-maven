"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import useMode, { useModeType } from "@/hooks/useMode";
import { ButtonIcon } from "@/components/global";
import { BookmarkPlus } from "lucide-react";

interface FormInputs {
  searchQuery: string;
}

interface NavbarProps {
  setSearchQuery: (query: string) => void;
}

const Navbar = ({ setSearchQuery }: NavbarProps) => {
  const { isDark, setDarkMode, setLightMode } = useMode() as useModeType;

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();
  const searchQueryValue = watch("searchQuery");

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setSearchQuery(data.searchQuery);
  };

  useEffect(() => {
    if (searchQueryValue === "") {
      setSearchQuery("");
    }
  }, [searchQueryValue, setSearchQuery]);

  const darkModeHandler = () => {
    if (isDark) {
      return setLightMode();
    } else {
      return setDarkMode();
    }
  };

  return (
    <header className="h-24"> {/* Fixed height container */}
      <nav
        className={`
          w-full 
          h-24 
          fixed 
          top-0 
          left-0 
          z-50
          bg-gradient-to-r 
          from-[#D8125B] 
          to-[#2C2E39] 
          dark:bg-gray-900 
          border-b 
          border-b-gray-200 
          dark:border-b-0
          shadow-lg
        `}
      >
        <div className="max-w-[90%] h-full sm:px-3 mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className={`text-5xl font-extrabold tracking-wide text-white dark:text-yellow-400`}>
              Movie <span className="text-lg font-light">Maven</span>
            </span>
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full w-[300px] sm:w-[400px] lg:w-[500px] shadow-lg transition-all duration-200 hover:shadow-xl focus-within:shadow-xl"
          >
            <input
              type="text"
              {...register("searchQuery", { required: true })}
              className="w-full bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-0"
              placeholder="Search movies..."
            />
            <button
              type="submit"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-yellow-400 transition-colors duration-200"
            >
              <i className="ri-search-line text-2xl"></i>
            </button>
          </form>
          <Link 
      href="/watchlist" 
      className="text-white dark:text-yellow-400 px-4 py-2 text-base flex items-center gap-x-2 hover:opacity-80 transition-opacity"
    >
      <BookmarkPlus size={18} />
      Watchlist
    </Link>

          {/* Dark Mode Toggle */}
          <div className="ml-4">
            <ButtonIcon
              sizeText="text-[18px]"
              onAction={darkModeHandler}
              iconClass={isDark ? "ri-sun-line" : "ri-moon-clear-line"}
              color={isDark ? "text-yellow-400" : "text-white"}
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
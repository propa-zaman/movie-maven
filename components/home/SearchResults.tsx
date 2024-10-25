"use client";

import { fetchMoviesBySearchQuery } from "@/api/movies.list.api"; 
import { colors } from "@/constants/colors";
import { useQuery } from "react-query";
import { movieSliderOptions } from "@/utils/slider.options";
import Slider from "react-slick";
import { LoadingSpinner } from "../global";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import MovieCardTrending from "../global/MovieCardTrending";

interface SearchResultsProps {
  searchQuery: string;
}

const SearchResults = ({ searchQuery }: SearchResultsProps) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["get-movie-by-search", searchQuery],
    queryFn: () => fetchMoviesBySearchQuery(searchQuery),
    enabled: !!searchQuery, // Only run query if there is a search query
    staleTime: 1000 * 60 * 5, // Cache results for 5 minutes
  });

  if (isLoading || isFetching) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  return (
    <div className="w-full">
      <h4 className={`text-[15px] ${colors.title} dark:text-white font-medium`}>Search Results</h4>
      <div className="mt-4">
        {data && data.length > 0 ? (
          <Slider {...movieSliderOptions}>
            {data.map((movie: IMovieResponse, idx: number) => (
              <MovieCardTrending movie={movie} key={idx} />
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No results found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

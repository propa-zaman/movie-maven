"use client";

import { useQuery } from "react-query";
import { movieSliderOptions } from "@/utils/slider.options";
import { fetchSimilarMovie } from "@/api/movie.detail.api";
import { LoadingSpinner } from "../global";
import { colors } from "@/constants/colors";
import Slider from "react-slick";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import Link from "next/link"; // Import Link for navigation
import MovieCardTrending from "../global/MovieCardTrending";

type SimilarMovieProps = {
  movieId: string | number;
};

const SimilarMovie = ({ movieId }: SimilarMovieProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-similar-movie", movieId],
    queryFn: () => fetchSimilarMovie(movieId),
  });

  if (isLoading) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  return (
    <div className="w-full mt-10">
      <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">You May Also Like</h4>
      <div className="w-full">
        <Slider {...movieSliderOptions}>
          {data?.map((movie: IMovieResponse, idx: number) => (
            <div key={idx} className="p-2">
              <Link href={`/${movie.id}`} passHref>
                <div className="relative rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                  <MovieCardTrending movie={movie} />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm text-center px-4">
                      {movie.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarMovie;

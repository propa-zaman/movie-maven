"use client";

import { fetchMoviesByTopRated } from "@/api/movies.list.api";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { LoadingSpinner } from "../global";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import { motion } from "framer-motion"; 
import MovieCardTrending from "../global/MovieCardTrending";
import { colors } from "@/constants/colors";

const smallerMovieSliderOptions = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Show 4 movies at a time
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TrendingMovie = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: "get-movie-by-trending",
    queryFn: fetchMoviesByTopRated,
    staleTime: 1000 * 24,
  });

  if (isLoading || isFetching) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  const firstMovie = data ? data[0] : null;
  const remainingMovies = data ? data.slice(1) : [];

  return (
    <div className="w-full p-6 rounded-xl">
      <h4 className={`text-[24px] text-white font-bold mb-6 dark:text-yellow-400 ${colors.title}`}>Trending Now</h4>
      
      <div className="grid grid-cols-5 gap-4">
        {/* Large Main Card on the Left */}
        {firstMovie && (
          <div className="col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full h-full rounded-xl overflow-hidden shadow-xl"
            >
              <MovieCardTrending movie={firstMovie} large />
            </motion.div>
          </div>
        )}

        {/* Slider for Smaller Movies */}
        <div className="col-span-3 ml-2">
          <Slider {...smallerMovieSliderOptions}>
            {remainingMovies.map((movie: IMovieResponse, idx: number) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-xl overflow-hidden shadow-lg"
              >
                <MovieCardTrending movie={movie} />
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovie;

"use client";

import { fetchMovieById } from "@/api/movie.detail.api";
import { useQuery } from "react-query";
import Image from "next/image";
import { LoadingSpinner } from "../global";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addToWatchlistAction, removeFromWatchlistAction } from "@/app/actions/watchlist";
import { Calendar } from "lucide-react";


type MovieDetailHeroProps = {
  movieId: string | number;
  movieData: any;
};

const MovieDetailHero = ({ movieId, movieData }: MovieDetailHeroProps) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["get-movie-by-id", movieId],
    queryFn: () => fetchMovieById(movieId),
  });

  useEffect(() => {
    // Check if movie is in local storage watchlist
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '{}');
    setIsInWatchlist(!!watchlist[movieId]);
  }, [movieId]);

  const handleAddToWatchlist = async () => {
    const result = await addToWatchlistAction(data);
    if (result.success) {
      const watchlist = JSON.parse(localStorage.getItem('watchlist') || '{}');
      watchlist[movieId] = data;
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      setIsInWatchlist(true);
    }
  };

  const handleRemoveFromWatchlist = async () => {
    const result = await removeFromWatchlistAction(movieId);
    if (result.success) {
      const watchlist = JSON.parse(localStorage.getItem('watchlist') || '{}');
      delete watchlist[movieId];
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      setIsInWatchlist(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-[100vh] xs:py-5 xs:overflow-y-scroll relative"
    >
      {/* Back Button */}
      <div className="absolute top-5 left-5 z-50">
        {/* Link to navigate back */}
        <Link href="/">
          <button className="text-white dark:hover:text-yellow-400 text-sm px-4 py-2 rounded-md transition-all">
            <i className="ri-arrow-left-line mr-2"></i> Back to Home
          </button>
        </Link>
      </div>

      <div className="w-full h-full bg-gray-900/50 flex justify-center items-center">
        <div className="max-w-[80%] lg:max-w-[90%] sm:max-w-full sm:px-3 sm:flex-col sm:items-center flex items-start gap-x-7">
          <Image priority width={250} height={400} className="rounded-md" src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt={data?.title} />
          <div className="flex-1 sm:mt-7">
            <h2 className="text-4xl font-bold text-white">{data?.title}</h2>
            <div className="flex mt-2 items-center gap-x-3">
              <p className="flex items-center gap-x-2 text-[13px] text-white">
                <i className="ri-timer-2-line text-[16px]"></i>
                {data?.runtime} m
              </p>
              <p className="flex items-center gap-x-2 text-[13px] text-white">
                <Calendar size={16} /> {/* More appropriate icon for release date */}
                {data?.release_date}
              </p>
              <p className="flex items-center gap-x-2 text-[13px] text-white">
                <i className="ri-funds-line text-[16px]"></i>
                {Math.ceil(data?.vote_average)}
              </p>
            </div>
            <p className="text-lg font-semibold text-white mt-3">Overview:</p>
            <p className="text-[12px]  text-white mb-5">{data?.overview}</p>
            <div className="max-w-[55%] lg:max-w-full grid grid-cols-4 gap-2">
              {data?.genres?.map((item: any, idx: number) => (
                <Link className="w-full block" href={`/genre/${item.id}`} key={idx}>
                  <button className="bg-[#D8125B] w-full text-[12px] font-semibold p-2 rounded-full text-white">
                    {item?.name}
                  </button>
                </Link>
              ))}
            </div>
            <div>
              <button
                onClick={isInWatchlist ? handleRemoveFromWatchlist : handleAddToWatchlist}
                className="border border-[#D8125B] hover:bg-[#D8125B] shadow-lg text-lg font-semibold p-2 rounded-xl text-white mt-4"
              >
                {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHero;

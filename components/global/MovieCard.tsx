"use client";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type MovieCardProps = {
  movie: IMovieResponse;
  large: any;
};

const MovieCard = ({ movie, large }: MovieCardProps) => {
  if (!movie) {
    return null;
  }

  return (
    <Link href={`/${movie.id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-300 to-white shadow-lg border-4 border-gray-300 transition-transform duration-300 hover:shadow-2xl"
      >
        {/* Movie Poster */}
        <div className="w-full h-[400px] relative mb-4 rounded-t-2xl overflow-hidden">
          <Image
            fill
            sizes="100%"
            loading="lazy"
            style={{ objectFit: "cover" }}
            alt={movie.title}
            className="rounded-t-2xl"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        
        {/* Movie Information */}
        <div className="p-4 text-center">
          <h4 className="text-lg font-bold text-gray-800 mb-2">{movie.title}</h4>
          <p className="text-sm text-gray-500 mb-4">{movie.release_date}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default MovieCard;

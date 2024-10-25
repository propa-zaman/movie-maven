"use client";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type MovieCardProps = {
  movie: IMovieResponse;
  large: any;
};

const MovieCardTrending = ({ movie, large }: MovieCardProps) => {
  if (!movie) {
    return null;
  }

  return (
    <Link href={`/${movie.id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Movie Poster */}
        <div className="w-full h-[400px] relative mb-4"> {/* Added margin-bottom */}
          <Image
            fill
            sizes="100%"
            loading="lazy"
            style={{ objectFit: "cover" }}
            alt={movie.title}
            className="rounded-md"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        
        {/* Movie Information */}
        <div className="p-4 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0">
          <h4 className="text-[14px] font-bold text-white mb-1">{movie.title}</h4>
          <p className="text-[12px] text-gray-400 mb-2">{movie.release_date}</p> {/* Added margin-bottom */}
        </div>
      </motion.div>
    </Link>
  );
};

export default MovieCardTrending;

import { MovieCredit, MovieDetailHero } from "@/components/detailMovie";
import SimilarMovie from "@/components/detailMovie/SimilarMovie";
import { Footer } from "@/components/global";
import { fetchMovieById } from "@/api/movie.detail.api";

type ParamsProps = {
  params: {
    id: string;
  };
};

// Fetch data during build time
export async function generateStaticParams() {
  // Generate params dynamically if needed, or return an empty array if you are not pre-rendering
  return [];
}

// Fetch movie data server-side, with revalidation
export async function getMovieData(id: string) {
  const movieData = await fetchMovieById(id);
  return movieData;
}

// This is the page component
export default async function MovieDetail({ params }: ParamsProps) {
  const movieData = await getMovieData(params.id);

  return (
    <div className="w-full">
      <div className="p-0">
        <MovieDetailHero movieId={params.id} movieData={movieData} />
        <div className="max-w-[80%] lg:max-w-[90%] sm:max-w-full mx-auto sm:px-3">
          <MovieCredit movieId={params.id} />
          <SimilarMovie movieId={params.id} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// This enables ISR by revalidating the data every 60 seconds
export const revalidate = 60;

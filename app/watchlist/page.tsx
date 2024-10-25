'use client'

import { useEffect, useState } from 'react';
import { getWatchlistAction } from '../actions/watchlist';
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import { removeFromWatchlistAction } from '../actions/watchlist';
import { Footer, LoadingSpinner } from '@/components/global';
import MovieCardTrending from '@/components/global/MovieCardTrending';
import { ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';


export default function WatchlistPage() {
    const [watchlistMovies, setWatchlistMovies] = useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWatchlist = async () => {
            try {
                const serverWatchlist = await getWatchlistAction();
                const localWatchlist = JSON.parse(localStorage.getItem('watchlist') || '{}');
                const mergedWatchlist = [...serverWatchlist];
                Object.values(localWatchlist).forEach((movie: any) => {
                    if (!mergedWatchlist.some(m => m.id === movie.id)) {
                        mergedWatchlist.push(movie);
                    }
                });
                setWatchlistMovies(mergedWatchlist);
            } catch (error) {
                console.error('Error fetching watchlist:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWatchlist();
    }, []);

    const handleRemoveFromWatchlist = async (movieId: string | number) => {
        await removeFromWatchlistAction(movieId);
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '{}');
        delete watchlist[movieId];
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        setWatchlistMovies(prev => prev.filter(movie => movie.id !== movieId));
    };

    if (isLoading) {
        return (
            <>
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingSpinner width={24} height={24} color="#818cf8" />
                </div>
                <Footer />
            </>
        );
    }

    if (watchlistMovies.length === 0) {
        return (
            <div className="flex flex-col min-h-screen">
                {/* Back Button */}
                <div className="absolute top-5 left-5 z-50">
                    <Link href="/">
                        <button className="flex items-center text-gray-700 hover:text-gray-900 text-sm px-4 py-2 rounded-md transition-all">
                            <ArrowLeft className="mr-2" size={20} />
                            Back to Home
                        </button>
                    </Link>
                </div>
                
                <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="text-center text-gray-500">
                        <h2 className="text-2xl font-bold mb-4">Your watchlist is empty</h2>
                        <p>Start adding movies to build your watchlist!</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Back Button */}
            <div className="absolute top-5 left-5 z-50">
                <Link href="/">
                    <button className="flex items-center text-gray-700 dark:text-yellow-400 dark:hover:text-white text-sm px-4 py-2 rounded-md transition-all">
                        <ArrowLeft className="mr-2" size={20} />
                        Back to Home
                    </button>
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-grow w-full py-16 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-400 text-center mb-8">Your Watchlist</h2>
                <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {watchlistMovies.map((movie) => (
                        <div key={movie.id} className="relative group">
                            <MovieCardTrending movie={movie} large={false} />
                            <button
                                onClick={() => handleRemoveFromWatchlist(movie.id)}
                                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Remove from watchlist"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
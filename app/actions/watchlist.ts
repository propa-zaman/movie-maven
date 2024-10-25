'use server'

import { IMovieResponse } from "@/interfaces/movies.response.interface";

// This is our server-side "database" for now
let serverWatchlist: { [key: string]: IMovieResponse } = {};

export async function addToWatchlistAction(movie: IMovieResponse): Promise<{ success: boolean }> {
  try {
    serverWatchlist[movie.id] = movie;
    return { success: true };
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    return { success: false };
  }
}

export async function removeFromWatchlistAction(movieId: string | number): Promise<{ success: boolean }> {
  try {
    delete serverWatchlist[movieId];
    return { success: true };
  } catch (error) {
    console.error('Error removing from watchlist:', error);
    return { success: false };
  }
}

export async function getWatchlistAction(): Promise<IMovieResponse[]> {
  return Object.values(serverWatchlist);
}
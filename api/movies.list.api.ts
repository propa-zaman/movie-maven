import apiClient from "@/utils/api.client";

export const fetchMoviesByTopRated = async () => {
  try {
    const { data } = await apiClient.get(`/movie/top_rated?page=1&per_page=10`);
    if (data) {
      const { results } = data;
      return results;
    }
  } catch (err: any) {
    const {
      response: { data },
    } = err;
    throw new Error(data.message);
  }
};
export const fetchMoviesByPopuler = async () => {
  try {
    const { data } = await apiClient.get(`/movie/popular?page=1`);
    if (data) {
      const { results } = data;
      return results; // Return the movie results from the API
    }
  } catch (err: any) {
    // Handle error safely by checking if the response exists
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    } else {
      throw new Error("An unexpected error occurred while fetching popular movies");
    }
  }
};


export const fetchExploreMovie = async (pageParam: number) => {
  try {
    const { data } = await apiClient.get(`/movie/popular?page=${pageParam}&per_page=10`);
    if (data) {
      const { results } = data;
      return results;
    }
  } catch (err: any) {
    const {
      response: { data },
    } = err;
    throw new Error(data.message);
  }
};

export const fetchMoviesBySearchQuery = async (query: string) => {
  try {
    const { data } = await apiClient.get(`/search/movie?query=${query}`);
    if (data) {
      const { results } = data;
      return results;
    }
  } catch (err: any) {
    const {
      response: { data },
    } = err;
    throw new Error(data.message);
  }
};

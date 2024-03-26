"use server";
import axios, { AxiosError, AxiosResponse } from "axios";

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

export async function fetchMovieTrending(retryCount = 0): Promise<any> {
  try {
    const movieTrending: AxiosResponse = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API}`
    );
    return movieTrending.data;
  } catch (error: any) {
    if (retryCount < MAX_RETRIES) {
      console.log(
        `Error fetching movie trending data. Retrying... (Attempt ${
          retryCount + 1
        })`
      );
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY)); // Delay before retrying
      return fetchMovieTrending(retryCount + 1); // Retry the request
    } else {
      // Max retries reached, throw the error
      throw error;
    }
  }
}

async function fetchData(url: string, retryCount = 0): Promise<any> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    if (retryCount < MAX_RETRIES && isConnectionError(error)) {
      console.log(`Connection reset, retrying... (Attempt ${retryCount + 1})`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY)); // Delay before retrying
      return fetchData(url, retryCount + 1); // Retry the request
    } else {
      // Max retries reached or error is not connection related, handle the error
      handleAxiosError(error);
    }
  }
}

export async function fetchMovieTrendingWeek() {
  return fetchData(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API}`
  );
}

export async function fetchTVTrending() {
  return fetchData(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_API}`
  );
}

export async function fetchTVTrendingWeek() {
  return fetchData(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API}`
  );
}

export async function fetchMovieGenre() {
  return fetchData(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API}`
  );
}

export async function fetchTVGenre() {
  return fetchData(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_API}`
  );
}

export async function fetchTVTopRated() {
  return fetchData(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API}`
  );
}

export async function fetchMovieTopRated() {
  return fetchData(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API}`
  );
}

export async function fetchSearchResults(query: string | null) {
  return fetchData(
    `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${process.env.TMDB_API}`
  );
}

export async function fetchDetails(id: number | null, type: string | null) {
  return fetchData(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${process.env.TMDB_API}`
  );
}
function isConnectionError(error: AxiosError) {
  return error.code === "ECONNRESET";
}

function handleAxiosError(error: AxiosError) {
  // Handle Axios errors here
  console.error("Axios Error:", error.message);
  throw error; // Rethrow the error for further handling
}

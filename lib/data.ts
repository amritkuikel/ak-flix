"use server";
import axios from "axios";

export async function fetchMovieTrending() {
  const movieTrending = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API}`
  );
  return movieTrending;
}
export async function fetchMovieTrendingWeek() {
  const movieTrendingWeek = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API}`
  );
  return movieTrendingWeek;
}
export async function fetchTVTrending() {
  const TVTrendingWeek = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_API}`
  );
  return TVTrendingWeek;
}
export async function fetchTVTrendingWeek() {
  const TVTrending = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API}`
  );
  return TVTrending;
}
export async function fetchMovieGenre() {
  const movieGenre = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API}`
  );
  return movieGenre;
}
export async function fetchTVGenre() {
  const TVGenre = await axios.get(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_API}`
  );
  return TVGenre;
}
export async function fetchTVTopRated() {
  const TVTopRated = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API}`
  );
  return TVTopRated;
}
export async function fetchMovieTopRated() {
  const movieTopRated = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API}`
  );
  return movieTopRated;
}


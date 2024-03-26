import CarouselMT from "@/components/homepage/carouselmt";
import Hero from "@/components/homepage/hero";
import NavBar from "@/components/shared/nav-bar";
import {
  fetchMovieGenre,
  fetchMovieTopRated,
  fetchMovieTrending,
  fetchMovieTrendingWeek,
  fetchTVGenre,
  fetchTVTopRated,
  fetchTVTrending,
  fetchTVTrendingWeek,
} from "@/lib/data";

export default async function Home() {
  const movieTrending = await fetchMovieTrending();
  const TVTrending = await fetchTVTrending();
  const movieTrendingWeek = await fetchMovieTrendingWeek();
  const TVTrendingWeek = await fetchTVTrendingWeek();
  const MovieGenre = await fetchMovieGenre();
  const TVGenre = await fetchTVGenre();
  const TVTopRated = await fetchTVTopRated();
  const movieTopRated = await fetchMovieTopRated();
  const trendingResult = [
    movieTrending.results[0],
    TVTrending.results[0],
    movieTrending.results[1],
    TVTrending.results[1],
    movieTrending.results[2],
    TVTrending.results[2],
  ];
  const genres = MovieGenre.genres.concat(TVGenre.genres);
  return (
    <div>
      <div className="sticky top-0 ">
        <div className="absolute z-20">
          <NavBar />
        </div>
        <div>
          <Hero trendingResult={trendingResult} genres={genres} />
        </div>
      </div>
      <div className="relative bg-black  text-white ">
        <CarouselMT
          apiData={movieTrendingWeek.results}
          genres={genres}
          text="Movies Trending This Week"
        />
        <CarouselMT
          apiData={TVTrendingWeek.results}
          genres={genres}
          text="TV Trending This Week"
        />
        <CarouselMT
          apiData={movieTopRated.results}
          genres={genres}
          text="Top Rated Movies"
        />
        <CarouselMT
          apiData={TVTopRated.results}
          genres={genres}
          text="Top Rated TV"
        />
      </div>
    </div>
  );
}

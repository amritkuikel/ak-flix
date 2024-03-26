"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
interface TrendingResult {
  media_type: string;
  vote_average: number;
  genre_ids: number[];
  first_air_date: string;
  release_date: string;
  adult: boolean;
  poster_path: string;
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  overview: string;
}
interface Genres {
  id: number;
  name: string;
}
interface Props {
  trendingResult: TrendingResult[];
  genres: Genres[];
}

const Hero: React.FC<Props> = ({ trendingResult, genres }) => {
  const [index, setIndex] = useState(0);
  function handleMouseEnter(index: number) {
    setIndex(index);
  }
  return (
    <div>
      
      <div
        className="flex h-[85vh] w-full cursor-pointer flex-row-reverse justify-between bg-cover bg-top px-24 pt-28 text-white "
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${trendingResult[index].backdrop_path}")`,
        }}
      >
        <div className="w-72">
          {trendingResult.map((result, index) => (
            <Link key={result.id} href={`/video?id=${result.id}&type=${result.media_type}`} className="size-full">
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                className="group m-2 rounded-xl bg-black/80 from-slate-400/50 to-slate-50/50 p-2 hover:scale-110  hover:bg-gradient-to-r"
              >
                <div className="line-clamp-1 text-xl font-semibold">
                  {result.title || result.name}
                </div>
                <div className="line-clamp-1 opacity-0 group-hover:opacity-100">
                  {result.overview}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col-reverse ">
          <div className="mb-16 flex   h-[60vh] w-[55vw] rounded-2xl bg-black/80">
            <div
              className="mx-7 my-[5vh] h-[50vh] w-[15vw] rounded-2xl bg-cover bg-top "
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${trendingResult[index].poster_path}")`,
              }}
            ></div>
            <div className="mx-7 my-[5vh]  flex h-[50vh] w-[35vw] flex-col justify-center  p-4">
              <div className="flex items-center gap-3 pb-3">
                <div className="text-3xl font-semibold">
                  {trendingResult[index].title || trendingResult[index].name}
                </div>
                <div className="text-xl">
                  (
                  {trendingResult[index].release_date ||
                    trendingResult[index].first_air_date}
                  )
                </div>
              </div>
              <div>
                <div className=" inline border-2">
                  {trendingResult[index].adult ? "A" : "PG-13"}
                </div>
              </div>
              <div className="my-3 flex items-center gap-4">
                <div>
                  {trendingResult[index].genre_ids.map((id) => {
                    const genre = genres.find((genre) => genre.id === id);
                    return genre ? (
                      <Badge key={genre.id} className="mr-1 rounded-md">
                        {genre.name}
                      </Badge>
                    ) : null;
                  })}
                </div>
                <div>Rating: {trendingResult[index].vote_average}</div>
              </div>
              <div className="my-8 line-clamp-5">{trendingResult[index].overview}</div>
              <div>
                Media Type:{" "}
                <Badge className="rounded-none bg-slate-700 text-lg capitalize ">
                  {trendingResult[index].media_type}
                </Badge>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

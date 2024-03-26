import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

interface Genres {
  id: number;
  name: string;
}
interface Data {
  name: string;
  genre_ids: number[];
  poster_path: string;
  id: number;
  title: string;
  overview: string;
}
interface Props {
  genres: Genres[];
  data: Data;
}

const MTCard: React.FC<Props> = ({ genres, data }) => {
  const genreId = data.genre_ids ? data.genre_ids[0] : null;
  const genre = genres.find((genre) => genre.id === genreId);
  const mediaType = data.name ? "TV" : "movie";
  return (
    <Card className="group w-20 cursor-pointer border-2 border-black bg-black md:w-48 ">
      <CardContent
        className=" flex h-40 w-20 flex-col-reverse rounded-lg bg-cover bg-top p-0 group-hover:scale-y-125 md:h-72 md:w-48"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${data.poster_path}")`,
        }}
      >
        <div className="hidden rounded-xl bg-slate-600/90 p-2 group-hover:flex">
          <CardHeader className="p-0 ">
            <CardTitle className="  mb-0 line-clamp-1 text-lg  font-light text-white ">
              {data.title || data.name}
            </CardTitle>
            <div>
              {genre ? (
                <Badge key={genre.id} className="mr-1  rounded-md">
                  {genre.name}
                </Badge>
              ) : (
                <></>
              )}
            </div>
            <CardDescription className="line-clamp-3 text-white">
              {data.overview}
            </CardDescription>
            <CardFooter className="p-0 ">
              <Link
                href={`/video?id=${data.id}&type=${mediaType}`}
                className="size-full"
              >
                {" "}
                <Button className="size-full bg-red-500">Play</Button>
              </Link>
            </CardFooter>
          </CardHeader>
        </div>
      </CardContent>
      <Link
        href={`/video?id=${data.id}&type=${mediaType}`}
        className="size-full md:hidden"
      >
        {" "}
        <Button className="size-full bg-red-500">Play</Button>
      </Link>
      <CardHeader className=" pointer-events-none p-0 group-hover:opacity-0">
        <CardTitle className="  my-4 line-clamp-2  h-12  w-20 text-base font-medium  text-white">
          {data.title || data.name}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default MTCard;

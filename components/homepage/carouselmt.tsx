"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MTCard from "../shared/cardmt";
interface apiData {
  genre_ids: number[];
  poster_path: string;
  id: number;
  title: string;
  name:string;
  overview: string
}
interface Genres {
  id: number;
  name: string;
}

interface Props {
  apiData: apiData[];
  genres: Genres[];
  text:string;
}

const CarouselMT: React.FC<Props> = ({
  apiData,
  genres,
  text

}) => {
  return (
    <div className=" w-full px-24 pt-16">
      <div>
        <div className="mb-8 text-2xl font-semibold">{text}</div>
      </div>
      <div>
        <Carousel
          className="max-w-full"
        >
          <CarouselContent>
            {apiData.map((data) => (
              <div key={data.id}>
                {" "}
                <CarouselItem>
                  {" "}
                  <MTCard genres={genres} data={data} />
                </CarouselItem>{" "}
              </div>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-slate-600"/>
          <CarouselNext className="bg-slate-600"/>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselMT;

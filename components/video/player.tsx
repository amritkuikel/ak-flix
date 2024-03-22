"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Player = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const mediaType = searchParams.get("type");
  return (
    <div>
      <iframe
        src={
          mediaType === "movie"
            ? `https://vidsrc.to/embed/movie/${id}`
            : `https://vidsrc.to/embed/tv/${id}`
        }
        className="h-[80vh] w-[80vw] "
        allowFullScreen
      />
    </div>
  );
};

export default Player;

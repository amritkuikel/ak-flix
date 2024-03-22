"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";

const VideoPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const mediaType = searchParams.get("type");
  return (
    <div>
      <div className="flex  h-[95vh] items-center justify-center bg-slate-700">
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
      <div>
        <Sheet defaultOpen>
          <SheetTrigger className="flex h-[5vh] w-screen items-center justify-center bg-black text-white">
            <FaArrowUp />
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="h-[45vh] w-screen border-0 border-white  bg-slate-700 p-0 text-white"
          >
            <SheetFooter className="absolute bottom-0 w-full ">
              <SheetClose className="flex h-[5vh] w-screen items-center justify-center bg-black text-white">
                <FaArrowDown />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default VideoPage;

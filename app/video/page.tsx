"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";
import Player from "@/components/video/player";

import Details from "@/components/video/details";

const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const mediaType = searchParams.get("type");
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute m-4 size-9 rounded-lg border-2 border-black bg-black text-white"
        onClick={() => router.push("/")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>

      <div className="flex  h-[95vh] items-center justify-center bg-slate-700">
        <Player />
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
            {id !== null && mediaType !== null && (
              <Details id={Number(id)} type={mediaType} />
            )}
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

export default Page;

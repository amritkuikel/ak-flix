import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";
import Player from "@/components/video/player";

const page = () => {
  return (
    <div>
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

export default page;

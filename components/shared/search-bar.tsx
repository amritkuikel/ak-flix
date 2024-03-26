import React, { Suspense, lazy, useState, useEffect } from "react";
import { Input } from "../ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { fetchMovieGenre, fetchSearchResults, fetchTVGenre } from "@/lib/data";

const MTCard = lazy(() => import("./cardmt"));

interface SearchResult {
  results: any[];
}

const SearchBar = () => {
  const [query, setQuery] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [genres, setGenres] = useState<any[]>([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const movieGenreResponse = await fetchMovieGenre();
        const tvGenreResponse = await fetchTVGenre();
        const combinedGenres = movieGenreResponse.data.genres.concat(
          tvGenreResponse.data.genres
        );
        setGenres(combinedGenres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    fetchGenres();
  }, []);

  function clickHandler() {
    if (query) {
      fetchSearchResults(query)
        .then((response) => {
          setSearchResults(response);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  }

  return (
    <div className="flex items-center justify-center rounded-lg bg-slate-300 text-black">
      <Input
        className="bg-slate-300"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></Input>

      <Drawer>
        <DrawerTrigger onClick={clickHandler}>
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </DrawerTrigger>
        <DrawerContent className=" bg-black ">
          <Suspense fallback={<div>Loading...</div>}>
            {searchResults &&
              searchResults.results &&
              searchResults.results.length > 0 && (
                <div className="flex overflow-x-scroll bg-black ">
                  {searchResults.results.map((item: any) => (
                    <div key={item.id} className="scale-75">
                      <MTCard data={item} genres={genres} />
                    </div>
                  ))}
                </div>
              )}
          </Suspense>

          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SearchBar;

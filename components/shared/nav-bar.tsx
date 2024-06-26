"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import React, { useState } from "react";
import SearchBar from "./search-bar";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed">
      <NavigationMenu>
        <NavigationMenuList
          className="w-screen justify-between  px-4 py-2 text-white md:px-24 md:py-5 "
          style={{
            backgroundColor: `${isScrolled ? "rgba(0,0,0,0.5)" : ""}`,
          }}
        >
          <NavigationMenuItem>
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  alt="logo"
                  src="/assets/logo-color.png"
                  width={50}
                  height={50}
                  className="rounded-2xl"
                />
                <div className="text-xl font-bold tracking-wider md:text-4xl">
                  Flix
                </div>
              </div>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex items-center justify-center gap-4">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <SignedOut>
              <SignInButton>
                <Button className="border-2">SignIn</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="rounded-full border-2 bg-slate-200 p-1">
                <UserButton showName />
              </div>
            </SignedIn>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;

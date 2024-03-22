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
          className="w-screen justify-between  px-24 py-5  text-white "
          style={{ backgroundColor: `${isScrolled ? "rgba(0,0,0,0.5)" : ""}` }}
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
                <div className="text-4xl font-bold tracking-wider ">Flix</div>
              </div>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
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
    </div>
  );
};

export default NavBar;

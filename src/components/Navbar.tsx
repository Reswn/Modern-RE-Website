"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="fixed top-0 z-50 w-full px-4">
      <div className="container mx-auto px-4 flex items-center justify-between rounded-lg bg-blue-300 py-3 shadow-md border">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            className="mr-2"
            src="/RELogo.png"
            width={60}
            height={30}
            alt="logo"
          />

          <span className="text-sm tracking-tight text-white text-bold">
            Modern RealEstate
          </span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-sm text-white lg:flex">
          <Button
            variant="outline"
            className="mr-2 bg-black text-white hover:bg-white hover:text-black transition"
          >
            Sign In
          </Button>
          <Button className="bg-slate-800 text-white hover:bg-slate-600 transition">
            Sign Up
          </Button>
        </div>
        <div className="flex-col justify-end text-white md:flex lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="rounded-md bg-black px-4 py-2 lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="py-4">
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center pb-8 text-white lg:hidden">
            <Button
              variant="outline"
              className="mr-2 bg-black text-white hover:bg-white hover:text-black transition"
            >
              Sign In
            </Button>
            <Button className="bg-slate-800 text-white hover:bg-slate-600 transition">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

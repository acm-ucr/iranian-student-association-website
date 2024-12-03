"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.webp";
import { items } from "@/data/nav";
import { FaBars } from "react-icons/fa";

type Item = {
  name: string;
  href: string;
};

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);

  return (
    <nav className="bg-beige-100 w-full border-gray-200 py-4">
      <div className="flex w-full items-center justify-between px-4 sm:px-6">
        {/* Logo Section */}
        <Link
          href="/"
          onClick={() => setSelected("")}
          className="flex items-center"
        >
          <div className="rounded-full border-2 border-black">
            <Image
              src={Logo}
              alt="Logo"
              width={50} // Default for smaller screens
              height={50}
              className="rounded-full md:h-[75px] md:w-[75px] lg:h-[75px] lg:w-[75px]"
            />
          </div>
        </Link>

        {/* Desktop Navigation Items */}
        <ul className="hidden space-x-4 sm:flex md:space-x-8 lg:space-x-8">
          {items.map((item: Item, index: number) => (
            <li key={index}>
              <Link href={item.href} onClick={() => setSelected(item.name)}>
                <div
                  className={`text-sm font-semibold transition-colors duration-300 hover:text-gray-600 md:text-lg lg:text-xl ${selected === item.name ? "text-black" : "text-gray-800"}`}
                >
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center sm:hidden">
          <FaBars
            className="cursor-pointer text-3xl text-black"
            onClick={() => setNav(!nav)}
          />
        </div>
      </div>

      {/* Mobile Navigation (Burger Drop Down) */}
      <div
        className={`sm:hidden ${nav ? "flex" : "hidden"} bg-beige-100 w-full flex-col items-center py-4`}
      >
        {items.map((item: Item, index: number) => (
          <Link
            href={item.href}
            key={index}
            onClick={() => {
              setSelected(item.name);
              setNav(false);
            }}
            className="w-full py-2 text-center font-semibold text-black hover:bg-gray-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

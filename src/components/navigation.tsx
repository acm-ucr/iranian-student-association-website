import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.webp";
import { items } from "@/data/nav";

type item = {
  name: string;
  href: string;
};

const Navigation = () => {
  return (
    <nav className="bg-beige-100 w-full border-gray-200 py-4">
      <div className="flex w-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <div className="rounded-full border-2 border-black">
            <Image
              src={Logo}
              alt="Logo"
              width={50} // Default to 50px for smaller screens
              height={50}
              className="rounded-full md:w-[75px] md:h-[75px] lg:w-[75px] lg:h-[75px]" // 75px on md, 75px on lg
            />
          </div>
        </div>

        {/* Responsive nav items */}
        <ul className="flex flex-col sm:flex-row md:flex-row lg:flex-row 
                       space-y-2 sm:space-y-0 md:space-y-0 lg:space-y-0 
                       sm:space-x-4 md:space-x-6 lg:space-x-8 
                       text-sm md:text-lg lg:text-xl font-semibold text-black">
          {items.map((item: item, index: number) => (
            <li key={index}>
              <Link href={item.href}>
                <div className="transition-colors duration-300 hover:text-gray-600">
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
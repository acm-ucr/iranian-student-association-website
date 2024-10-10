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
      <div className="flex items-center justify-between w-full px-6">
        <div className="flex items-center">
          <div className="rounded-full border-2 border-black">
            <Image
              src={Logo}
              alt="Logo"
              width={75}
              height={75}
              className="rounded-full"
            />
          </div>
        </div>

        {/* nav stuff */}
        <ul className="flex space-x-8 text-lg font-semibold text-black">
          {items.map((item: item, index: number) => (
            <Link href={item.href} key={index}>
              <div className="transition-colors duration-300 hover:text-gray-600">
                {item.name}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
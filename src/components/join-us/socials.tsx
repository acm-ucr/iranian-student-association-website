import Link from "next/link";
import { ICONS } from "@/data/icons";

const Socials = () => {
  return (
    <div className="mx-auto rounded-3xl border-4 border-isa-dark-red bg-isa-light-beige p-6 text-center md:max-w-lg">
      <h2 className="mb-4 text-2xl font-medium tracking-widest text-isa-dark-yellow md:text-3xl">
        Follow our socials
      </h2>
      <div className="flex justify-center gap-3 space-x-6 md:space-x-8">
        {ICONS.map((item, index) => (
          <Link href={item.link} key={index} passHref>
            <div className="cursor-pointer text-gray-800 md:h-10 md:w-10">
              <item.icon className="h-10 w-10" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;

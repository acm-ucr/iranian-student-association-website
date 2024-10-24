import Link from "next/link";
import { ICONS } from "@/data/icons";

const Socials = () => {
  return (
    <div className="rounded-3xl border-4 border-isa-dark-red bg-isa-light-beige p-6 text-center">
      <h2 className="mb-4 text-3xl font-medium tracking-widest text-isa-dark-yellow">
        Follow our socials
      </h2>
      <div className="flex justify-center gap-3 space-x-6">
        {ICONS.map((item, index) => (
          <Link href={item.link} key={index} passHref>
            <div className="h-8 w-8 cursor-pointer text-gray-800">
              <item.icon className="h-10 w-10" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;

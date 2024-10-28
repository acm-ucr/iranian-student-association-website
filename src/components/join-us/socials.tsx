import Link from "next/link";
import { ICONS } from "@/data/icons";

const Socials = () => {
  return (
    <div className="rounded-lg border-2 border-isa-dark-red bg-gray-300 p-6 text-center">
      <h2 className="mb-4 text-xl font-semibold text-isa-dark-yellow">
        Follow our socials
      </h2>
      <div className="flex justify-center space-x-6">
        {ICONS.map((item, index) => (
          <Link href={item.link} key={index} target="_blank" passHref>
            <div className="h-8 w-8 cursor-pointer text-gray-800">
              <item.icon className="h-8 w-8" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;

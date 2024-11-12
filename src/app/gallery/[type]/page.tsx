import NotFound from "@/app/not-found";
import React from "react";
import Image from "next/image";
import SocialTitle from "@/public/gallery/socialtitle.svg";
import { PICTURES } from "@/data/gallery/picture";

// Define valid page types
type PageType = "social" | "culture" | "tabling" | "fundraisers";

// Define a simple version of StaticImageData
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

// Define params and props types
type PageParams = {
  type: PageType;
};

type PageProps = {
  params: PageParams;
};

// Define the type for PICTURES object
type PicturesType = {
  [K in PageType]: StaticImageData[];
};

// Page title mapping
const PAGES: Record<PageType, string> = {
  social: "Social Events",
  culture: "Cultural Events",
  tabling: "Tabling Events",
  fundraisers: "Fundraisers",
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const allPages: PageType[] = ["social", "culture", "tabling", "fundraisers"];
  return allPages.map((page) => ({ type: page }));
}

const Page: React.FC<PageProps> = ({ params }) => {
  if (!PAGES.hasOwnProperty(params.type)) {
    return <NotFound />;
  }

  const images = (PICTURES as PicturesType)[params.type];

  return (
    <div className="bg-blobs1 bg-biscuits-green-100 flex flex-col items-center bg-contain pt-10 text-7xl md:bg-cover">
      <div className="mb-20 flex justify-center">
        <Image src={SocialTitle} alt="Our Culture Page Title" />
      </div>
      <div className="grid w-4/5 grid-cols-1 gap-2 py-10 lg:grid-cols-3">
        {images.map((image, index) => (
          <Image
            src={image.src}
            alt={`${PAGES[params.type]}_${index}`}
            key={index}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

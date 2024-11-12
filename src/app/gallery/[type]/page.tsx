import NotFound from "@/app/not-found";
import React from "react";

// Define valid page types
type PageType = "social" | "culture" | "tabling" | "fundraisers";

// Define params and props types
type PageParams = {
  type: PageType;
};

type PageProps = {
  params: PageParams;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const allPages: PageType[] = ["social", "culture", "tabling", "fundraisers"];
  return allPages.map((page) => ({ type: page }));
}

const Page: React.FC<PageProps> = ({ params }) => {
  const PAGES: Record<PageType, string> = {
    social: "Social Events",
    culture: "Cultural Events",
    tabling: "Tabling Events",
    fundraisers: "Fundraisers",
  };

  if (PAGES.hasOwnProperty(params.type)) {
    return <div className="text-7xl">different gallery</div>;
  } else {
    return <NotFound />;
  }
};

export default Page;
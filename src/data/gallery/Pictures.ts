import { StaticImageData } from "next/image";

// socials images
import social1 from "@/public/gallery/socials/socials1.webp";
import social2 from "@/public/gallery/socials/socials2.webp";
import social3 from "@/public/gallery/socials/socials3.webp";
import social4 from "@/public/gallery/socials/socials4.webp";
import social5 from "@/public/gallery/socials/socials5.webp";
import social6 from "@/public/gallery/socials/socials6.webp";
import social7 from "@/public/gallery/socials/socials7.webp";
import social8 from "@/public/gallery/socials/socials8.webp";
import social9 from "@/public/gallery/socials/socials9.webp";

// cultural events images
import culture1 from "@/public/gallery/cultural-events/culture1.webp";
import culture2 from "@/public/gallery/cultural-events/culture2.webp";
import culture3 from "@/public/gallery/cultural-events/culture3.webp";
import culture4 from "@/public/gallery/cultural-events/culture4.webp";
import culture5 from "@/public/gallery/cultural-events/culture5.webp";
import culture6 from "@/public/gallery/cultural-events/culture6.webp";
import culture7 from "@/public/gallery/cultural-events/culture7.webp";
import culture8 from "@/public/gallery/cultural-events/culture8.webp";
import culture9 from "@/public/gallery/cultural-events/culture9.webp";
import culture10 from "@/public/gallery/cultural-events/culture10.webp";

// tabling images
import tabling1 from "@/public/gallery/tabling/tabling1.webp";
import tabling2 from "@/public/gallery/tabling/tabling2.webp";

// fundraisers images

export const PICTURES: Record<string, (string | StaticImageData)[]> = {
  socials: [
    social8,
    social9,
    social5,
    social3,
    social1,
    social4,
    social6,
    social7,
    social2,
  ],
  "cultural-events": [
    culture1,
    culture2,
    culture3,
    culture4,
    culture5,
    culture6,
    culture7,
    culture8,
    culture9,
    culture10,
  ],
  tabling: [tabling1, tabling2],
  fundraisers: [],
};

export default PICTURES;

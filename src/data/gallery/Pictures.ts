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
import charmander from "@/public/gallery/cultural-events/charmander.webp";

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
    charmander,
    charmander,
    charmander,
    charmander,
    charmander,
    charmander,
  ],
  tabling: [tabling1, tabling2],
  fundraisers: [],
};

export default PICTURES;

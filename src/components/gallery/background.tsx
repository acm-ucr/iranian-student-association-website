import React from "react";
import Image from "next/image";
import Paisley1 from "@/public/gallery/paisley1.svg";
import Paisley2 from "@/public/gallery/paisley2.svg";

const background = () => {
    return (
        <div className="">
            <div className="absolute top-0 -z-10">
            <Image
            src={Paisley1}
            width={200}
            height={200}
            alt="First Paisley on Top Left of Page"
            />
        </div>
        <div className="absolute right-2 bottom-0 -z-10">
            <Image
            src={Paisley2}
            width={250}
            height={250}
            alt="Second Paisley on Top Left of Page"
            />
        </div>
    </div>
    );
};

export default background;
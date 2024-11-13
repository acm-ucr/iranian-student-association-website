import React from "react";
import { Titles } from "@/data/gallery/Titles";
import Button from "@/components/gallery/buttons";

const buttonLayout = () => {
  return (
    <div className="m-auto h-screen w-8/12 md:w-7/12">
      {Titles.map((items, index) => (
        <Button key={index} name={items.title} />
      ))}
    </div>
  );
};

export default buttonLayout;

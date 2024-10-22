import React from "react";
import { Titles } from "@/data/gallery/Titles";
import Button from "@/components/gallery/buttons";

const buttonLayout = () => {
    return (
        <div className="h-screen w-full">
        {Titles.map((items, index) => (
          <Button key={index} name={items.title} />
        ))}
      </div>
    );
};

export default buttonLayout;
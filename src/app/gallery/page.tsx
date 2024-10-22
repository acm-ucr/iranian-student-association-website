import React from "react";
import BackGround from "@/components/gallery/background";
import ButtonLayout from "@/components/gallery/buttonLayout";

const gallery = () => {
  return (
    <div className="relative min-h-screen">
        <ButtonLayout />
        <BackGround />
    </div>
  );
};

export default gallery;

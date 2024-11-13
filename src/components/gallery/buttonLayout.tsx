"use client";

import React from "react";
import Button from "@/components/gallery/buttons";
import { useRouter } from "next/navigation";

const buttonLayout = () => {
  const router = useRouter();

  const handleSocialsRedirect = () => {
    router.push("/gallery/socials");
  };
  return (
    <div className="h-screen w-full">
      <Button name="Socials" onClick={handleSocialsRedirect} />
      {/* <Button name="Cultural Events" onClick={}/> */}
      {/* <Button name="Tabling" onClick={}/> */}
      {/* <Button name="Fundraisers" onClick={}/> */}
    </div>
  );
};

export default buttonLayout;

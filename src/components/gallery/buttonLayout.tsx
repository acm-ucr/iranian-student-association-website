"use client";

import React from "react";
import Button from "@/components/gallery/buttons";
import { useRouter } from "next/navigation";

const buttonLayout = () => {
  const router = useRouter();

  const handleSocialsRedirect = () => {
    router.push("/gallery/socials");
  };

  const handleCulturalEventsRedirect = () => {
    router.push("/gallery/cultural-events");
  };

  const handleTablingRedirect = () => {
    router.push("/gallery/tabling");
  };

  const handleFundraisersRedirect = () => {
    router.push("/gallery/fundraisers");
  };

  return (
    <div className="h-screen w-full">
      <Button name="Socials" onClick={handleSocialsRedirect} />
      <Button name="Cultural Events" onClick={handleCulturalEventsRedirect} />
      <Button name="Tabling" onClick={handleTablingRedirect} />
      <Button name="Fundraisers" onClick={handleFundraisersRedirect} />
    </div>
  );
};

export default buttonLayout;

import React from "react";

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return (
    <div className="mx-auto my-8 flex h-1/5 items-center justify-center rounded-3xl border-2 border-isa-light-red bg-isa-light-gray text-3xl sm:max-md:text-3xl md:max-lg:text-5xl lg:text-6xl">
      {name}
    </div>
  );
};

export default Button;

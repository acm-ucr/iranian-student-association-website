import React from "react";

type ButtonProps = {
  name: string;
  onClick?: () => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="mx-auto my-5 flex h-1/5 w-5/12 shrink cursor-pointer items-center justify-center rounded-3xl border-2 border-isa-light-red bg-isa-light-gray text-2xl transition-colors duration-300 hover:bg-isa-light-red hover:text-white sm:text-4xl md:text-4xl lg:text-6xl"
    >
      {name}
    </div>
  );
};

export default Button;

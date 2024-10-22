import React from "react";

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return (
    <div className="mx-auto my-5 flex h-1/5 w-5/12 shrink items-center justify-center rounded-3xl border-2 border-isa-light-red bg-isa-light-gray text-6xl">
      {name}
    </div>
  );
};

export default Button;

import React from "react";

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return <div className="">{name}</div>;
};

export default Button;

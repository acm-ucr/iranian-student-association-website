import React from "react";
import Link from "next/link";

const Button = (props: { txt: string; link: string }) => {
  return (
    <Link
      href={props.link}
      className="box-border items-center justify-center rounded-md border-transparent bg-isa-light-red px-11 py-2 text-3xl"
    >
      <div className="relative inline-block whitespace-nowrap">
        <span className="relative font-normal text-isa-bright-yellow">
          {props.txt}
        </span>
      </div>
    </Link>
  );
};

export default Button;

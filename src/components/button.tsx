import React from "react";

const Button = () => {
  // Click handler function
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <button
      className="rounded border-2 border-transparent text-xl tracking-widest bg-isa-light-red text-isa-bright-yellow px-10 py-1 inline-block">    
      Link
      </button>
      </div>
     
  );
};

export default Button;

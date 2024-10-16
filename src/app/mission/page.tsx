import React from "react";


const mission = () => {
  return ( 
      <div className="bg-isa-beige-100 min-h-screen p-8 flex flex-col items-center">
        {/* temp Header for when header gets done */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-isa-bright-yellow">HOLDER HEADER</h1>
      </header>

        {/* Image Section */}
            <section className="mb-8">
        <img
          src="/mission/group.svg"
          className="w-full max-w-screen-xl aspect-w-16 aspect-h-9 object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* Mission Statement Text */}
      <section className="text-center max-w-6xl mb-8 mt-8 px-8">
        <p className="text-4xl font-medium leading-normal text-isa-light-red">
          The Iranian Student Association at UCR aims to promote inclusivity and
          cultural awareness by organizing events that celebrate our shared
          heritage, educate on political and historical topics, and foster a
          united community where we can learn and grow together.
        </p>
      </section>
    </div>



  );
};

export default mission;

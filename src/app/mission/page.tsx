import React from "react";

const mission = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-isa-beige-100 p-8">
      {/* Image Section */}
      <section className="mb-8">
        <img
          src="/mission/group.svg"
          className="aspect-w-16 aspect-h-9 w-full max-w-screen-xl rounded-lg object-cover shadow-lg"
        />
      </section>
      <section className="mb-8 mt-8 max-w-6xl px-8 text-center">
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

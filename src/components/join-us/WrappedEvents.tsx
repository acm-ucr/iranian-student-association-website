"use client";

import React from "react";
import Events from "./Events";

const WrappedEvents = () => {
  return (
    <div className="mb-16 flex items-center justify-center">
      <div className="w-full rounded-lg p-4">
        <Events />
      </div>
    </div>
  );
};

export default WrappedEvents;

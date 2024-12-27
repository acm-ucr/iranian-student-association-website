"use client";

import React from "react";
import Events from "./Events";

const WrappedEvents = () => {
  return (
    <div className="flex min-h-screen flex-col px-1 py-1">
      <div className="w-full min-w-[300px] max-w-4xl rounded-lg p-4">
        <Events />
      </div>
    </div>
  );
};

export default WrappedEvents;

import React from "react";
import EventCard from "./eventCard";
import EVENTS from "@/data/landing/tempEvents";

type event = {
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
};

const LandingEvents = () => {
  return (
    <div className="mx-auto mt-28 pb-10 grid max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
      {EVENTS.map((event: event, index: number) => (
        <EventCard
          key={index}
          date={event.date}
          time={event.time}
          title={event.title}
          location={event.location}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default LandingEvents;

import React from "react";

type EventCardProps = {
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
};

const EventCard = ({
  date,
  time,
  title,
  location,
  description,
}: EventCardProps) => {
  return (
    <div className="flex max-w-md overflow-hidden rounded-3xl border-4 border-isa-events-beige bg-isa-events-beige shadow-md">
      <div className="flex flex-col items-center justify-center bg-isa-dark-red px-6 py-8 text-white">
        <span className="text-3xl font-bold">{date.split(" ")[0]}</span>
        <span className="text-lg">{date.split(" ")[1]}</span>
        <span className="mt-2 text-sm">{time}</span>
      </div>

      <div className="flex-1 p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{location}</p>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;

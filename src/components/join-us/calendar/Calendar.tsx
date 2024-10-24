"use client";

import React from "react";
import CustomHeader from "./CustomHeader";
import CustomToolbar from "./CustomToolbar";
import CustomEvents from "./CustomEvents";

interface Event {
  id: string;
  name: string;
  date: Date;
  location?: string;
  isAllDay: boolean;
  details?: string;
  title: string;
}

interface CalendarProps {
  currentMonth: Date;
  events: Event[];
  onMonthChange: (date: Date) => void;
}

const Calendar = ({ currentMonth, events, onMonthChange }: CalendarProps) => {
  return (
    <div className="shadow-lg, mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border-4 border-isa-dark-red bg-isa-beige-100 bg-opacity-80 p-5 text-center drop-shadow-md backdrop-blur-0">
      <CustomHeader currentMonth={currentMonth} />
      <CustomToolbar
        onMonthChange={onMonthChange}
        currentMonth={currentMonth}
      />
      <CustomEvents currentMonth={currentMonth} events={events} />
    </div>
  );
};

export default Calendar;

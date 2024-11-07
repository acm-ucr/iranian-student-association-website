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
    <div className="relative mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-4 border-isa-dark-red bg-isa-beige-100 bg-opacity-80 p-5 text-center shadow-lg drop-shadow-md backdrop-blur-0">
      <CustomHeader currentMonth={currentMonth} />
      <CustomToolbar
        onMonthChange={onMonthChange}
        currentMonth={currentMonth}
      />
      <div className="mt-4">
        <CustomEvents currentMonth={currentMonth} events={events} />
      </div>
    </div>
  );
};

export default Calendar;

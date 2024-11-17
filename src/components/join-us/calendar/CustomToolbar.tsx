"use client";

// this for nav between months

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CustomToolbarProps = {
  onMonthChange: (date: Date) => void;
  currentMonth: Date;
};

const CustomToolbar = ({ onMonthChange, currentMonth }: CustomToolbarProps) => {
  const navigateMonth = (direction: number) => {
    const newDate = new Date(
      currentMonth.setMonth(currentMonth.getMonth() + direction),
    );
    onMonthChange(newDate);
  };

  return (
    <div className="flex justify-between p-4">
      <button
        onClick={() => navigateMonth(-1)}
        className="text-xl text-isa-dark-red"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => navigateMonth(1)}
        className="text-xl text-isa-dark-red"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CustomToolbar;

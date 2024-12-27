"use client";

// this for showing the curr month + year

type CustomHeaderProps = {
  currentMonth: Date;
};

const CustomHeader = ({ currentMonth }: CustomHeaderProps) => {
  const month = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  return (
    <div className="flex items-center justify-center p-4">
      <h2 className="text-3xl font-bold text-isa-dark-red">
        {month} {year}
      </h2>
    </div>
  );
};

export default CustomHeader;

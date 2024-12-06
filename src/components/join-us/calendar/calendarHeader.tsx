export function CalendarHeader() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="grid grid-cols-7 gap-4 text-center">
      {days.map((day) => (
        <div key={day} className="text-sm font-semibold text-gray-600">
          {day}
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import Modal from "./Modal";

interface Event {
  id: string;
  name: string;
  date: Date;
  location?: string;
  isAllDay: boolean;
  details?: string;
}

interface CustomEventsProps {
  currentMonth: Date;
  events: Event[];
}

const CustomEvents = ({ currentMonth, events }: CustomEventsProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate();

  const dayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // find events for a specific day
  const getEventsForDay = (day: number) => {
    return events.filter(
      (event) =>
        new Date(event.date).getDate() === day &&
        new Date(event.date).getMonth() === currentMonth.getMonth() &&
        new Date(event.date).getFullYear() === currentMonth.getFullYear(),
    );
  };

  const renderCalendarDays = () => {
    // get empty slots
    const emptyDays = new Array(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay(),
    ).fill(null);
    // get month days
    const monthDays = new Array(daysInMonth)
      .fill(null)
      .map((_, index) => index + 1);

    return [...emptyDays, ...monthDays];
  };

  return (
    <div>
      {/* calendar days */}
      <div className="mb-2 grid grid-cols-7 gap-2">
        {dayLabels.map((label) => (
          <div key={label} className="text-center font-bold text-isa-dark-red">
            {label}
          </div>
        ))}
      </div>

      {/* calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {renderCalendarDays().map((day, index) => {
          const dayEvents = day ? getEventsForDay(day) : [];

          return (
            <div
              key={index}
              className="h-24 w-24 overflow-hidden rounded-lg bg-white bg-opacity-20 p-1"
            >
              {day && (
                <div className="flex h-full flex-col justify-between">
                  <div className="ml-2 mt-1 text-left font-bold text-isa-dark-red">
                    {day}
                  </div>
                  {dayEvents.length > 0 && (
                    <ul className="mt-1 max-h-full space-y-1 overflow-y-auto">
                      {dayEvents.map((event, idx) => (
                        <li
                          key={idx}
                          className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded bg-isa-light-beige p-1 text-xs text-isa-dark-red"
                          onClick={() => setSelectedEvent(event)}
                          style={{ textOverflow: "ellipsis" }}
                        >
                          {event.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
        
      {selectedEvent && (
        <Modal onClose={() => setSelectedEvent(null)}>
            <h2 className="text-lg font-bold">{selectedEvent.name}</h2>
            
            {selectedEvent.isAllDay ? (
                <p className="mt-2">All Day Event</p>
            ) : (
                <p className="mt-2">
                Date: {new Date(selectedEvent.date).toLocaleDateString()}
                <br />
                Time:{" "}
                {new Date(selectedEvent.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })}
                </p>
            )}

            {selectedEvent.location && (
                <p className="mt-1">Location: {selectedEvent.location}</p>
            )}

            {selectedEvent.details && (
                <p className="mt-1">Details: {selectedEvent.details}</p>
            )}

            
        </Modal>
      )}
      
    </div>
  );
};

export default CustomEvents;

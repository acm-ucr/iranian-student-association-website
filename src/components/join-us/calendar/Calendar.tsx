"use client";

import { useEffect, useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { CalendarHeader } from "./calendarHeader";
import { CalendarGrid } from "./calendarGrid";
import { CalendarEvent } from "@/lib/calendar-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );

  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const timeMin = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      ).toISOString();
      const timeMax = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      ).toISOString();

      const response = await fetch(
        `/api/calendar?timeMin=${timeMin}&timeMax=${timeMax}`,
      );
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (data.events) {
          setEvents(
            data.events.map((event: CalendarEvent) => {
              const isAllDay = isAllDayEvent(
                new Date(event.start),
                new Date(event.end),
              );
              const start = new Date(event.start);
              const end = new Date(event.end);

              if (isAllDay) {
                const localStart = new Date(
                  start.getTime() + start.getTimezoneOffset() * 60000,
                );
                const localEnd = new Date(
                  end.getTime() + end.getTimezoneOffset() * 60000,
                );

                return {
                  ...event,
                  start: localStart,
                  end: localEnd,
                };
              }

              return {
                ...event,
                start,
                end,
              };
            }),
          );
        }
      } else {
        const text = await response.text();
        console.error("Error fetching events: Response is not JSON", text);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  const isAllDayEvent = (start: Date, end: Date) => {
    const startMidnight = new Date(start).setHours(0, 0, 0, 0);
    const endMidnight = new Date(end).setHours(0, 0, 0, 0);
    return endMidnight - startMidnight === 24 * 60 * 60 * 1000;
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="border-b border-gray-200 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevMonth}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextMonth}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CalendarHeader />
      </div>
      <CalendarGrid
        currentDate={currentDate}
        events={events}
        loading={loading}
        onEventClick={handleEventClick}
      />
      {selectedEvent && (
        <div className="event-details-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold">{selectedEvent.summary}</h3>
            {isAllDayEvent(selectedEvent.start, selectedEvent.end) ? (
              <p>All day</p>
            ) : (
              <p>
                {format(selectedEvent.start, "PP p")} -{" "}
                {format(selectedEvent.end, "PP p")}
              </p>
            )}
            {selectedEvent.location && (
              <p className="mt-2 text-gray-600">
                <strong>Location:</strong> {selectedEvent.location}
              </p>
            )}
            {selectedEvent.description && (
              <p className="mt-4 text-gray-800">{selectedEvent.description}</p>
            )}
            <Button onClick={closeEventDetails} className="mt-6">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

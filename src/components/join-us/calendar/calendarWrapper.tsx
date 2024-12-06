"use client";

import { useEffect, useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { CalendarHeader } from "./calendarHeader";
import { CalendarGrid } from "./calendarGrid";
import { CalendarEvent } from "@/lib/calendar-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";

const CalendarWrapper = () => {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative mx-auto mb-8 flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-4 border-isa-dark-red bg-isa-beige-100 bg-opacity-80 p-4 shadow-2xl drop-shadow-md"
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-1 border-b border-isa-dark-red p-6"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-isa-dark-red">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevMonth}
              className="h-8 w-8 text-isa-dark-red"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextMonth}
              className="h-8 w-8 text-isa-dark-red"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
        <CalendarHeader />
      </motion.div>

      {/* GRID PART */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CalendarGrid
          currentDate={currentDate}
          events={events}
          loading={loading}
          onEventClick={handleEventClick}
        />
      </motion.div>

      {/* EVENT DETAILS MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-80 rounded-2xl bg-isa-beige-100 p-6 shadow-xl drop-shadow-xl"
            >
              <h3 className="text-lg font-semibold text-isa-dark-red">
                {selectedEvent.summary}
              </h3>
              {/* ALL DAY EVENTS */}
              {isAllDayEvent(selectedEvent.start, selectedEvent.end) ? (
                <p className="text-isa-dark-red">Time: All day</p>
              ) : (
                <>
                  {format(selectedEvent.start, "yyyy-MM-dd") ===
                  format(selectedEvent.end, "yyyy-MM-dd") ? (
                    <>
                      <p className="text-isa-dark-red">{`Date: ${format(
                        selectedEvent.start,
                        "PP",
                      )}`}</p>
                      <p className="text-isa-dark-red">
                        {`Time: ${format(
                          selectedEvent.start,
                          "p",
                        )} - ${format(selectedEvent.end, "p")}`}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-isa-dark-red">
                        {`Starts: ${format(selectedEvent.start, "PP")}`}
                      </p>
                      <p className="text-isa-dark-red">
                        {`Ends: ${format(selectedEvent.end, "PP")}`}
                      </p>
                    </>
                  )}
                </>
              )}
              {selectedEvent.location && (
                <p className="text-isa-dark-red">{`Location: ${selectedEvent.location}`}</p>
              )}
              {selectedEvent.description && (
                <p className="text-isa-dark-red">{`Details: ${selectedEvent.description}`}</p>
              )}
              <Button
                onClick={closeEventDetails}
                className="mt-4 bg-isa-dark-red text-white"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CalendarWrapper;

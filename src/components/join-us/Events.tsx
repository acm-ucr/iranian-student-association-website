"use client";

import { useState, useEffect } from "react";
import Calendar from "./calendar/Calendar";

type CalendarEvent = {
  id: string;
  name: string;
  date: Date;
  location?: string;
  isAllDay: boolean;
  details?: string;
  title: string;
};

type GoogleCalendarEvent = {
  id: string;
  summary: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
};

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const handleMonthChange = (newDate: Date) => {
    setCurrentMonth(newDate);
  };

  useEffect(() => {
    const fetchGoogleCalendarEvents = async () => {
      setLoading(true);

      const startDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1,
      ).toISOString();
      const endDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        0,
      ).toISOString();

      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${startDate}&timeMax=${endDate}&maxResults=10`,
        );

        const data = await res.json();

        console.log("API Response:", data);

        if (data.items) {
          const eventsData = data.items.map((event: GoogleCalendarEvent) => ({
            id: event.id,
            name: event.summary,
            date: new Date(event.start.dateTime ?? event.start.date ?? ""),
            location: event.location,
            isAllDay: !event.start.dateTime,
            details: event.description,
          }));

          setEvents(eventsData);
        } else {
          console.error("No events found in the API response.");
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleCalendarEvents();
  }, [currentMonth]);

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-8">
      {loading ? (
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          Loading events...
        </p>
      ) : (
        <Calendar
          currentMonth={currentMonth}
          events={events}
          onMonthChange={handleMonthChange}
        />
      )}
    </div>
  );
};

export default Events;

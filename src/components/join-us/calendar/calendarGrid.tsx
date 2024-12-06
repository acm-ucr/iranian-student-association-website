import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { CalendarEvent } from '@/lib/calendar-types';
import { cn } from '@/lib/utils';

interface CalendarGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  loading: boolean;
  onEventClick: (event: CalendarEvent) => void;
}

export function CalendarGrid({ currentDate, events, loading, onEventClick }: CalendarGridProps) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startingDayIndex = monthStart.getDay();
  const previousPadding = Array(startingDayIndex).fill(null);

  const getEventsForDay = (date: Date) => {
    return events.filter(event => isSameDay(new Date(event.start), date));
  };

  return (
    <div className="grid grid-cols-7 gap-px bg-gray-200 p-4">
      {previousPadding.map((_, index) => (
        <div
          key={`padding-${index}`}
          className="aspect-square bg-gray-50"
        />
      ))}
      
      {days.map((day) => {
        const dayEvents = getEventsForDay(day);
        const isCurrentMonth = isSameMonth(day, currentDate);
        
        return (
          <div
            key={day.toString()}
            className={cn(
              "aspect-square p-2 bg-white",
              !isCurrentMonth && "opacity-50"
            )}
          >
            <div className="text-sm font-medium text-gray-900">
              {format(day, 'd')}
            </div>
            <div className="mt-1 space-y-1">
              {loading ? (
                <div className="h-5 bg-gray-200 animate-pulse rounded" />
              ) : (
                dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="text-xs p-1 bg-rose-100 text-rose-900 rounded truncate cursor-pointer"
                    title={event.summary}
                    onClick={() => onEventClick(event)}
                  >
                    {event.summary}
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
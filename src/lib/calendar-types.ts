export interface CalendarEvent {
    id: string;
    summary: string;
    start: Date;
    end: Date;
    location?: string;
    description?: string;
  }
  
  export interface CalendarState {
    events: CalendarEvent[];
    loading: boolean;
    error: string | null;
  }
import { NextResponse } from 'next/server';
import { GoogleCalendarService } from '@/lib/google-calendar';

export const dynamic = "force-static";

export async function GET() {
    try {
      const calendarService = new GoogleCalendarService();
      const now = new Date();
      const timeMin = new Date(now.getFullYear(), now.getMonth(), 1);
      const timeMax = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
      const events = await calendarService.getEvents(timeMin, timeMax);
  
      const eventsWithLocation = events.map(event => ({
        id: event.id,
        summary: event.summary,
        start: event.start,
        end: event.end,
        location: event.location || 'Location TBD',
        description: event.description || 'No description available',
      }));
  
      return NextResponse.json({ events: eventsWithLocation });
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      return NextResponse.json(
        { error: 'Failed to fetch calendar events' },
        { status: 500 }
      );
    }
  }
  
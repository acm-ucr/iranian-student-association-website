import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { CalendarEvent } from "./calendar-types";

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

export class GoogleCalendarService {
  private auth: JWT;
  private calendar;

  constructor() {
    this.auth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: SCOPES,
    });

    this.calendar = google.calendar({ version: "v3", auth: this.auth });
  }

  async getEvents(timeMin: Date, timeMax: Date): Promise<CalendarEvent[]> {
    try {
      const response = await this.calendar.events.list({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        singleEvents: true,
        orderBy: "startTime",
        fields: "items(id,summary,start,end,description,location)",
      });

      return (response.data.items || []).map((event) => ({
        id: event.id!,
        summary: event.summary || "Untitled Event",
        start: new Date(
          event.start?.dateTime || event.start?.date || Date.now(),
        ),
        end: new Date(event.end?.dateTime || event.end?.date || Date.now()),
        description: event.description || undefined,
        location: event.location || "No location provided",
      }));
    } catch (error) {
      console.error("Error fetching calendar events:", error);
      throw error;
    }
  }
}

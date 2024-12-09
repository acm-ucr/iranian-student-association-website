import { NextResponse } from "next/server";
import { GoogleCalendarService } from "@/lib/google-calendar";

export const revalidate = 60;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const timeMin = url.searchParams.get("timeMin");
    const timeMax = url.searchParams.get("timeMax");

    if (!timeMin || !timeMax) {
      return NextResponse.json(
        { error: "Missing timeMin or timeMax query parameters" },
        { status: 400 },
      );
    }

    const calendarService = new GoogleCalendarService();
    const events = await calendarService.getEvents(
      new Date(timeMin),
      new Date(timeMax),
    );

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return NextResponse.json(
      { error: "Failed to fetch calendar events" },
      { status: 500 },
    );
  }
}

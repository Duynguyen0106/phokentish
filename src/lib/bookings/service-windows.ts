import { getDay, parse } from "date-fns";

export type ServiceWindow = { open: string; close: string };

/**
 * Published service windows for Pho Kentish.
 * Mon–Fri: lunch + dinner with an afternoon close.
 * Sat–Sun: continuous service.
 */
export function getServiceWindowsForDate(date: string): ServiceWindow[] {
  const day = getDay(parse(date, "yyyy-MM-dd", new Date())); // 0=Sun … 6=Sat
  const isWeekend = day === 0 || day === 6;

  if (isWeekend) {
    return [{ open: "12:00", close: "21:30" }];
  }

  return [
    { open: "12:00", close: "15:30" },
    { open: "16:30", close: "21:30" },
  ];
}

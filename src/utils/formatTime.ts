import { Type__TimeFormat } from "@/constant/types";

export default function formatTime(
  time?: string,
  options: {
    showSeconds?: boolean;
    prefixTimeFormat?: Type__TimeFormat;
    timeZonePrefix?: string;
  } = {}
): string {
  if (!time) return "";

  const timeFormat =
    options.prefixTimeFormat || localStorage.getItem("timeFormat") || "24-hour";
  const showSeconds = options.showSeconds || false;

  let timePart = time.includes("T") ? time.split("T")[1] : time; // Handle datetime
  timePart = timePart.split(".")[0];
  const [hh, mm, ss] = timePart.split(":");

  if (timeFormat === "12-hour") {
    const hour = parseInt(hh, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12; //  0 to 12 for AM
    const formattedTime = `${hour12}:${mm}`; // Base : "hh:mm"
    return showSeconds
      ? `${formattedTime}:${ss} ${suffix}`
      : `${formattedTime} ${suffix}`;
  }

  const formattedTime = `${hh}:${mm}`;
  return showSeconds ? `${formattedTime}:${ss}` : formattedTime;
}

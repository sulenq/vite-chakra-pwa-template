import { Type__TimeZoneObject } from "@/constant/types";
import moment from "moment-timezone";

const autoTimeZone = (): Type__TimeZoneObject => {
  const timeZone = moment.tz.guess();
  const autoTimeZone = `Auto (${timeZone})`;
  const offsetMinutes = moment.tz(timeZone).utcOffset();
  const offsetHours = offsetMinutes / 60;
  const formattedOffset = `UTC${offsetHours >= 0 ? "+" : ""}${String(
    offsetHours
  ).padStart(2, "0")}:00`;

  return {
    key: autoTimeZone,
    offset: offsetHours,
    offsetMs: offsetMinutes * 60 * 1000,
    formattedOffset,
  };
};

export default autoTimeZone;

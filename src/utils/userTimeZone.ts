import { Type__TimeZoneObject } from "@/constant/types";
import autoTimeZone from "./autoTimeZone";

const tryParseJSON = (value: string): Type__TimeZoneObject | null => {
  try {
    return JSON.parse(value) as Type__TimeZoneObject;
  } catch {
    return null;
  }
};

const cleanTimeZoneKey = (key: string): string => {
  return key.startsWith("Auto") ? key.replace(/^Auto \((.+)\)$/, "$1") : key;
};

const userTimeZone = (): Type__TimeZoneObject => {
  const storedTimeZone = localStorage.getItem("timeZone");

  if (!storedTimeZone || storedTimeZone.startsWith("Auto")) {
    return autoTimeZone();
  }

  const parsedTimeZone = tryParseJSON(storedTimeZone);

  if (parsedTimeZone) {
    return {
      ...parsedTimeZone,
      key: cleanTimeZoneKey(parsedTimeZone.key),
    };
  }

  return autoTimeZone();
};

export default userTimeZone;

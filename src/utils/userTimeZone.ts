import { Type__TimeZoneObject } from "@/constant/types";
import autoTimeZone from "./autoTimeZone";

const cleanTimeZoneKey = (key: string): string =>
  key.startsWith("Auto") ? key.replace(/^Auto \((.+)\)$/, "$1") : key;

const userTimeZone = (): Type__TimeZoneObject => {
  const autoTZ = autoTimeZone();
  const storedTimeZone = localStorage.getItem("timeZone");

  if (!storedTimeZone || storedTimeZone.startsWith("Auto")) return autoTZ;

  try {
    const parsedTimeZone = JSON.parse(storedTimeZone) as Type__TimeZoneObject;
    return { ...parsedTimeZone, key: cleanTimeZoneKey(parsedTimeZone.key) };
  } catch {
    return autoTZ;
  }
};

export default userTimeZone;

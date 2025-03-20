import moment from "moment-timezone";

const getTzOffsetMs = (timeZoneKey: string): number => {
  const cleanedTimeZoneKey = timeZoneKey.includes("Auto (")
    ? timeZoneKey.replace(/^Auto \(|\)$/g, "")
    : timeZoneKey;

  return moment.tz(cleanedTimeZoneKey).utcOffset() * 60 * 1000;
};

export default getTzOffsetMs;

import moment from "moment-timezone";

const getTzOffsetMs = (timeZone: string): number => {
  return moment.tz(timeZone).utcOffset() * 60 * 1000;
};

export default getTzOffsetMs;

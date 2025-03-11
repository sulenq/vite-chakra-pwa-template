import moment from "moment-timezone";

const timeZones = () => {
  return moment.tz.names().map((tz) => ({
    key: tz,
    offset: moment.tz(tz).utcOffset(),
    offsetMs: moment.tz(tz).utcOffset() * 60 * 1000,
    formattedOffset: `UTC${moment.tz(tz).format("Z")}`,
  }));
};

export default timeZones;

import moment from "moment-timezone";

const timeZones = () => {
  return moment.tz.names().map((tz) => {
    const offsetMinutes = moment.tz(tz).utcOffset();
    const abbreviation = moment.tz(tz).format("z");

    return {
      key: tz,
      offset: offsetMinutes,
      offsetMs: offsetMinutes * 60 * 1000,
      formattedOffset: `UTC${moment.tz(tz).format("Z")}`,
      localAbbr: abbreviation,
    };
  });
};

export default timeZones;

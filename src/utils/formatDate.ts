import moment from "moment-timezone";
import { MONTHS } from "@/constant/months";
import { Type__DateFormat, Type__DateVariant } from "@/constant/types";
import { WEEKDAYS_0_BASED } from "@/constant/weekdays";
import userTimeZone from "@/utils/userTimeZone";

const formatDate = (
  date?: Date,
  variant: Type__DateVariant = "fullMonth",
  options: {
    prefixDateFormat?: Type__DateFormat;
    prefixTimeZone?: string;
  } = {}
) => {
  if (!date) return "";

  const lang = localStorage.getItem("lang") || "id";
  const dateFormat =
    options.prefixDateFormat || localStorage.getItem("dateFormat") || "dmy";
  const timeZone = options.prefixTimeZone || userTimeZone();

  const momentDate = moment(date).tz(timeZone);

  const day = momentDate.date();
  const month = momentDate.month();
  const year = momentDate.year();
  const weekday = momentDate.day();

  const monthName = MONTHS[lang][month];
  const shortMonthName = monthName.substring(0, 3);
  const weekdayName = WEEKDAYS_0_BASED[lang][weekday];
  const shortWeekdayName = weekdayName.substring(0, 3);

  const basicVariant = variant === "basic";

  const formatDate = (
    day: number,
    year: number,
    monthName: string | number
  ) => {
    switch (dateFormat.toLowerCase()) {
      case "dmy":
        return `${day}${basicVariant ? "-" : " "}${monthName}${
          basicVariant ? "-" : " "
        }${year}`;
      case "mdy":
        return `${monthName}${basicVariant ? "-" : " "}${day}${
          basicVariant ? "-" : ", "
        }${year}`;
      case "ymd":
        return `${year}${basicVariant ? "-" : " "}${monthName}${
          basicVariant ? "-" : " "
        }${day}`;
      default:
        return `${day} ${monthName} ${year}`;
    }
  };

  switch (variant) {
    case "basic":
      return formatDate(day, year, month);
    case "shortMonth":
      return formatDate(day, year, shortMonthName);
    case "fullMonth":
      return formatDate(day, year, monthName);
    case "monthYear":
      return `${monthName} ${year}`;
    case "shortMonthDay":
      return `${day} ${shortMonthName}`;
    case "fullMonthDay":
      return `${day} ${monthName}`;
    case "weekdayBasic":
      return `${shortWeekdayName}, ${formatDate(day, year, monthName)}`;
    case "weekdayShortMonth":
      return `${shortWeekdayName}, ${formatDate(day, year, shortMonthName)}`;
    case "weekdayFullMonth":
      return `${weekdayName}, ${formatDate(day, year, monthName)}`;
    default:
      return formatDate(day, year, monthName);
  }
};

export default formatDate;

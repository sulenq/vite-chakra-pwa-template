import MONTHS from "@/constant/months";
import { Type__DateVariant } from "@/constant/types";
import { WEEKDAYS_0_BASED } from "@/constant/weekdays";

const formatDate = (
  date?: Date,
  variant?: Type__DateVariant,
  prerfixDateFormat?: string
) => {
  if (!date) return "";

  const lang = localStorage.getItem("lang") || "id";
  const dateFormat = prerfixDateFormat
    ? prerfixDateFormat
    : localStorage.getItem("dateFormat") || "dmy";

  const day = date.getDate();
  const month = date.getMonth(); // (0 = Januari, 11 = Desember)
  const year = date.getFullYear();
  const weekday = date.getDay(); // (0 = Minggu, 6 = Sabtu)

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

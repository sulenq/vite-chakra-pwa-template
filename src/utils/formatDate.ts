import MONTHS from "@/constant/months";
import WEEKDAYS from "@/constant/weekdays";
import { Type__DateVariant } from "@/constant/types";

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
  const weekdayName = WEEKDAYS[lang][weekday];
  const shortWeekdayName = weekdayName.substring(0, 3);

  const formatDate = (day: number, year: number, monthName: string) => {
    switch (dateFormat.toLowerCase()) {
      case "dmy":
        return `${day} ${monthName} ${year}`;
      case "mdy":
        return `${monthName} ${day}, ${year}`;
      case "ymd":
        return `${year} ${monthName} ${day}`;
      default:
        return `${day} ${monthName} ${year}`;
    }
  };

  switch (variant) {
    case "basic":
      return formatDate(day, year, monthName);
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

export default function formatTimeFromDateFormat(
  timeString: string | undefined
) {
  if (timeString) {
    let date = new Date(timeString);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    let formattedHours = String(hours).padStart(2, "0");
    let formattedMinutes = String(minutes).padStart(2, "0");

    let formattedTime = `${formattedHours}:${formattedMinutes}`;

    return formattedTime;
  } else {
    return "";
  }
}

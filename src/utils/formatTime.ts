export default function formatTime(
  timeString: string | undefined | null
): string {
  if (!timeString) {
    return "";
  }
  return timeString.slice(0, 5);
}

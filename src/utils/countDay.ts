export default function countDay(dateFrom: Date, dateTo: Date): number {
  // Set the time to the start of the day for both dates
  dateFrom?.setHours(0, 0, 0, 0);
  dateTo?.setHours(0, 0, 0, 0);

  // Calculate the difference in time
  const diffTime = Math.abs(dateTo?.getTime() - dateFrom?.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1;
}

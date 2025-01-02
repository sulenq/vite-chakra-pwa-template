export default function formatTimeFromDateFormat(
  timeString: string | undefined
) {
  if (timeString) {
    // Buat objek Date dari string waktu yang diberikan
    let date = new Date(timeString);

    // Ambil jam dan menit dari objek Date
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Format jam dan menit menjadi dua digit
    let formattedHours = String(hours).padStart(2, "0");
    let formattedMinutes = String(minutes).padStart(2, "0");

    // Gabungkan jam dan menit dalam format yang diinginkan
    let formattedTime = `${formattedHours}:${formattedMinutes}`;

    return formattedTime;
  } else {
    return "";
  }
}

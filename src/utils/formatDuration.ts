function formatDuration(
  seconds: number | undefined,
  options: "basic" | "short" | "numeric" = "basic"
): string {
  if (seconds) {
    switch (options) {
      default:
        return formatDurationBasic(seconds);
      case "numeric":
        return formatDurationNumeric(seconds);
      case "short":
        return formatDurationShort(seconds);
    }
  } else {
    return "00h 00m";
  }
}

function formatDurationBasic(detik: number | undefined | null): string {
  if (detik) {
    if (detik >= 3600) {
      // Jika lebih dari atau sama dengan 3600 detik, hanya tampilkan jam
      const jam = Math.floor(detik / 3600);
      return `${jam} jam`;
    } else if (detik >= 60) {
      // Jika lebih dari atau sama dengan 60 detik, hanya tampilkan menit
      const menit = Math.floor(detik / 60);
      return `${menit} menit`;
    } else {
      // Jika kurang dari 60 detik, hanya tampilkan detik
      return `${detik} detik`;
    }
  } else {
    return "";
  }
}

function formatDurationShort(seconds: number): string {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);

  let formattedHours = String(hours).padStart(2, "0");
  let formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}j ${formattedMinutes}m`;
}

function formatDurationNumeric(seconds: number): string {
  // Ubah nilai seconds ke bilangan bulat
  seconds = Math.ceil(seconds);

  // Hitung jam, menit, dan detik dari total detik
  const hours = Math.floor(Math.abs(seconds) / 3600);
  const minutes = Math.floor((Math.abs(seconds) % 3600) / 60);
  const remainingSeconds = Math.abs(seconds) % 60;

  // Buat format string untuk waktu
  const formattedTime = [hours, minutes, remainingSeconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");

  // Tambahkan tanda minus jika seconds negatif
  return seconds < 0 ? "-" + formattedTime : formattedTime;
}

export default formatDuration;

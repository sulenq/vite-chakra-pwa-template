const getLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error("Geolocation is not supported by this browser."));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error("Pengguna menolak permintaan geolokasi."));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(
              new Error(
                "Lokasi tidak tersedia. Cek pengaturan lokasi di perangkat anda"
              )
            );
            break;
          case error.TIMEOUT:
            reject(
              new Error(
                "Permintaan untuk mendapatkan lokasi pengguna telah habis waktunya."
              )
            );
            break;
          default:
            reject(
              new Error(
                `Terjadi kesalahan yang tidak diketahui: ${error.message}`
              )
            );
            break;
        }
      }
    );
  });
};

export default getLocation;

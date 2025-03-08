// Component UI
const confirm_label = {
  id: "Konfirmasi",
  en: "Confirm",
};
const select_all_label = {
  id: "Pilih semua",
  en: "Select all",
};
const selected_label = {
  id: "terpilih",
  en: "selected",
};
const search_input_default_placeholder = {
  id: "Pencarian...",
  en: "Search...",
};
const select_input_default_title = {
  id: "Pilih",
  en: "Select",
};
const select_input_default_placeholder = {
  id: "Pilih...",
  en: "Select...",
};
const week_days = {
  mon: {
    id: "Senin",
    en: "Monday",
  },
  tue: {
    id: "Selasa",
    en: "Tuesday",
  },
  wed: {
    id: "Rabu",
    en: "Wednesday",
  },
  thu: {
    id: "Kamis",
    en: "Thursday",
  },
  fri: {
    id: "Jumat",
    en: "Friday",
  },
  sat: {
    id: "Sabtu",
    en: "Saturday",
  },
  sun: {
    id: "Minggu",
    en: "Sunday",
  },
};
const date_picker_preset_label = {
  today: {
    id: "Hari ini",
    en: "Today",
  },
  tomorrow: {
    id: "Besok",
    en: "Tomorrow",
  },
  thisMonth: {
    id: "Bulan ini",
    en: "This month",
  },
  thisWeek: {
    id: "Minggu ini",
    en: "This week",
  },
};
const date_range_picker_preset_label = {
  thisWeek: {
    id: "Minggu ini",
    en: "This week",
  },
  nextWeek: {
    id: "Minggu depan",
    en: "Next week",
  },
  thisMonth: {
    id: "Bulan ini",
    en: "This month",
  },
  nextMonth: {
    id: "Bulan depan",
    en: "Next month",
  },
};
const date_picker_default_title = {
  id: "Pilih Tanggal",
  en: "Select Date",
};
const date_picker_default_placeholder = {
  id: "Pilih tanggal...",
  en: "Select date...",
};
const date_range_picker_default_title = {
  id: "Pilih Rentang Tanggal",
  en: "Select Date Range",
};
const date_range_picker_default_placeholder = {
  id: "Pilih rentang tanggal...",
  en: "Select date range...",
};
const time_picker_default_title = {
  id: "Pilih Waktu",
  en: "Select Time",
};
const time_picker_default_placeholder = {
  id: "Pilih waktu...",
  en: "Select time...",
};
const time_range_picker_default_title = {
  id: "Pilih Rentang Waktu",
  en: "Select Time Range",
};
const time_range_picker_default_placeholder = {
  id: "Pilih rentang waktu...",
  en: "Select time range...",
};

// Widget
const delete_all_inbox_button_label = {
  id: "Delete semua",
  en: "Delete all",
};

// Toasters
const no_auth_toast = {
  title: {
    id: "Tidak memiliki autentikasi",
    en: "No authentication",
  },
  description: {
    id: "Silahkan login dengan akun anda.",
    en: "Please login with your account.",
  },
};
const back_online_toast = {
  title: {
    id: "Koneksi Pulih",
    en: "Connection Recovered",
  },
  description: {
    id: "Anda kembali online.",
    en: "You are back online.",
  },
};
const login_loading_toast = {
  title: {
    id: "Login",
    en: "Login",
  },
  description: {
    id: "Memverifikasi kredensial.",
    en: "Verifying credentials.",
  },
};
const date_range_picker_error_toast = {
  title: {
    id: "Gagal memilih rentang tanggal",
    en: "Failed to select date range",
  },
  description: {
    id: "Tidak boleh melebihi rentang maksimum",
    en: "Must not exceed the maximum range",
  },
};

// Disclosures
const logout_disclosure = {
  title: {
    id: "Logout?",
    en: "Logout?",
  },
  description: {
    id: "Pastikan tidak ada proses ke server sebelum logout dikonfirmasi untuk menghindari error autentikasi.",
    en: "Make sure there is no process to the server before the logout is confirmed to avoid authentication errors.",
  },
};
const offline_disclosure = {
  title: {
    id: "Koneksi Terputus",
    en: "Connection Lost",
  },
  description: {
    id: "Sepertinya Anda sedang offline. Periksa koneksi internet Anda dan coba lagi.",
    en: "It looks like you are offline. Check your internet connection and try again.",
  },
};
const delete_all_inbox_disclosure = {
  title: {
    id: "Delete semua?",
    en: "Delete all?",
  },
  description: {
    id: "Delete semua inbox yang sudah dibaca.",
    en: "Delete all of the read inboxes.",
  },
};

// Navs
const navs = {
  home: {
    id: "Beranda",
    en: "Home",
  },
  invoice: {
    id: "Tagihan",
    en: "Invoice",
  },
  services: {
    id: "Layanan",
    en: "Services",
  },
  helpCenter: {
    id: "Pusat Bantuan",
    en: "Help Center",
  },
  settings: {
    id: "Pengaturan",
    en: "Settings",
  },
};

const religion_label = {
  id: "Agama",
  en: "Religion",
};

// Responses

// Others
const pay = {
  id: "Bayar",
  en: "Pay",
};
const see_all = {
  id: "Lihat semua",
  en: "See all",
};

export {
  date_range_picker_preset_label,
  date_picker_preset_label,
  select_all_label,
  selected_label,
  select_input_default_title,
  religion_label,
  confirm_label,
  date_range_picker_error_toast,
  date_picker_default_title,
  date_range_picker_default_title,
  time_picker_default_title,
  time_range_picker_default_title,
  week_days,
  time_picker_default_placeholder,
  time_range_picker_default_placeholder,
  date_picker_default_placeholder,
  date_range_picker_default_placeholder,
  select_input_default_placeholder,
  search_input_default_placeholder,
  navs,
  no_auth_toast,
  back_online_toast,
  login_loading_toast,
  delete_all_inbox_button_label,
  delete_all_inbox_disclosure,
  offline_disclosure,
  logout_disclosure,
  pay,
  see_all,
};

import {
  IconCashBanknote,
  IconCreditCard,
  IconLock,
  IconWalletOff,
} from "@tabler/icons-react";

const PRICING_BENEFITS = [
  {
    id: "gap_overlap_detection",
    label: "Deteksi gap & overlap",
    description:
      "Mendeteksi kesalahan pada bidang seperti gap dan overlap secara otomatis.",
  },
  {
    id: "dashboard_access",
    label: "Akses dashboard",
    description: "Dashboard interaktif untuk memantau data Anda.",
  },
  {
    id: "data_analysis",
    label: "Analisis data tanah",
    description:
      "Menyediakan alat analisis data untuk memetakan tanah dengan akurasi tinggi.",
  },
  {
    id: "priority_support",
    label: "Dukungan prioritas",
    description: "Dukungan pelanggan dengan waktu tanggapan lebih cepat.",
  },
  {
    id: "report_export",
    label: "Export laporan (PDF/Excel)",
    description:
      "Fitur ekspor laporan dalam berbagai format seperti PDF dan Excel.",
  },
  {
    id: "api_integration",
    label: "Integrasi API pihak ketiga",
    description:
      "Menghubungkan aplikasi GIS dengan layanan pihak ketiga menggunakan API.",
  },
  {
    id: "customization",
    label: "Kustomisasi fitur",
    description:
      "Opsi untuk menyesuaikan fitur sesuai dengan kebutuhan bisnis Anda.",
  },
];

const PRICING_LIST = [
  {
    id: 1,
    label: "Basic",
    monthly_price: 0,
    yearly_price: 0,
    description: "Paket gratis.",
    benefits: {
      gap_overlap_detection: true,
      dashboard_access: true,
      data_analysis: false,
      priority_support: false,
      report_export: false,
      api_integration: false,
      customization: false,
    },
    best: false,
  },
  {
    id: 2,
    label: "Essential",
    monthly_price: 50000,
    yearly_price: 500000,
    description: "Paket dasar untuk kebutuhan GIS standar.",
    benefits: {
      gap_overlap_detection: true,
      dashboard_access: true,
      data_analysis: true,
      priority_support: false,
      report_export: false,
      api_integration: false,
      customization: false,
    },
    best: false,
  },
  {
    id: 3,
    label: "Premium",
    monthly_price: 100000,
    yearly_price: 1000000,
    description: "Paket lengkap untuk pengelolaan GIS yang lebih luas.",
    benefits: {
      gap_overlap_detection: true,
      dashboard_access: true,
      data_analysis: true,
      priority_support: true,
      report_export: true,
      api_integration: false,
      customization: false,
    },
    best: true,
  },
  {
    id: 4,
    label: "Premium+",
    monthly_price: 200000,
    yearly_price: 2000000,
    description: "Paket profesional untuk kebutuhan GIS tingkat lanjut.",
    benefits: {
      gap_overlap_detection: true,
      dashboard_access: true,
      data_analysis: true,
      priority_support: true,
      report_export: true,
      api_integration: true,
      customization: true,
    },
    best: false,
  },
];

const PRICING_TRUST_SIGNALS = [
  {
    icon: IconCreditCard,
    label: "Pilihan pembayaran yang diterima",
    description:
      "Pilih dari Visa, Mastercard, PayPal, Google Pay, Apple Pay, Amex, Diners, JCB, dan UnionPay.",
  },
  {
    icon: IconLock,
    label: "Pembayaran yang aman",
    description:
      "Transaksi Anda dilindungi dengan enkripsi SSL 256-bit yang canggih.",
  },
  {
    icon: IconWalletOff,
    label: "Pembayaran yang mudah dan cepat",
    description:
      "Nikmati kemudahan dalam proses pembayaran yang cepat dan tanpa ribet menggunakan berbagai pilihan yang tersedia.",
  },
  {
    icon: IconCashBanknote,
    label: "Jaminan pengembalian dana",
    description:
      "Nikmati jaminan pengembalian dana dalam 30 hari jika Anda tidak puas dengan pembelian Anda.",
  },
];

export { PRICING_BENEFITS, PRICING_LIST, PRICING_TRUST_SIGNALS };

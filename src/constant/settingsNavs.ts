import {
  IconDeviceDesktop,
  IconGavel,
  IconInfoCircle,
  IconPalette,
  IconShieldLock,
} from "@tabler/icons-react";

const SETTINGS_NAVS = [
  {
    groupLabel: "Utama",
    list: [
      {
        icon: IconDeviceDesktop,
        label: "Tampilan",
        path: "/settings/display",
      },
      {
        icon: IconPalette,
        label: "Warna Bidang",
        path: "/settings/field",
      },
    ],
  },
  {
    groupLabel: "Lainnya",
    list: [
      {
        icon: IconInfoCircle,
        label: "Tentang",
        path: "/settings/about",
      },
      {
        icon: IconGavel,
        label: "Ketentuan Layanan",
        path: "/settings/terms-of-service",
      },
      {
        icon: IconShieldLock,
        label: "Kebijakan Privasi",
        path: "/settings/privacy-policy",
      },
    ],
  },
];

export default SETTINGS_NAVS;

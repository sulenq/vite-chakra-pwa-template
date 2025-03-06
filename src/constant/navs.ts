import {
  IconApps,
  IconHelpCircle,
  IconReceipt2,
  IconSmartHome,
} from "@tabler/icons-react";

const NAVS = [
  {
    label: {
      id: "Beranda",
      en: "Home",
    },
    path: "/home",
    icon: IconSmartHome,
  },
  {
    label: {
      id: "Tagihan",
      en: "Invoice",
    },
    path: "/invoice",
    icon: IconReceipt2,
  },
  {
    label: {
      id: "Layanan",
      en: "Services",
    },
    path: "/services",
    icon: IconApps,
  },
  {
    label: {
      id: "Pusat Bantuan",
      en: "Help Center",
    },
    path: "/help-center",
    icon: IconHelpCircle,
  },
];

export { NAVS };

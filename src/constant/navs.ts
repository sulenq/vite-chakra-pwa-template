import { IconApps, IconReceipt2, IconSmartHome } from "@tabler/icons-react";

const CLIENT_NAVS = [
  {
    label: "Beranda",
    path: "/home",
    icon: IconSmartHome,
  },
  {
    label: "Tagihan",
    path: "/invoice",
    icon: IconReceipt2,
  },
  {
    label: "Layanan",
    path: "/services",
    icon: IconApps,
  },
  // {
  //   label: "Pusat Bantuan",
  //   path: "/help-center",
  //   icon: IconHelpCircle,
  // },
];

export { CLIENT_NAVS };

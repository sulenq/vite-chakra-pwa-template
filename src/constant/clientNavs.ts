import {
  IconDiscount2,
  IconHelpCircle,
  IconReceipt2,
  IconSmartHome,
} from "@tabler/icons-react";

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
    label: "Pricing",
    path: "/pricing",
    icon: IconDiscount2,
  },
  {
    label: "Pusat Bantuan",
    path: "/help-center",
    icon: IconHelpCircle,
  },
];

export default CLIENT_NAVS;

import {
  IconApps,
  IconHelpCircle,
  IconReceipt2,
  IconSmartHome,
} from "@tabler/icons-react";

const NAVS = [
  {
    labelKey: "navs.home",
    path: "/home",
    icon: IconSmartHome,
  },
  {
    labelKey: "navs.invoice",
    path: "/invoice",
    icon: IconReceipt2,
  },
  {
    labelKey: "navs.services",
    path: "/services",
    icon: IconApps,
  },
  {
    labelKey: "navs.helpCenter",
    path: "/help-center",
    icon: IconHelpCircle,
  },
];

export { NAVS };

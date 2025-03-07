import MerchantHelpCenterPage from "@/pages/client/MerchantHelpCenterPage";
import MerchantHomePage from "@/pages/client/MerchantHomePage";
import MerchantInvoicePage from "@/pages/client/MerchantInvoicePage";
import MerchantServicePage from "@/pages/client/MerchantServicePage";
import MerchantSettingsPage from "@/pages/client/MerchantSettingsPage";
import RootPage from "@/pages/RootPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";
import { NAVS } from "./navs";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: <RootPage />,
  },
];

const PRIVATE_ROUTES: Interface__PrivateRoute[] = [
  {
    path: "/home",
    label: NAVS[0].label,
    element: <MerchantHomePage />,
  },
  {
    path: "/invoice",
    label: NAVS[1].label,
    element: <MerchantInvoicePage />,
  },
  {
    path: "/services",
    label: NAVS[2].label,
    element: <MerchantServicePage />,
  },
  {
    path: "/help-center",
    label: NAVS[3].label,
    element: <MerchantHelpCenterPage />,
  },
  {
    path: "/settings",
    label: {
      id: "Pengaturan",
      en: "Settings",
    },
    element: <MerchantSettingsPage />,
  },
  // {
  //   path: "/profile",
  //   label: NAVS[0].label,
  //   element: <MerchantProfilePage />,
  // },
];

export { PRIVATE_ROUTES, ROUTES };

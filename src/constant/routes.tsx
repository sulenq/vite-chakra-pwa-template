import MerchantHelpCenterPage from "@/pages/client/MerchantHelpCenterPage";
import MerchantHomePage from "@/pages/client/MerchantHomePage";
import MerchantInvoicePage from "@/pages/client/MerchantInvoicePage";
import MerchantServicePage from "@/pages/client/MerchantServicePage";
import MerchantSettingsPage from "@/pages/client/MerchantSettingsPage";
import RootPage from "@/pages/RootPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: <RootPage />,
  },
];

const PRIVATE_ROUTES: Interface__PrivateRoute[] = [
  {
    path: "/home",
    labelKey: "navs.home",
    element: <MerchantHomePage />,
  },
  {
    path: "/invoice",
    labelKey: "navs.invoice",
    element: <MerchantInvoicePage />,
  },
  {
    path: "/services",
    labelKey: "navs.services",
    element: <MerchantServicePage />,
  },
  {
    path: "/help-center",
    labelKey: "navs.helpCenter",
    element: <MerchantHelpCenterPage />,
  },
  {
    path: "/settings",
    labelKey: "navs.settings",
    element: <MerchantSettingsPage />,
  },
  // {
  //   path: "/profile",
  //   labelKey: "navs.profile",
  //   element: <MerchantProfilePage />,
  // },
];

export { PRIVATE_ROUTES, ROUTES };

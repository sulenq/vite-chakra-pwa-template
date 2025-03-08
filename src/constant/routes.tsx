import MerchantHelpCenterPage from "@/pages/MerchantHelpCenterPage";
import MerchantHomePage from "@/pages/MerchantHomePage";
import MerchantInvoicePage from "@/pages/MerchantInvoicePage";
import MerchantServicePage from "@/pages/MerchantServicePage";
import SettingsPage from "@/pages/SettingsPage";
import RootPage from "@/pages/RootPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";
import LanguageRegionSettingsPage from "@/pages/LanguageRegionSettingsPage";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    activePath: "/",
    element: <RootPage />,
  },
];

const PRIVATE_ROUTES: Interface__PrivateRoute[] = [
  {
    path: "/home",
    activePath: "/home",
    titleKey: "navs.home",
    element: <MerchantHomePage />,
  },
  {
    path: "/invoice",
    activePath: "/invoice",
    titleKey: "navs.invoice",
    element: <MerchantInvoicePage />,
  },
  {
    path: "/services",
    activePath: "/services",
    titleKey: "navs.services",
    element: <MerchantServicePage />,
  },
  {
    path: "/help-center",
    activePath: "/help-center",
    titleKey: "navs.helpCenter",
    element: <MerchantHelpCenterPage />,
  },
  {
    path: "/settings",
    activePath: "/settings",
    titleKey: "navs.settings",
    element: <SettingsPage />,
  },
  {
    path: "/settings/language",
    activePath: "/settings",
    titleKey: "settings_navs.language_region",
    backPath: "/settings",
    element: <LanguageRegionSettingsPage />,
  },
  // {
  //   path: "/profile",
  //   labelKey: "navs.profile",
  //   element: <MerchantProfilePage />,
  // },
];

export { PRIVATE_ROUTES, ROUTES };

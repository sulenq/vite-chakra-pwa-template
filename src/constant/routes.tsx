import MerchantHelpCenterPage from "@/pages/MerchantHelpCenterPage";
import MerchantHomePage from "@/pages/MerchantHomePage";
import MerchantInvoicePage from "@/pages/MerchantInvoicePage";
import MerchantServicePage from "@/pages/MerchantServicePage";
import RegionalSettingsPage from "@/pages/settings/RegionalSettingsPage";
import RootPage from "@/pages/RootPage";
import SettingsPage from "@/pages/SettingsPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";
import TestPage from "@/pages/TestPage";
import DisplaySettingsPage from "@/pages/settings/DisplaySettingsPage";
import PermissionsSettingsPage from "@/pages/settings/PermissionsSettingsPage";

export const ROUTES: Interface__Route[] = [
  {
    path: "/",
    activePath: "/",
    element: <RootPage />,
  },
  {
    path: "/test",
    activePath: "/test",
    element: <TestPage />,
  },
];

export const PRIVATE_ROUTES: Interface__PrivateRoute[] = [
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

  // Settings
  {
    path: "/settings",
    activePath: "/settings",
    titleKey: "navs.settings",
    element: <SettingsPage />,
  },
  {
    path: "/settings/display",
    activePath: "/settings",
    titleKey: "settings_navs.display",
    backPath: "/settings",
    element: <DisplaySettingsPage />,
  },
  {
    path: "/settings/regional",
    activePath: "/settings",
    titleKey: "settings_navs.regional",
    backPath: "/settings",
    element: <RegionalSettingsPage />,
  },
  {
    path: "/settings/permissions",
    activePath: "/settings",
    titleKey: "settings_navs.permissions",
    backPath: "/settings",
    element: <PermissionsSettingsPage />,
  },
  // {
  //   path: "/profile",
  //   labelKey: "navs.profile",
  //   element: <MerchantProfilePage />,
  // },
];

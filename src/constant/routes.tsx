import RootPage from "@/pages/RootPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";
import MerchantHomePage from "@/pages/client/MerchantHomePage";
import MerchantInvoicePage from "@/pages/client/MerchantInvoicePage";
import MerchantServicePage from "@/pages/client/MerchantServicePage";
import MerchantHelpCenterPage from "@/pages/client/MerchantHelpCenterPage";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: <RootPage />,
  },
];

const PRIVATE_ROUTES: Interface__PrivateRoute[] = [
  {
    path: "/home",
    label: "Beranda",
    element: <MerchantHomePage />,
  },
  {
    path: "/invoice",
    label: "Tagihan",
    element: <MerchantInvoicePage />,
  },
  {
    path: "/apps",
    label: "Apps",
    element: <MerchantServicePage />,
  },
  {
    path: "/help-center",
    label: "Pusat Bantuan",
    element: <MerchantHelpCenterPage />,
  },
  {
    path: "/settings",
    label: "Pengaturan",
    element: <MerchantHomePage />,
  },
  {
    path: "/profile",
    label: "Profile",
    element: <MerchantHomePage />,
  },
];

export { PRIVATE_ROUTES, ROUTES };

import RootPage from "@/pages/RootPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";
import MerchantHomePage from "@/pages/client/MerchantHomePage";
import MerchantInvoicePage from "@/pages/client/MerchantInvoicePage";
import MerchantPricingPage from "@/pages/client/MerchantPricingPage";

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
    path: "/pricing",
    label: "Pricing",
    element: <MerchantPricingPage />,
  },
  {
    path: "/help-center",
    label: "Pusat Bantuan",
    element: <MerchantHomePage />,
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

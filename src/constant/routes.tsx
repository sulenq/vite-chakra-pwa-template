import RootPage from "@/pages/RootPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";
import ClientHomePage from "@/pages/ClientHomePage";

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
    element: <ClientHomePage />,
  },
  {
    path: "/pricing",
    label: "Pricing",
    element: <ClientHomePage />,
  },
  {
    path: "/help-center",
    label: "Pusat Bantuan",
    element: <ClientHomePage />,
  },
  {
    path: "/settings",
    label: "Pengaturan",
    element: <ClientHomePage />,
  },
  {
    path: "/profile",
    label: "Profile",
    element: <ClientHomePage />,
  },
];

export { PRIVATE_ROUTES, ROUTES };

import RootPage from "@/pages/RootPage";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";
import HomePage from "@/pages/HomePage";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: <RootPage />,
  },
];

const PRIVATE_ROUTES: Interface__PrivateRoute[] = [
  {
    path: "/home",
    label: "Home",
    element: <HomePage />,
  },
];

export { PRIVATE_ROUTES, ROUTES };

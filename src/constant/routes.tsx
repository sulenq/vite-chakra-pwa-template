import RootPage from "@/pages/RootPage";
import { Interface__Route } from "./interfaces";
import HomePage from "@/pages/HomePage";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: <RootPage />,
  },
];

const PRIVATE_ROUTES: Interface__Route[] = [
  {
    path: "/home",
    element: <HomePage />,
  },
];

export { PRIVATE_ROUTES, ROUTES };

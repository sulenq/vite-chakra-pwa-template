import RootPage from "@/pages/RootPage";
import { Interface__Route } from "./interfaces";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: <RootPage />,
  },
];

const PRIVATE_ROUTES: Interface__Route[] = [];

export { PRIVATE_ROUTES, ROUTES };

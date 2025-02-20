import RootPage from "@/pages/RootPage";
import { createElement } from "react";
import { Interface__PrivateRoute, Interface__Route } from "./interfaces";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: createElement(RootPage),
  },
];

const PRIVATE_ROUTES: Interface__PrivateRoute[] = [];

export { PRIVATE_ROUTES, ROUTES };

import RootPage from "@/pages/RootPage";
import { createElement } from "react";
import { Interface__Route } from "./interfaces";

const ROUTES: Interface__Route[] = [
  {
    path: "/",
    element: createElement(RootPage),
  },
];

export { ROUTES };

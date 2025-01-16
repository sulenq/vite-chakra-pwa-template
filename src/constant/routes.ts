import RootPage from "@/pages/RootPage";
import { createElement, FunctionComponentElement } from "react";

interface Route {
  path: string;
  element: FunctionComponentElement<{}>;
  requireAuth?: boolean;
  requirePermissions?: boolean;
}

const ROUTES: Route[] = [
  {
    path: "/",
    element: createElement(RootPage),
  },
];

export { ROUTES };

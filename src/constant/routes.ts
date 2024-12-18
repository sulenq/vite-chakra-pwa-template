import RootPage from "@/pages/RootPage";
import { createElement } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    element: createElement(RootPage),
  },
];

export { routes };

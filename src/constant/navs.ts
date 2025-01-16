import {
  ChartBar,
  Cube,
  CurrencyCircleDollar,
  Users,
} from "@phosphor-icons/react";

const NAVS = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: ChartBar,
  },
  {
    label: "Project",
    link: "/projects",
    icon: Cube,
  },
  { label: "Transaction", link: "/transactions", icon: CurrencyCircleDollar },
  {
    label: "Clients",
    link: "/clients",
    icon: Users,
  },
];

export default NAVS;

import DonutChartTooltipContent from "@/components/ui-custom/DonutChartTooltipContent";
import LineChartTooltipContent from "@/components/ui-custom/LineChartTooltipContent";
import { createElement } from "react";
import { CurveType } from "recharts/types/shape/Curve";

const PRESET_LINE_CHART_TOOLTIP = {
  content: createElement(LineChartTooltipContent),
  cursor: {
    stroke: "var(--divider3)",
    strokeWidth: 2,
    strokeDasharray: "5",
  },
};

const PRESET_DONUT_CHART_TOOLTIP = {
  content: createElement(DonutChartTooltipContent),
  cursor: {
    stroke: "var(--divider3)",
    strokeWidth: 2,
    strokeDasharray: "5",
  },
};

const PRESET_LINE_CHART = {
  type: "monotone" as CurveType,
  strokeWidth: 2,
};

const PRESET_DOUGHNUT_CHART = {
  innerRadius: 70,
  outerRadius: 100,
  stroke: "",
  // paddingAngle: 4,
  // cornerRadius: 6,
};

export {
  PRESET_DOUGHNUT_CHART,
  PRESET_LINE_CHART,
  PRESET_DONUT_CHART_TOOLTIP,
  PRESET_LINE_CHART_TOOLTIP,
};

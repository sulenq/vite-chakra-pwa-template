import DonutChartTooltipContent from "@/components/ui-custom/DonutChartTooltipContent";
import LineChartTooltipContent from "@/components/ui-custom/LineChartTooltipContent";
import { createElement } from "react";
import { CurveType } from "recharts/types/shape/Curve";

export const PRESET_LINE_CHART_TOOLTIP = {
  content: createElement(LineChartTooltipContent),
  cursor: {
    stroke: "var(--d3)",
    strokeWidth: 2,
    strokeDasharray: "5",
  },
};

export const PRESET_DONUT_CHART_TOOLTIP = {
  content: createElement(DonutChartTooltipContent),
  cursor: {
    stroke: "var(--d3)",
    strokeWidth: 2,
    strokeDasharray: "5",
  },
};

export const PRESET_LINE_CHART = {
  type: "monotone" as CurveType,
  strokeWidth: 2,
};

export const PRESET_DOUGHNUT_CHART = {
  innerRadius: 70,
  outerRadius: 100,
  stroke: "",
  // paddingAngle: 4,
  // cornerRadius: 6,
};

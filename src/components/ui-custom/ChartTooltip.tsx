import { Tooltip } from "recharts";
import ChartTooltipContent from "./LineChartTooltipContent";

const ChartTooltip = () => {
  return (
    <Tooltip
      content={(props) => <ChartTooltipContent {...props} />}
      cursor={{
        stroke: "var(--d3)",
        stroke: 2,
        strokeDasharray: "5",
      }}
    />
  );
};

export default ChartTooltip;

import { FC } from "react";
import { ChartData } from "../../services";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

type ChartsProps = {
  chart: ChartData;
};

const Charts: FC<ChartsProps> = ({ chart }) => {
  switch (chart.type) {
    case "BAR":
      return <BarChart description={chart.description} values={chart.values} />;
    case "PIE":
      return <PieChart description={chart.description} values={chart.values} />;
    default:
      return null;
  }
};

export default Charts;

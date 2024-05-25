import { FC, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartData } from "../../services";

const BarChart: FC<Omit<ChartData, "type">> = ({ description, values }) => {
  const [options, series] = useMemo<
    [ApexCharts.ApexOptions, ApexAxisChartSeries | ApexNonAxisChartSeries]
  >(() => {
    const options: ApexCharts.ApexOptions = {
      title: {
        text: description,
      },
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    };

    const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
      {
        data: values.map(({ text: x, value: y }) => ({ x, y })),
      },
    ];

    return [options, series];
  }, [description, values]);
  return (
    <ReactApexChart options={options} series={series} type="bar" width="500" />
  );
};

export default BarChart;

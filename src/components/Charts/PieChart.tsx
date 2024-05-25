import { FC, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartData } from "../../services";

const PieChart: FC<Omit<ChartData, "type">> = ({ description, values }) => {
  const [options, series] = useMemo<
    [ApexCharts.ApexOptions, ApexAxisChartSeries | ApexNonAxisChartSeries]
  >(() => {
    const options: ApexCharts.ApexOptions = {
      title: {
        text: description,
      },
      chart: {
        type: "pie",
      },
      labels: values.map(({ text }) => text),
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    };

    const series: ApexAxisChartSeries | ApexNonAxisChartSeries = values.map(
      ({ value }) => Number(value)
    );

    return [options, series];
  }, [description, values]);

  return (
    <ReactApexChart options={options} series={series} type="pie" width="500" />
  );
};

export default PieChart;

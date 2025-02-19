import DashboardAreaChart from "../base/DashboardAreaChart";

type Props = {
  title: string;
  data: DataItem[];
  colors: { [areaName: string]: string };
};

function StatsAreaChart({ title, data, colors }: Props) {
  return (
    <div className="w-full md:w-128 h-64 flex flex-col">
      <h3 className="pl-8 font-medium">{title}</h3>
      <DashboardAreaChart colors={colors} data={data} />
    </div>
  );
}

export default StatsAreaChart;

import DashboardLineChart from "../base/DashboardLineChart";

type Props = {
  title: string;
  data: DataItem[];
  colors: { [lineName: string]: string };
};

function StatsLineChart({ title, data, colors }: Props) {
  return (
    <div className="w-full md:w-128 h-64 flex flex-col">
      <h3 className="pl-8 font-medium">{title}</h3>
      <DashboardLineChart colors={colors} data={data} />
    </div>
  );
}

export default StatsLineChart;

import DashboardLineChart, { DataItem } from "../base/DashboardLineChart";

type Props = {
  title: string;
  data: DataItem[];
};

function StatsLineChart({ title, data }: Props) {
  return (
    <div className="w-72 h-48 flex flex-col">
      <h3 className="">{title}</h3>
      <DashboardLineChart
        colors={{
          received: "#8884d8",
          opened: "#ffce04",
          clicked: "#A2CAAA",
        }}
        data={data}
      />
    </div>
  );
}

export default StatsLineChart;

import DashboardPieChart from "../base/DashboardPieChart";

type Props = { data: { name: string; value: number }[]; title: string };

function SourcePieChart({ data, title }: Props) {
  return (
    <div>
      <h3 className="pl-8 font-medium">{title}</h3>
      <div className="w-64 h-64">
        <DashboardPieChart data={data} color="#240E0B" />
      </div>
    </div>
  );
}

export default SourcePieChart;

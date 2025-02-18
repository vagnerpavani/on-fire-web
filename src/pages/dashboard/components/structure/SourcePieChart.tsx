import DashboardPieChart from "../base/DashboardPieChart";

type Props = { data: { name: string; value: number }[] };

function SourcePieChart({ data }: Props) {
  return (
    <div>
      <h3 className="pl-8 font-medium">Leituras por origem:</h3>
      <div className="w-64 h-64">
        <DashboardPieChart data={data} color="#4433aa" />
      </div>
    </div>
  );
}

export default SourcePieChart;

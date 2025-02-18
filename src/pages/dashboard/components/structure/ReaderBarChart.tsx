import DashboardBarChart from "../base/DashboardBarChart";

type Props = { data: DataItem[] };

function ReaderBarChart({ data }: Props) {
  return (
    <div>
      <h3 className="pl-8 font-medium">Leituras por campanha:</h3>
      <div className="w-64 h-56">
        <DashboardBarChart data={data} color="#4433aa" />
      </div>
    </div>
  );
}

export default ReaderBarChart;

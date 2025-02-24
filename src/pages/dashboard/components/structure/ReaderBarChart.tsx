import DashboardBarChart from "../base/DashboardBarChart";

type Props = { data: DataItem[]; title: string };

function ReaderBarChart({ data, title }: Props) {
  return (
    <div>
      <h3 className="pl-8 font-medium">{title}</h3>
      <div className="w-64 h-64">
        <DashboardBarChart data={data} color="#240E0B" />
      </div>
    </div>
  );
}

export default ReaderBarChart;

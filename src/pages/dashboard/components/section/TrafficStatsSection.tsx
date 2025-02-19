import ReaderBarChart from "../structure/ReaderBarChart";
import SourcePieChart from "../structure/SourcePieChart";

function TrafficStatsSection() {
  const pieDataMock = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const barDataMock = [
    {
      name: "C1",
      engagement: 4000,
    },
    {
      name: "C2",
      engagement: 3000,
    },
    {
      name: "C3",
      engagement: 2000,
    },
  ];
  return (
    <div className="p-2 bg-brand-white  rounded-md  my-2 border-solid border-2 border-gray-100">
      <h2 className="text-2xl font-bold text-brand-yellow w-full md:text-start text-center">
        Estátisticas de tráfego:
      </h2>
      <div className="flex justify-around flex-col items-center md:flex-row ">
        <SourcePieChart data={pieDataMock} title="Streaks por origem:" />
        <SourcePieChart data={pieDataMock} title="Streaks por midia:" />
        <ReaderBarChart data={barDataMock} />
      </div>
    </div>
  );
}

export default TrafficStatsSection;

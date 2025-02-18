import StatsLineChart from "../structure/StatsLineChart";

function EngagementStatsSection() {
  const mockData = [
    {
      name: "Newsletter A",
      received: 200,
      opened: 100,
      clicked: 30,
    },
    {
      name: "Newsletter B",
      received: 300,
      opened: 160,
      clicked: 50,
    },
    {
      name: "Newsletter C",
      received: 150,
      opened: 100,
      clicked: 80,
    },
    {
      name: "Newsletter D",
      received: 300,
      opened: 100,
      clicked: 50,
    },
  ];
  return (
    <div className="bg-brand-white drop-shadow-md p-2 rounded-md">
      <h2 className="font-bold text-2xl text-brand-yellow">
        Estátisticas de engajamento
      </h2>
      <div className="flex justify-between">
        <StatsLineChart title="Email" data={mockData} />
        <StatsLineChart title="Web" data={mockData} />
        <StatsLineChart title="Saúde" data={mockData} />
      </div>
    </div>
  );
}

export default EngagementStatsSection;

import StatsAreaChart from "../structure/StatsAreaChart";
import StatsLineChart from "../structure/StatsLineChart";

function EngagementStatsSection() {
  const mockPeopleWithStreakData = [
    {
      name: "Newsletter A",
      hasStreak: 1,
      noStreak: 299,
    },
    {
      name: "Newsletter B",
      hasStreak: 250,
      noStreak: 80,
    },
    {
      name: "Newsletter C",
      hasStreak: 300,
      noStreak: 50,
    },
    {
      name: "Newsletter D",
      hasStreak: 350,
      noStreak: 30,
    },
  ];

  const mockRecordData = [
    {
      name: "Newsletter A",
      highest: 8,
    },
    {
      name: "Newsletter B",

      highest: 10,
    },
    {
      name: "Newsletter C",

      highest: 11,
    },
    {
      name: "Newsletter D",

      highest: 12,
    },
  ];

  const colors = { hasStreak: "#2ecc71", noStreak: "#e74c3c " };
  return (
    <div className="p-2 bg-brand-white  rounded-md mt-2 border-solid border-2 border-gray-100 w-full">
      <h2 className="font-bold text-2xl text-brand-yellow w-full md:text-start text-center">
        Estátisticas de engajamento
      </h2>
      <div className="flex justify-between md:flex-row flex-col items-center">
        <StatsAreaChart
          title="Pessoas com streak"
          data={mockPeopleWithStreakData}
          colors={colors}
        />
        <StatsLineChart
          title="Records de streak"
          data={mockRecordData}
          colors={colors}
        />
        <StatsLineChart
          title="Saúde"
          data={mockPeopleWithStreakData}
          colors={colors}
        />
      </div>
    </div>
  );
}

export default EngagementStatsSection;

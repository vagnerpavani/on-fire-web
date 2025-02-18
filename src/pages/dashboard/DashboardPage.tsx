import PageWrapper from "../../components/base/PageWrapper";
import Select from "../../components/base/Select";
import EngagementStatsSection from "./components/section/EngagementStatsSection";
import ReaderRankingSection from "./components/section/ReaderRankingSection";
import TrafficStatsSection from "./components/section/TrafficStatsSection";

function DashboardPage() {
  return (
    <PageWrapper>
      <h1 className="w-full text-center mt-8 text-brand-yellow font-sans font-bold text-4xl">
        Streaks Dashboard
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex mt-4 items-center">
          <p>Filtros:</p>
          <Select options={["mock_1", "mock_2"]} unselectedText="Newsletter" />
          <Select
            options={["mock_1", "mock_2"]}
            unselectedText="Streak status"
          />
          <div className="flex">
            <div className="flex items-center">
              <p>começa:</p>
              <input
                className="border-brand-yellow border-2 rounded-md mr-2"
                type="date"
              />
            </div>
            <div className="flex items-center">
              <p>termina:</p>
              <input
                className="border-brand-yellow border-2 rounded-md mr-2"
                type="date"
              />
            </div>
          </div>
        </div>
        <div className="w-5/6">
          <div className="flex flex-col justify-center items-stretch w-full">
            <EngagementStatsSection />
            <TrafficStatsSection />
            <ReaderRankingSection />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default DashboardPage;

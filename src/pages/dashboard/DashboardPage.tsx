import { useState } from "react";
import PageWrapper from "../../components/base/PageWrapper";
import Select from "../../components/base/Select";
import EngagementStatsSection from "./components/section/EngagementStatsSection";
import ReaderRankingSection from "./components/section/ReaderRankingSection";
import TrafficStatsSection from "./components/section/TrafficStatsSection";

function DashboardPage() {
  const [newsletterFilter, setNewsletterFilter] = useState("");
  const [streakStatusFilter, setStreakStatusFilter] = useState("");
  const [startAtFilter, setStartAtFilter] = useState("");
  const [endAtFilter, setEndAtFilter] = useState("");

  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PageWrapper>
      <h1 className="w-full text-center mt-8 text-brand-yellow font-sans font-bold text-4xl">
        Streaks Dashboard
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col mt-4 items-stretch md:items-center md:flex-row">
          <p className="font-medium">Filtros:</p>
          <Select
            options={posts.map((p) => p.title)}
            unselectedText="Newsletter"
            value={newsletterFilter}
            setValue={setNewsletterFilter}
          />
          <Select
            options={["streak", "no-streak"]}
            unselectedText="Streak status"
            value={streakStatusFilter}
            setValue={setStreakStatusFilter}
          />
          <div className="flex flex-col md:flex-row">
            <div className="flex md:items-center mx-1 my-1 md:my-0">
              <p>começa:</p>
              <input
                className="border-brand-yellow border-2 rounded-md md:mr-2"
                type="date"
                value={startAtFilter}
                onChange={(e) => {
                  setStartAtFilter(e.target.value);
                }}
              />
            </div>
            <div className="flex md:items-center mx-1">
              <p>termina:</p>
              <input
                className="border-brand-yellow border-2 rounded-md md:mr-2"
                type="date"
                value={endAtFilter}
                onChange={(e) => {
                  setEndAtFilter(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-5/6">
          <div className="flex flex-col justify-center items-stretch w-full">
            <EngagementStatsSection
              setPosts={setPosts}
              newsletterFilter={newsletterFilter}
              streakStatusFilter={streakStatusFilter}
              startAtFilter={startAtFilter}
              endAtFilter={endAtFilter}
            />
            <ReaderRankingSection
              newsletterFilter={newsletterFilter}
              streakStatusFilter={streakStatusFilter}
              startAtFilter={startAtFilter}
              endAtFilter={endAtFilter}
            />
            <TrafficStatsSection
              newsletterFilter={newsletterFilter}
              streakStatusFilter={streakStatusFilter}
              startAtFilter={startAtFilter}
              endAtFilter={endAtFilter}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default DashboardPage;

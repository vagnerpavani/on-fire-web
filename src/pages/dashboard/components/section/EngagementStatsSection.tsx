import { useEffect, useState } from "react";
import StatsAreaChart from "../structure/StatsAreaChart";
import StatsLineChart from "../structure/StatsLineChart";
import { makeMainApiHttpClient } from "../../../../services/http-client";

type PeopleWithStreakMetric = {
  name: string;
  hasStreak: number;
  noStreak: number;
};

type PostRecordsMetric = {
  name: string;
  highest: number;
};

type StreakLossMetric = {
  name: string;
  streakLoss: number;
};

type StatsResponse = {
  peopleWithStreak: [
    {
      postId: string;
      title: string;
      publishedAt: string;
      userWithStreak: number;
      userWithNoStreak: number;
    }
  ];
  postRecords: [
    {
      postId: string;
      title: string;
      publishedAt: string;
      highestStreak: number;
    }
  ];
  userStreakLoss: [
    {
      postId: string;
      title: string;
      publishedAt: string;
      streakLoss: number;
    }
  ];
};

function EngagementStatsSection() {
  const [peopleWithStreakMetric, setPeopleWithStreakMetric] = useState<
    PeopleWithStreakMetric[]
  >([]);

  const [postRecordsMetric, setPostRecordsMetric] = useState<
    PostRecordsMetric[]
  >([]);

  const [streakLossMetric, setStreakLossMetric] = useState<StreakLossMetric[]>(
    []
  );

  useEffect(() => {
    const apiClient = makeMainApiHttpClient();

    apiClient.get("/streak/stats").then((res: { data: StatsResponse }) => {
      if (!res.data) return;

      setPeopleWithStreakMetric(
        res.data.peopleWithStreak.map((post) => {
          return {
            name: post.publishedAt,
            hasStreak: post.userWithStreak,
            noStreak: post.userWithNoStreak,
          };
        })
      );

      setPostRecordsMetric(
        res.data.postRecords.map((post) => {
          return {
            name: post.publishedAt,
            highest: post.highestStreak,
          };
        })
      );

      setStreakLossMetric(
        res.data.userStreakLoss.map((post) => {
          return {
            name: post.publishedAt,
            streakLoss: post.streakLoss,
          };
        })
      );
    });
  }, []);

  const colors = { hasStreak: "#2ecc71", noStreak: "#e74c3c " };
  return (
    <div className="p-2 bg-brand-white  rounded-md mt-2 border-solid border-2 border-gray-100 w-full">
      <h2 className="font-bold text-2xl text-brand-yellow w-full md:text-start text-center">
        Estátisticas de engajamento
      </h2>
      <div className="flex justify-between md:flex-row flex-col items-center">
        <StatsAreaChart
          title="Pessoas com streak"
          data={peopleWithStreakMetric}
          colors={colors}
        />
        <StatsLineChart
          title="Records de streak"
          data={postRecordsMetric}
          colors={colors}
        />
        <StatsLineChart
          title="Perderam a streak"
          data={streakLossMetric}
          colors={colors}
        />
      </div>
    </div>
  );
}

export default EngagementStatsSection;

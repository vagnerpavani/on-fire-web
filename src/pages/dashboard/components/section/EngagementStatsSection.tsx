import { useEffect, useState } from "react";
import StatsAreaChart from "../structure/StatsAreaChart";
import StatsLineChart from "../structure/StatsLineChart";
import { makeMainApiHttpClient } from "../../../../services/http-client";
import dayjs from "dayjs";

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
  posts: Post[];
};

type Props = {
  newsletterFilter: string;
  streakStatusFilter: string;
  startAtFilter: string;
  endAtFilter: string;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

function EngagementStatsSection({
  setPosts,
  newsletterFilter,
  streakStatusFilter,
  startAtFilter,
  endAtFilter,
}: Props) {
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

    const params: {
      startAt?: string;
      endAt?: string;
      postId?: string;
      streakStatus?: string;
    } = {};

    newsletterFilter ? (params.postId = newsletterFilter) : null;
    streakStatusFilter ? (params.streakStatus = streakStatusFilter) : null;
    startAtFilter ? (params.startAt = dayjs(startAtFilter).format()) : null;
    endAtFilter ? (params.endAt = dayjs(endAtFilter).format()) : null;

    apiClient
      .get("/streak/stats", { params })
      .then((res: { data: StatsResponse }) => {
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

        setPosts(res.data.posts);
      });
  }, [newsletterFilter, streakStatusFilter, startAtFilter, endAtFilter]);

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

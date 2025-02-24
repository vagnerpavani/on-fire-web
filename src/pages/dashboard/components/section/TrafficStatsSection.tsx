import { useEffect, useState } from "react";
import ReaderBarChart from "../structure/ReaderBarChart";
import SourcePieChart from "../structure/SourcePieChart";
import { makeMainApiHttpClient } from "../../../../services/http-client";
import dayjs from "dayjs";

type StatsResponse = {
  campaignResults: Metric[];
  sourceResults: Metric[];
  mediumResults: Metric[];
};

type Metric = {
  name: string;
  value: number;
};

type Props = {
  newsletterFilter: string;
  streakStatusFilter: string;
  startAtFilter: string;
  endAtFilter: string;
};

function TrafficStatsSection({
  newsletterFilter,
  streakStatusFilter,
  startAtFilter,
  endAtFilter,
}: Props) {
  const [campaignMetrics, setCampaignMetrics] = useState<Metric[]>([]);
  const [mediumMetrics, setMediumMetrics] = useState<Metric[]>([]);
  const [sourceMetrics, setSourceMetrics] = useState<Metric[]>([]);

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
        if (res.data.campaignResults)
          setCampaignMetrics(res.data.campaignResults);
        if (res.data.mediumResults) setMediumMetrics(res.data.mediumResults);
        if (res.data.sourceResults) setSourceMetrics(res.data.sourceResults);
      });
  }, []);

  return (
    <div className="p-2 bg-brand-white  rounded-md  my-2 border-solid border-2 border-gray-100">
      <h2 className="text-2xl font-bold text-brand-yellow w-full md:text-start text-center">
        Estátisticas de tráfego:
      </h2>
      <div className="flex justify-around flex-col items-center md:flex-row ">
        <SourcePieChart data={sourceMetrics} title="Streaks por origem:" />
        <SourcePieChart data={mediumMetrics} title="Streaks por midia:" />
        <ReaderBarChart data={campaignMetrics} />
      </div>
    </div>
  );
}

export default TrafficStatsSection;

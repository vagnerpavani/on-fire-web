import { useEffect, useState } from "react";
import ReaderBarChart from "../structure/ReaderBarChart";
import SourcePieChart from "../structure/SourcePieChart";
import { makeMainApiHttpClient } from "../../../../services/http-client";

type Read = {
  id: string;
  userId: string;
  postId: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmChannel: string | null;
};

type StatsResponse = {
  posts: [
    {
      id: string;
      title: string;
      publishedAt: string;
      reads: Read[];
    }
  ];
};

type Metric = {
  name: string;
  value: number;
};

function TrafficStatsSection() {
  const [campaignMetrics, setCampaignMetrics] = useState<Metric[]>([]);
  const [mediumMetrics, setMediumMetrics] = useState<Metric[]>([]);
  const [sourceMetrics, setSourceMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    const utmCampaigns: Record<string, number> = {};
    const utmMediums: Record<string, number> = {};
    const utmSources: Record<string, number> = {};

    const apiClient = makeMainApiHttpClient();

    apiClient.get("/streak/stats").then((res: { data: StatsResponse }) => {
      const reads: Read[] = [];
      res.data.posts.forEach((post) => {
        reads.push(...post.reads);
      });

      reads.forEach((read) => {
        if (read.utmCampaign)
          utmCampaigns[read.utmCampaign] = utmCampaigns[read.utmCampaign] + 1;
        if (read.utmMedium)
          utmMediums[read.utmMedium] = utmMediums[read.utmMedium] + 1;
        if (read.utmSource)
          utmSources[read.utmSource] = utmSources[read.utmSource] + 1;
      });
    });

    const campaignFormated = Object.entries(utmCampaigns).map(
      ([name, value]): Metric => ({ name, value })
    );
    const mediumFormated = Object.entries(utmMediums).map(
      ([name, value]): Metric => ({ name, value })
    );
    const sourceFormated = Object.entries(utmSources).map(
      ([name, value]): Metric => ({ name, value })
    );
    setCampaignMetrics(campaignFormated);
    setMediumMetrics(mediumFormated);
    setSourceMetrics(sourceFormated);
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

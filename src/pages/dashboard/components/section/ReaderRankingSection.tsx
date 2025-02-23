import { useEffect, useState } from "react";
import Ranking from "../structure/Ranking";
import { makeMainApiHttpClient } from "../../../../services/http-client";

type RankingReaders = {
  position: number;
  id: number;
  email: string;
  recordStreak: number;
  currentStreak: number;
};

type RankingResponse = {
  currentStreakRanking: RankingReaders[];
  recordStreakRanking: RankingReaders[];
};

type ReaderInfo = {
  email: string;
  position: number;
  streak: number;
};

function ReaderRankingSection() {
  const [recordRanking, setRecordRanking] = useState<ReaderInfo[]>([]);
  const [currentRanking, setCurrentRanking] = useState<ReaderInfo[]>([]);
  useEffect(() => {
    const apiClient = makeMainApiHttpClient();
    apiClient
      .get("/streak/ranking")
      .then((res: { data: RankingResponse }) => {
        if (
          !res.data ||
          !res.data.recordStreakRanking ||
          !res.data.currentStreakRanking
        )
          return;
        setRecordRanking(
          res.data.recordStreakRanking.map((user) => {
            return { streak: user.recordStreak, ...user };
          })
        );
        setCurrentRanking(
          res.data.currentStreakRanking.map((user) => {
            return { streak: user.currentStreak, ...user };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full justify-between md:mt-2 md:flex-row items-center  md:mb-0">
      <div className="md:mr-2 w-full my-2 md:my-0">
        <Ranking title="Ranking de Streaks atuais" readers={currentRanking} />
      </div>
      <div className="w-full ">
        <Ranking title="Ranking de Streaks recorde" readers={recordRanking} />
      </div>
    </div>
  );
}

export default ReaderRankingSection;

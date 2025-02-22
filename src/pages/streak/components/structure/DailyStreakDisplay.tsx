import dayjs from "dayjs";
import DailyStreakCheck from "../base/DailyStreakCheck";
import { WEEKDAYS } from "../../../../constants";
import { useEffect, useState } from "react";

type Props = {
  posts: Post[];
};

function DailyStreakDisplay({ posts }: Props) {
  const [dailyChecks, setDailyChecks] = useState<
    { isActive: boolean; weekDay: string }[]
  >([]);

  useEffect(() => {
    if (posts.length === 0) return;
    const todayDay = dayjs().day();

    const monday =
      todayDay > WEEKDAYS.SUNDAY
        ? dayjs()
            .subtract(todayDay - 1, "day")
            .format()
        : dayjs().subtract(6, "day").format();

    const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    const incomingDailyChecks = days.map((day, index) => {
      const date = dayjs(monday).add(index, "day").format("DD/MM/YYYY");
      const postReaded = posts.find((post) => {
        return dayjs(post.publishedAt).format("DD/MM/YYYY") === date;
      });

      const isActive = postReaded ? true : false;
      return { isActive, weekDay: day };
    });

    setDailyChecks(incomingDailyChecks);
  }, [posts]);

  return (
    <div className="flex justify-around items-center w-96 border-solid border-2 border-brand-yellow rounded-md h-32 drop-shadow-md bg-brand-white">
      {dailyChecks.map((dailyCheck, i) => {
        return (
          <DailyStreakCheck
            day={dailyCheck.weekDay}
            isActive={dailyCheck.isActive}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default DailyStreakDisplay;

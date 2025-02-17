import DailyStreakCheck from "../base/DailyStreakCheck";

function DailyStreakDisplay() {
  return (
    <div className="flex justify-around items-center w-96 border-solid border-2 border-brand-yellow rounded-md h-32 drop-shadow-md bg-brand-white">
      <DailyStreakCheck day="Seg" isActive={true} />
      <DailyStreakCheck day="Ter" isActive={true} />
      <DailyStreakCheck day="Qua" isActive={true} />
      <DailyStreakCheck day="Qui" isActive={false} />
      <DailyStreakCheck day="Sex" isActive={false} />
      <DailyStreakCheck day="Sáb" isActive={false} />
    </div>
  );
}

export default DailyStreakDisplay;

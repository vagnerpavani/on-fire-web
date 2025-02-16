function DailyStreakCheck(props: { day: string; isActive: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <p>{props.day}</p>
      <div className="bg-brand-grey w-8 h-8 rounded-full"></div>
    </div>
  );
}

export default DailyStreakCheck;

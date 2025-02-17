function DailyStreakCheck(props: { day: string; isActive: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <p>{props.day}</p>
      {props.isActive ? (
        <div className="bg-brand-yellow w-8 h-8 rounded-full p-1 flex justify-center items-center">
          <svg viewBox="0 0 71 54" fill="none">
            <path
              d="M23.0001 42.68L6.32014 26L0.640137 31.64L23.0001 54L71.0001 6L65.3601 0.360001L23.0001 42.68Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        <div className="bg-brand-grey w-8 h-8 rounded-full"></div>
      )}
    </div>
  );
}

export default DailyStreakCheck;

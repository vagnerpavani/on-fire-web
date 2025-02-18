import DailyStreakDisplay from "../structure/DailyStreakDisplay";

function StreakSection() {
  return (
    <div className="min-h-144 flex flex-col justify-around items-center">
      <img className="w-48" alt="Logo da página." src="src/assets/logo.jpg" />

      <DailyStreakDisplay />

      <div className="flex flex-col items-center w-96 text-center">
        <p className="font-medium text-4xl text-brand-yellow mb-2">
          <span className="font-bold">10</span> dias seguidos!
        </p>
        <p className="font-medium text-2xl">
          Bom streak! Continue assim para liberar novas conquistas
        </p>
      </div>
    </div>
  );
}

export default StreakSection;

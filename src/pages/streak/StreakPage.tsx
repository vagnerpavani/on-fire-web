import PageWrapper from "../../components/base/PageWrapper";
import DailyStreakCheck from "./components/DailyStreakCheck";

function StreakPage() {
  return (
    <>
      <PageWrapper>
        <div className="min-h-screen flex flex-col justify-around items-center">
          <img
            className="w-64"
            alt="Logo da página."
            src="src/assets/logo.jpg"
          />

          <div className="flex justify-around items-center w-96 border-solid border-2 border-brand-yellow rounded-md h-32 drop-shadow-md bg-brand-white">
            <DailyStreakCheck day="Seg" isActive={false} />
            <DailyStreakCheck day="Ter" isActive={false} />
            <DailyStreakCheck day="Qua" isActive={false} />
            <DailyStreakCheck day="Qui" isActive={false} />
            <DailyStreakCheck day="Sex" isActive={false} />
            <DailyStreakCheck day="Sáb" isActive={false} />
          </div>

          <div className="flex flex-col items-center ">
            <p className="font-medium">
              <span className="font-bold">10</span> dias seguidos!
            </p>
            <p className="font-medium">
              Bom streak! Continue assim para liberar novas conquistas
            </p>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default StreakPage;

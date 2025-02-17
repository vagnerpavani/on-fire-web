import PageWrapper from "../../components/base/PageWrapper";
import HistorySection from "./components/sections/HistorySection";
import StreakSection from "./components/sections/StreakSection";

function StreakPage() {
  return (
    <PageWrapper>
      <div className="flex justify-around box-border pt-8">
        <StreakSection />
        <HistorySection />
      </div>
    </PageWrapper>
  );
}

export default StreakPage;

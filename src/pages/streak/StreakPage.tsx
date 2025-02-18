import PageWrapper from "../../components/base/PageWrapper";
import HistorySection from "./components/section/HistorySection";
import StreakSection from "./components/section/StreakSection";

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

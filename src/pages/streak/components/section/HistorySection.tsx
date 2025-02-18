import NewslettersDisplay from "../structure/NewslettersDisplay";

function HistorySection() {
  return (
    <div className="flex flex-col items-center h-fit bg-brand-white">
      <div className="w-96">
        <h1 className="font-bold text-brand-yellow text-2xl">Seu histórico</h1>
      </div>

      <NewslettersDisplay />
    </div>
  );
}

export default HistorySection;

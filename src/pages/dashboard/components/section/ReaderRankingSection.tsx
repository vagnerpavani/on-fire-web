import Reader from "../base/Reader";

function ReaderRankingSection() {
  return (
    <div className="p-2 bg-brand-white  rounded-md border-solid border-2 md:w-fit border-gray-100 flex flex-col items-stretch">
      <h2 className="text-2xl font-bold text-brand-yellow">
        Leitores mais engajados:
      </h2>
      <div className="h-48 overflow-auto">
        <Reader isKing={true} email={"fulano@email.com"} position={1} />
        <Reader isKing={false} email={"fulano2@email.com"} position={2} />
        <Reader isKing={false} email={"fulano3@email.com"} position={3} />
        <Reader isKing={false} email={"fulano4@email.com"} position={4} />
        <Reader isKing={false} email={"fulano5@email.com"} position={5} />
      </div>
    </div>
  );
}

export default ReaderRankingSection;

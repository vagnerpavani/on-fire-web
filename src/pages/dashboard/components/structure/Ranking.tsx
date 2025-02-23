import Reader from "../base/Reader";

type Props = {
  title: string;
  readers: { email: string; position: number; streak: number }[];
};

function Ranking({ title, readers }: Props) {
  return (
    <div className="p-2  bg-brand-white  rounded-md border-solid border-2 w-full border-gray-100 flex flex-col items-stretch">
      <h2 className="text-2xl font-bold text-center text-brand-yellow">
        {title}
      </h2>
      <div className="h-48 overflow-auto w-full">
        {readers.map((reader, i) => {
          return (
            <Reader
              isKing={reader.position === 1}
              email={reader.email}
              position={reader.position}
              streak={reader.streak}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Ranking;

import CrownIcon from "../../../../components/icons/CrownIcon";

type Props = {
  isKing: boolean;
  position: number;
  email: string;
};

function Reader({ email, isKing, position }: Props) {
  return (
    <div className="flex justify-between items-center border-brand-yellow border-2 rounded-md border-solid my-2">
      <div className="flex mr-1 items-center">
        <span className="ml-2 mr-1 text-brand-yellow w-4 h-6 flex justify-center items-center">
          {isKing ? <CrownIcon color="#ffce04" /> : position}
        </span>
        <p className="text-sm">- {email}</p>
      </div>

      <p className="text-sm mr-2">
        Streak atual: <span className="font-medium">2</span>
      </p>
    </div>
  );
}

export default Reader;

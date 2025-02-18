import CrownIcon from "../../../../components/icons/CrownIcon";

type Props = {
  isKing: boolean;
  position: number;
  email: string;
};

function Reader({ email, isKing, position }: Props) {
  return (
    <div className="flex w-96 border-brand-yellow border-2 rounded-md border-solid font-medium my-2">
      <span className="mx-2 text-brand-yellow w-4 flex justify-center items-center">
        {isKing ? <CrownIcon color="#ffce04" /> : position}
      </span>
      <p>- {email}</p>
    </div>
  );
}

export default Reader;

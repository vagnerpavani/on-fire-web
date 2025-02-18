type Props = {
  unselectedText: string;
  options: string[];
};
function Select({ unselectedText, options }: Props) {
  return (
    <select className="text-brand-black border-solid border-brand-yellow border-2 rounded-md mx-1">
      <option className="text-gray-400" value="">
        {unselectedText}
      </option>
      {options.map((op, i) => {
        return (
          <option key={i} value={op} className="text-brand-black">
            {op}
          </option>
        );
      })}
    </select>
  );
}

export default Select;

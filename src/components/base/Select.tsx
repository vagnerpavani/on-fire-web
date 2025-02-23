type Props = {
  unselectedText: string;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
function Select({ unselectedText, options, value, setValue }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className="text-brand-black border-solid border-brand-yellow border-2 rounded-md mx-1 mt-1 md:my-0"
    >
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

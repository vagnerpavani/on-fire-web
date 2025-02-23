import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: DataItem[];
  colors: { [lineName: string]: string };
};
function DashboardLineChart({ data, colors }: Props) {
  const Lines = () => {
    if (!data[0]) return "";
    const lines = Object.keys(data[0]);
    return lines.map((line, i) => {
      return line === "name" ? (
        ""
      ) : (
        <Line
          type="monotone"
          dataKey={line}
          stroke={colors[line]}
          key={i}
          activeDot={{ r: 8 }}
        />
      );
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Lines()}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default DashboardLineChart;

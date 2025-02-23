import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: DataItem[];
  color: string;
};

function DashboardBarChart({ data, color }: Props) {
  const Bars = () => {
    if (!data[0]) return "";
    const bars = Object.keys(data[0]);
    return bars.map((bar, i) => {
      return bar === "name" ? (
        ""
      ) : (
        <Bar
          dataKey={bar}
          fill={color}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          key={i}
        />
      );
    });
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        {Bars()}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DashboardBarChart;

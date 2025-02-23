import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: DataItem[];
  colors: { [areaName: string]: string };
};

function DashboardAreaChart({ data, colors }: Props) {
  if (!data[0]) return "";
  const Areas = () => {
    const areas = Object.keys(data[0]);
    return areas.map((area, i) => {
      return area === "name" ? (
        ""
      ) : (
        <Area
          type="monotone"
          dataKey={area}
          stackId={i}
          stroke={colors[area]}
          fill={colors[area]}
          key={i}
        />
      );
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {data ? Areas() : ""}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default DashboardAreaChart;

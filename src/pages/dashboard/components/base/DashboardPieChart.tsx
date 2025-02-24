import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  data: { name: string; value: number }[];
  color: string;
};

function DashboardPieChart({ data, color }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill={color}
          label
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DashboardPieChart;

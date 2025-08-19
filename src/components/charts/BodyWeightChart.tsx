'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { chartData } from '@/lib/data/chartData';

interface IBodyWeightChartProps {
  height?: number;
  showLegend?: boolean;
  className?: string;
}

export default function IBodyWeightChart({ 
  height, 
  showLegend = true, 
  className = "" 
}: IBodyWeightChartProps) {
  const containerStyle = height ? { height: `${height}px` } : { height: '100%' };
  
  return (
    <div className={`relative ${className}`} style={containerStyle}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.2)"
          />
          <XAxis dataKey="month" stroke="white" fontSize={12} />
          <YAxis
            yAxisId="weight"
            domain={[55, 70]}
            stroke="white"
            fontSize={12}
            orientation="left"
          />
          <YAxis
            yAxisId="bodyFat"
            domain={[15, 25]}
            stroke="white"
            fontSize={12}
            orientation="right"
          />
          {showLegend && <Legend wrapperStyle={{ color: "white" }} />}
          <Line
            yAxisId="weight"
            type="monotone"
            dataKey="weight"
            stroke="#FFCC21"
            strokeWidth={3}
            dot={{ fill: "#FFCC21", strokeWidth: 2, r: 4 }}
            name="体重 (kg)"
          />
          <Line
            yAxisId="bodyFat"
            type="monotone"
            dataKey="bodyFat"
            stroke="#8FE9D4"
            strokeWidth={3}
            dot={{ fill: "#8FE9D4", strokeWidth: 2, r: 4 }}
            name="体脂肪率 (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

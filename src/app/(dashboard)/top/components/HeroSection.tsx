"use client";

import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Dummy data for Body weight and Body fat percentage chart
const chartData = [
  { month: "6月", weight: 65.2, bodyFat: 22.5 },
  { month: "7月", weight: 64.8, bodyFat: 21.8 },
  { month: "8月", weight: 64.1, bodyFat: 21.2 },
  { month: "9月", weight: 63.5, bodyFat: 20.8 },
  { month: "10月", weight: 63.0, bodyFat: 20.3 },
  { month: "11月", weight: 62.4, bodyFat: 19.9 },
  { month: "12月", weight: 61.8, bodyFat: 19.5 },
  { month: "1月", weight: 61.2, bodyFat: 19.1 },
  { month: "2月", weight: 60.7, bodyFat: 18.8 },
  { month: "3月", weight: 60.1, bodyFat: 18.4 },
  { month: "4月", weight: 59.6, bodyFat: 18.0 },
  { month: "5月", weight: 59.0, bodyFat: 17.6 },
];

interface HeroSectionProps {
  percentAchievement?: number;
}

export default function HeroSection({ percentAchievement = 75 }: HeroSectionProps) {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-screen ml-[calc(-50vw+50%)]">
        <div className="h-[400px] w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          <div className="relative h-full flex items-center">
            <div className="w-full h-full flex">
              {/* Achievement Section - 40% width */}
              <div className="w-[40%] flex flex-col items-center justify-center relative">
                <Image
                  src="/images/top/achievement.png"
                  width={1200}
                  height={400}
                  alt="achievement"
                  className="w-full h-[400] object-cover absolute top-0 left-0"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative w-32 h-32 mb-4">
                  <div className="size-[181px]">
                    <CircularProgressbar
                      value={percentAchievement}
                      text={`${moment().format("MM/DD")} ${percentAchievement}%`}
                      strokeWidth={4}
                      styles={buildStyles({
                        textColor: "white",
                        pathColor: "white",
                        trailColor: "transparent",
                        textSize: "12px",
                      })}
                    />
                  </div>
                </div>
              </div>

              {/* Chart Area - 60% width */}
              <div className="w-[60%] flex items-center justify-center pr-8">
                <div className="w-full h-64">
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
                      <Legend wrapperStyle={{ color: "white" }} />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

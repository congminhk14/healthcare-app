"use client";

import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import moment from "moment";
import LazyBodyWeightChart from "@/components/charts/LazyBodyWeightChart";

interface IHeroSectionProps {
  percentAchievement?: number;
}

export default function HeroSection({ percentAchievement = 75 }: IHeroSectionProps) {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-screen ml-[calc(-50vw+50%)]">
        <div className="h-[400px] md:h-[400px] w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          <div className="relative h-full flex items-center">
            <div className="w-full h-full flex flex-col md:flex-row">
              <div className="w-full md:w-[40%] h-1/2 md:h-full flex flex-col items-center justify-center relative">
                <Image
                  src="/images/top/achievement.png"
                  width={1200}
                  height={400}
                  alt="achievement"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                  <div className="size-[120px] md:size-[181px]">
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

              <div className="w-full md:w-[60%] h-1/2 md:h-full flex items-center justify-center p-4 md:pr-8 bg-gray-900/50 md:bg-transparent">
                <div className="w-full h-full">
                  <LazyBodyWeightChart showLegend={true} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

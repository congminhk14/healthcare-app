"use client";

import Image from "next/image";

export interface MealData {
  id: number;
  date: string;
  type: string;
  image: string;
}

interface MealRecordsProps {
  meals: MealData[];
  showMoreButton?: boolean;
  onShowMore?: () => void;
}

export default function MealRecords({ meals, showMoreButton = false, onShowMore }: MealRecordsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Meal Records Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {meals.map((meal) => (
          <div key={meal.id} className="relative group cursor-pointer">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              {meal.image ? (
                <Image
                  src={meal.image}
                  alt={`${meal.type} meal on ${meal.date}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <span className="text-orange-600 text-sm">画像</span>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-white px-3 py-1 text-xs font-medium">
              {meal.date} {meal.type}
            </div>
          </div>
        ))}
      </div>

      {/* More Records Button - Only show if there are more records */}
      {showMoreButton && (
        <div className="text-center">
          <div className="inline-block rounded-lg p-6">
            <button 
              onClick={onShowMore}
              className="bg-[#FFCC21] hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
            >
              記録をもっと見る
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

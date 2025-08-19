"use client";

import Image from "next/image";

interface IFilterButtonsProps {
  selectedFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

const filterTypes = ["Morning", "Lunch", "Dinner", "Snack"];

export default function FilterButtons({
  selectedFilter,
  onFilterChange,
}: IFilterButtonsProps) {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filterTypes.map((type) => (
            <div
              key={type}
              className={`relative flex items-center justify-center   overflow-hidden transition-all duration-200 cursor-pointer`}
            >
              <Image
                src={`/icons/icon-filter-meal.svg`}
                alt={type}
                width={136}
                height={136}
                onClick={() =>
                  onFilterChange(selectedFilter === type ? null : type)
                }
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center" onClick={() =>
                  onFilterChange(selectedFilter === type ? null : type)
                }>
                <Image src={type === 'Snack' ? "/icons/icon-snack.svg" : "/icons/icon-knife.svg"} alt={type} width={56} height={56} className="size-[56px]" />
                <span className="text-xl font-bold text-white">{type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

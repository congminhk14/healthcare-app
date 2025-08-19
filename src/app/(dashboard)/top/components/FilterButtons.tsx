"use client";

import Image from "next/image";

interface FilterButtonsProps {
  selectedFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

const filterTypes = ["Morning", "Lunch", "Dinner", "Snack"];

export default function FilterButtons({
  selectedFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() =>
                onFilterChange(selectedFilter === type ? null : type)
              }
              className={`relative w-full min-h-[156px] rounded-lg overflow-hidden transition-all duration-200 cursor-pointer`}
            >
              <Image
                src={`/icons/icon-filter-meal.svg`}
                alt={type}
                width={136}
                height={136}
                className="absolute top-0 left-0"
              />
              <span className="text-sm font-medium">{type}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

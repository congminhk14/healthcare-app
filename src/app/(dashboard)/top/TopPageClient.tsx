"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import FilterButtons from "./components/FilterButtons";
import MealRecords, { type IMealData } from "./components/MealRecords";

// dummy data
const mealData: IMealData[] = [
  {
    id: 1,
    date: "05.21",
    type: "Morning",
    image: "/images/top/morning-1.jpg",
  },
  {
    id: 2,
    date: "05.20",
    type: "Morning",
    image: "/images/top/morning-2.jpg",
  },
  {
    id: 3,
    date: "05.19",
    type: "Morning",
    image: "/images/top/morning-3.jpg",
  },
  {
    id: 4,
    date: "05.21",
    type: "Lunch",
    image: "/images/top/lunch-1.jpg",
  },
  {
    id: 5,
    date: "05.20",
    type: "Lunch",
    image: "/images/top/lunch-2.jpg",
  },
  {
    id: 6,
    date: "05.19",
    type: "Lunch",
    image: "/images/top/lunch-3.jpg",
  },
  {
    id: 7,
    date: "05.21",
    type: "Dinner",
    image: "/images/top/dinner-1.jpg",
  },
  {
    id: 8,
    date: "05.20",
    type: "Dinner",
    image: "/images/top/dinner-2.jpg",
  },
  {
    id: 9,
    date: "05.21",
    type: "Snack",
    image: "/images/top/snack-1.jpg",
  },
  {
    id: 10,
    date: "05.18",
    type: "Morning",
    image: "",
  },
  {
    id: 11,
    date: "05.18",
    type: "Lunch",
    image: "",
  },
  {
    id: 12,
    date: "05.18",
    type: "Dinner",
    image: "",
  },
  {
    id: 13,
    date: "05.17",
    type: "Morning",
    image: "",
  },
  {
    id: 14,
    date: "05.17",
    type: "Lunch",
    image: "",
  },
  {
    id: 15,
    date: "05.17",
    type: "Snack",
    image: "",
  },
  {
    id: 16,
    date: "05.16",
    type: "Morning",
    image: "",
  },
];

export default function TopPageClient() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const percentAchievement = 75;

  const filteredMeals = selectedFilter
    ? mealData.filter((meal) => meal.type === selectedFilter)
    : mealData;

  const displayedMeals = showAll ? filteredMeals : filteredMeals.slice(0, 8);

  const showMoreButton = filteredMeals.length > 8;

  const handleFilterChange = (filter: string | null) => {
    setSelectedFilter(filter);
    setShowAll(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div>
      <HeroSection percentAchievement={percentAchievement} />
      
      <FilterButtons 
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      
      <MealRecords 
        meals={displayedMeals} 
        showMoreButton={showMoreButton && !showAll}
        onShowMore={handleShowMore}
      />
    </div>
  );
}

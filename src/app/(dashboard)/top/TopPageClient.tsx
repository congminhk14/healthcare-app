"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import FilterButtons from "./components/FilterButtons";
import MealRecords, { type MealData } from "./components/MealRecords";

// Sample data for the meal records
const mealData: MealData[] = [
  // Morning meals
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
  // Lunch meals
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
  // Dinner meals
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
  // Snack meals
  {
    id: 9,
    date: "05.21",
    type: "Snack",
    image: "/images/top/snack-1.jpg",
  },
  // Additional meals without images
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

  // Filter meals based on selected filter
  const filteredMeals = selectedFilter
    ? mealData.filter((meal) => meal.type === selectedFilter)
    : mealData;

  // Show only first 8 meals initially, or all if showAll is true
  const displayedMeals = showAll ? filteredMeals : filteredMeals.slice(0, 8);

  // Show "More Records" button only if there are more than 8 filtered meals
  const showMoreButton = filteredMeals.length > 8;

  const handleFilterChange = (filter: string | null) => {
    setSelectedFilter(filter);
    setShowAll(false); // Reset pagination when filter changes
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div>
      {/* Hero Section with Achievement and Chart */}
      <HeroSection percentAchievement={percentAchievement} />
      
      {/* Filter Buttons Section */}
      <FilterButtons 
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      
      {/* Meal Records Section */}
      <MealRecords 
        meals={displayedMeals} 
        showMoreButton={showMoreButton && !showAll}
        onShowMore={handleShowMore}
      />
    </div>
  );
}

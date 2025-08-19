'use client';

import { useRef, useState, useMemo } from 'react';
import HeroCards from './components/HeroCards';
import BodyRecordGraph from './components/BodyRecordGraph';
import ExerciseSection from './components/ExerciseSection';
import DiarySection from './components/DiarySection';
import { diaryEntries } from '@/lib/data/diary';

export default function MyRecordPageClient() {
  const bodyRecordRef = useRef<HTMLDivElement>(null);
  const exerciseRef = useRef<HTMLDivElement>(null);
  const diaryRef = useRef<HTMLDivElement>(null);
  const [showAllDiaries, setShowAllDiaries] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleBodyRecordClick = () => {
    scrollToSection(bodyRecordRef);
  };

  const handleExerciseClick = () => {
    scrollToSection(exerciseRef);
  };

  const handleDiaryClick = () => {
    scrollToSection(diaryRef);
  };

  const displayedDiaries = useMemo(() => {
    if (showAllDiaries) {
      return diaryEntries;
    }
    return diaryEntries.slice(0, 8);
  }, [showAllDiaries]);

  const shouldShowMoreButton = diaryEntries.length > 8 && !showAllDiaries;

  const handleShowMoreDiaries = () => {
    setShowAllDiaries(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroCards
          onBodyRecordClick={handleBodyRecordClick}
          onExerciseClick={handleExerciseClick}
          onDiaryClick={handleDiaryClick}
        />

        <BodyRecordGraph ref={bodyRecordRef} />

        <ExerciseSection ref={exerciseRef} />

        <DiarySection 
          ref={diaryRef}
          diaryEntries={displayedDiaries}
          showMoreButton={shouldShowMoreButton}
          onShowMore={handleShowMoreDiaries}
        />
      </div>
    </div>
  );
}

'use client';

import { forwardRef } from 'react';
import { IDiaryEntry } from '@/lib/data/diary';

interface IDiarySectionProps {
  diaryEntries: IDiaryEntry[];
  showMoreButton?: boolean;
  onShowMore?: () => void;
}

const DiarySection = forwardRef<HTMLDivElement, IDiarySectionProps>(
  ({ diaryEntries, showMoreButton = false, onShowMore }, ref) => {
    return (
      <div ref={ref} className="mb-8">
        <h2 className="text-[#414141] text-2xl font-bold mb-6">MY DIARY</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {diaryEntries.map((entry) => (
            <div key={entry.id} className="bg-white border border-gray-200 p-4">
              <div className="text-sm text-gray-600 mb-2">
                {entry.date}<br />
                {entry.time}
              </div>
              <div className="text-xs text-gray-800 leading-relaxed">
                {entry.content}
              </div>
            </div>
          ))}
        </div>

        {showMoreButton && onShowMore && (
          <div className="text-center">
            <button 
              onClick={onShowMore}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-3 font-medium hover:from-yellow-500 hover:to-orange-500 transition-all duration-200"
            >
              自分の日記をもっと見る
            </button>
          </div>
        )}
      </div>
    );
  }
);

DiarySection.displayName = 'DiarySection';

export default DiarySection;

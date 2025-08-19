'use client';

import { forwardRef } from 'react';

const ExerciseSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="bg-[#414141]   p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-white">
          <span className="text-orange-400 text-sm">MY</span>
          <br />
          <span className="text-orange-400 text-sm">EXERCISE</span>
        </div>
        <div className="text-white text-lg">2021.05.21</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">家事全般（立位・軽い）</span>
            <span className="text-orange-400 text-sm">10 min</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-600">
            <span className="text-white text-sm">26kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
});

ExerciseSection.displayName = 'ExerciseSection';

export default ExerciseSection;

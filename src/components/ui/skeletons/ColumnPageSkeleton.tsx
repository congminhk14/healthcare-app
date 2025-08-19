'use client';

import { Skeleton } from './Skeleton';

export default function ColumnPageSkeleton() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-6 bg-[#2E2E2E] text-center">
              <Skeleton className="h-6 w-32 mb-2 mx-auto bg-gray-600" />
              <Skeleton className="h-6 w-16 mb-4 mx-auto bg-gray-600" />
              <div className="w-[56px] h-[0.5px] bg-gray-600 mb-[10px] mx-auto"></div>
              <Skeleton className="h-4 w-24 mx-auto bg-gray-600" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white shadow-sm overflow-hidden">
            <Skeleton className="w-full h-48" />
            <div className="p-4">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-3 w-3/4 mb-3" />
              <div className="flex flex-wrap gap-1">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-12" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Skeleton className="h-12 w-48" />
      </div>
    </main>
  );
}

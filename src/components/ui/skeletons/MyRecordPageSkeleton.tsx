'use client';

import { Skeleton, SkeletonHeroCard, SkeletonChart, SkeletonCard } from './Skeleton';

export default function MyRecordPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {[...Array(3)].map((_, i) => (
            <SkeletonHeroCard key={i} />
          ))}
        </div>

        <SkeletonChart className="mb-8" />

        <SkeletonChart className="mb-8" />

        <div className="mb-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} className="h-48" />
            ))}
          </div>
          <div className="text-center">
            <Skeleton className="h-12 w-48 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

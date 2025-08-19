'use client';

import { Skeleton } from './Skeleton';

export default function TopPageSkeleton() {
  return (
    <div>
      <div className="overflow-x-hidden mb-8">
        <div className="relative w-screen ml-[calc(-50vw+50%)]">
          <div className="h-[400px] w-full relative overflow-hidden bg-gray-300">
            <div className="relative h-full flex items-center">
              <div className="w-full h-full flex flex-col md:flex-row">
                <div className="w-full md:w-[40%] h-1/2 md:h-full flex flex-col items-center justify-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                    <Skeleton className="w-full h-full rounded-full bg-gray-400" />
                  </div>
                </div>
                
                <div className="w-full md:w-[60%] h-1/2 md:h-full flex items-center justify-center p-4">
                  <Skeleton className="w-full h-full bg-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-32" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-4 w-16 mb-2" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>
    </div>
  );
}

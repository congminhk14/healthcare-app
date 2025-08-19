'use client';

import { cn } from "@/lib/utils";


interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-300/70',
        className
      )}
    />
  );
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn('bg-white border border-gray-200 p-4 rounded-lg', className)}>
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-3 w-1/2 mb-3" />
      <Skeleton className="h-20 w-full" />
    </div>
  );
}

export function SkeletonChart({ className }: SkeletonProps) {
  return (
    <div className={cn('bg-[#414141] p-6 rounded-lg', className)}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Skeleton className="h-4 w-16 mb-1 bg-gray-500" />
          <Skeleton className="h-4 w-20 bg-gray-500" />
        </div>
        <Skeleton className="h-6 w-24 bg-gray-500" />
      </div>
      <Skeleton className="h-64 w-full bg-gray-500" />
    </div>
  );
}

export function SkeletonHeroCard({ className }: SkeletonProps) {
  return (
    <div className={cn('bg-gray-300 h-64 rounded-lg', className)}>
      <div className="h-full flex flex-col justify-center items-center p-6">
        <Skeleton className="h-8 w-32 mb-2 bg-gray-400" />
        <Skeleton className="h-6 w-24 bg-gray-400" />
      </div>
    </div>
  );
}

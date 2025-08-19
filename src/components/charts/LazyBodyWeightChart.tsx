'use client';

import { Suspense, lazy } from 'react';
import { Skeleton } from '@/components/ui/skeletons/Skeleton';

const BodyWeightChart = lazy(() => import('./BodyWeightChart'));

interface LazyBodyWeightChartProps {
  height?: number;
  showLegend?: boolean;
  className?: string;
}

function ChartSkeleton({ height, className }: { height?: number; className?: string }) {
  const containerStyle = height ? { height: `${height}px` } : { height: '100%' };
  
  return (
    <div className={`relative ${className}`} style={containerStyle}>
      <Skeleton className="w-full h-full bg-gray-500" />
    </div>
  );
}

export default function LazyBodyWeightChart(props: LazyBodyWeightChartProps) {
  return (
    <Suspense fallback={<ChartSkeleton height={props.height} className={props.className} />}>
      <BodyWeightChart {...props} />
    </Suspense>
  );
}

import { Suspense, lazy } from 'react';
import ColumnPageSkeleton from '@/components/ui/skeletons/ColumnPageSkeleton';

const ColumnPageClient = lazy(() => import('./ColumnPageClient'));

export default function ColumnPage() {
  return (
    <Suspense fallback={<ColumnPageSkeleton />}>
      <ColumnPageClient />
    </Suspense>
  );
}

import { Suspense, lazy } from 'react';
import AuthGuard from '@/components/ui/AuthGuard';
import TopPageSkeleton from '@/components/ui/skeletons/TopPageSkeleton';

const TopPageClient = lazy(() => import('./TopPageClient'));

export default function TopPage() {
  return (
    <AuthGuard requireAuth={true}>
      <Suspense fallback={<TopPageSkeleton />}>
        <TopPageClient />
      </Suspense>
    </AuthGuard>
  );
}

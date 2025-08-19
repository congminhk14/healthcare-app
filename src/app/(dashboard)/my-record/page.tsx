import { Suspense, lazy } from 'react';
import MyRecordPageSkeleton from '@/components/ui/skeletons/MyRecordPageSkeleton';
import MyRecordPageClient from './MyRecordPageClient';


export default function MyRecordPage() {
  return (
    <Suspense fallback={<MyRecordPageSkeleton />}>
      <MyRecordPageClient />
    </Suspense>
  );
}

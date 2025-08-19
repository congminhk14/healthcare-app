import AuthGuard from '@/components/ui/AuthGuard';
import TopPageClient from './TopPageClient';

export default function TopPage() {
  return (
    <AuthGuard requireAuth={true}>
      <TopPageClient />
    </AuthGuard>
  );
}

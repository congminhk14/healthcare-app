'use client';

import { usePathname } from 'next/navigation';
import AuthGuard from '@/components/ui/AuthGuard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const requireAuth = pathname !== '/column';
  
  const isTopPage = pathname === '/top';

  return (
    <AuthGuard requireAuth={requireAuth}>
      <div className="bg-gray-100">
        <div className={`mx-auto ${
          isTopPage ? 'pt-0 pb-6' : 'py-6 sm:px-6 lg:px-8 max-w-7xl'
        }`}>
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}

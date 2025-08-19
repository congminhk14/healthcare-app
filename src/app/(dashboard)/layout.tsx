'use client';

import { usePathname } from 'next/navigation';
import AuthGuard from '@/components/ui/AuthGuard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Column page is public, other pages require authentication
  const requireAuth = pathname !== '/column';
  
  // Top page should be directly connected to header (no top padding)
  const isTopPage = pathname === '/top';

  return (
    <AuthGuard requireAuth={requireAuth}>
      <div className="bg-gray-100">
        <div className={`max-w-7xl mx-auto ${
          isTopPage ? 'pt-0 pb-6' : 'py-6 sm:px-6 lg:px-8'
        }`}>
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}

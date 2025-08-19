import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { getSession } from '@/lib/session';
import { demoUsers } from '@/lib/users';

interface IAppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: IAppLayoutProps) {
  const session = await getSession();
  const user = session.isLoggedIn 
    ? demoUsers.find(u => u.id === session.userId)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header user={user ? { name: user.name, username: user.username } : null} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

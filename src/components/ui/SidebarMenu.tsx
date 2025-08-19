'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ISidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    name: string;
    username: string;
  } | null;
}

interface IMenuItem {
  id: string;
  label: string;
  requireAuth?: boolean;
  href?: string;
}

const menuItems: IMenuItem[] = [
  {
    id: 'records',
    label: '自分の記録',
    requireAuth: true,
    href: '/top'
  },
  {
    id: 'weight-graph',
    label: '体重グラフ',
    requireAuth: true
  },
  {
    id: 'goals',
    label: '目標',
    requireAuth: true
  },
  {
    id: 'selected-course',
    label: '選択中のコース',
    requireAuth: true
  },
  {
    id: 'column-list',
    label: 'コラム一覧',
    requireAuth: false
  },
  {
    id: 'settings',
    label: '設定',
    requireAuth: true
  }
];

export default function SidebarMenu({ isOpen, onClose, user }: ISidebarMenuProps) {
  const router = useRouter();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar-menu');
      const target = event.target as Node;
      
      if (isOpen && sidebar && !sidebar.contains(target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleMenuItemClick = (item: IMenuItem) => {
    if (item.requireAuth && !user) {
      // Save intended destination and redirect to login
      const destination = item.href || (item.id === 'column-list' ? '/column' : '/dashboard');
      localStorage.setItem('redirectAfterLogin', destination);
      router.push('/login');
      onClose();
      return;
    }
    
    // Handle menu item navigation
    if (item.href) {
      router.push(item.href);
    } else if (item.id === 'column-list') {
      router.push('/column');
    } else {
      console.log(`Navigating to: ${item.id}`);
    }
    
    onClose();
  };



  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        id="sidebar-menu"
        className={`fixed top-0 right-0 h-full w-80 bg-gray-600 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="pt-16 px-6">
          {/* Menu Items */}
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
                className="w-full text-left px-4 py-4 text-white hover:bg-gray-500 transition-colors rounded-md cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
    href: '/my-record'
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
    requireAuth: false,
    href: '/column'
  },
  {
    id: 'settings',
    label: '設定',
    requireAuth: true
  }
];

export default function SidebarMenu({ isOpen, onClose, user }: ISidebarMenuProps) {
  const router = useRouter();

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
      const destination = item.href || '/dashboard';
      localStorage.setItem('redirectAfterLogin', destination);
      router.push('/login');
      onClose();
      return;
    }
    
    if (item.href) {
      router.push(item.href);
    } else {
      console.log(`Navigating to: ${item.id}`);
    }
    
    onClose();
  };



  return (
    <>
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      <div
        id="sidebar-menu"
        className={`fixed top-0 right-0 h-full w-80 bg-gray-600 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
          >
            <XMarkIcon className="size-6 text-orange-400" />
          </button>
        </div>

        <div className="pt-16 px-6">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
                className="w-full text-left px-4 py-4 text-white hover:bg-gray-500 transition-colors   cursor-pointer"
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SidebarMenu from "@/components/ui/SidebarMenu";

interface IHeaderProps {
  user?: {
    name: string;
    username: string;
  } | null;
}

export default function Header({ user }: IHeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-[#414141] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/top" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Healthy"
                width={140}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-8">
                  <Link
                    href="/my-record"
                    className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                      pathname === "/my-record"
                        ? "text-orange-400"
                        : "text-white hover:text-orange-400"
                    }`}
                  >
                    <Image
                      src="/icons/icon-menu-1.svg"
                      alt="自分の記録"
                      width={20}
                      height={20}
                      className="text-white"
                    />
                    <span>自分の記録</span>
                  </Link>
                  <button
                    onClick={() => {}}
                    className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                      pathname === "/challenge"
                        ? "text-orange-400"
                        : "text-white hover:text-orange-400"
                    }`}
                  >
                    <Image
                      src="/icons/icon-menu-2.svg"
                      alt="チャレンジ"
                      width={20}
                      height={20}
                      className="text-white"
                    />
                    <span>チャレンジ</span>
                  </button>
                  <button
                    onClick={() => {}}
                    className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                      pathname === "/notifications"
                        ? "text-orange-400"
                        : "text-white hover:text-orange-400"
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src="/icons/icon-menu-3.svg"
                        alt="お知らせ"
                        width={20}
                        height={20}
                        className="text-white"
                      />
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        1
                      </span>
                    </div>
                    <span>お知らせ</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="text-white hover:text-orange-400 transition-colors cursor-pointer"
                >
                  <Image
                    src="/icons/icon-hamburger.svg"
                    alt="メニュー"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Image
                  src="/icons/icon-hamburger.svg"
                  alt="メニュー"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        user={user}
      />
    </>
  );
}

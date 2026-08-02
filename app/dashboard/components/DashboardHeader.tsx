"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  Clock3,
  Brain,
  LineChart,
  Newspaper,
  Settings,
  User,
} from "lucide-react";

const menuItems = [
  {
    title: "داشبورد",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "سفارش‌ها",
    icon: ShoppingBag,
    href: "/dashboard/orders",
  },
  {
    title: "علاقه‌مندی‌ها",
    icon: Heart,
    href: "/dashboard/favorites",
  },
  {
    title: "محصولات اخیر",
    icon: Clock3,
    href: "/dashboard/recent-products",
  },
  {
    title: "هوش مصنوعی المپیا",
    icon: Brain,
    href: "/ai",
  },
  {
    title: "بازارهای مالی",
    icon: LineChart,
    href: "/market",
  },
  {
    title: "اخبار",
    icon: Newspaper,
    href: "/news",
  },
  {
    title: "پروفایل",
    icon: User,
    href: "/dashboard/profile",
  },
  {
    title: "تنظیمات",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="bg-[#101010] border border-zinc-800 rounded-2xl p-5">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-yellow-400">
          پنل کاربری
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          مدیریت حساب و خدمات المپیا
        </p>
      </div>

      <nav className="space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                text-gray-300
                hover:text-yellow-400
                hover:bg-yellow-400/10
                transition-all
                duration-300
                border
                border-transparent
                hover:border-yellow-500/20
              "
            >
              <Icon
                size={20}
                className="text-yellow-400"
              />

              <span className="text-sm font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </nav>

      <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/10 border border-yellow-500/20">

        <h3 className="text-yellow-400 font-bold mb-2">
          Olympia AI
        </h3>

        <p className="text-xs text-gray-400 leading-6">
          پیشنهاد هوشمند مکمل، برنامه مصرف، تحلیل محصولات و پاسخ به سوالات ورزشی
        </p>

        <Link
          href="/ai"
          className="block mt-4 text-center py-2 rounded-lg bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition"
        >
          ورود به دستیار
        </Link>

      </div>

    </aside>
  );
}
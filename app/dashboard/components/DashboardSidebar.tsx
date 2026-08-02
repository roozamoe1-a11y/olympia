"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  Brain,
  Newspaper,
  BarChart3,
  CalendarDays,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "داشبورد",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "سفارش‌ها",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    title: "علاقه‌مندی‌ها",
    href: "/dashboard/favorites",
    icon: Heart,
  },
  {
    title: "هوش مصنوعی",
    href: "/ai",
    icon: Brain,
  },
  {
    title: "بازارهای مالی",
    href: "/market",
    icon: BarChart3,
  },
  {
    title: "اخبار",
    href: "/news",
    icon: Newspaper,
  },
  {
    title: "تقویم اقتصادی",
    href: "/dashboard/calendar",
    icon: CalendarDays,
  },
  {
    title: "تنظیمات",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 rounded-2xl border border-zinc-800 bg-[#101010] p-5">

      <h2 className="text-xl font-bold text-yellow-400 mb-6">
        پنل مدیریت
      </h2>

      <nav className="space-y-3">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              prefetch={false}
              className={`
                flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 border
                ${
                  active
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "text-gray-300 border-transparent hover:bg-yellow-500/10 hover:text-yellow-400 hover:border-yellow-500/30"
                }
              `}
            >
              <Icon size={20} />
              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );

        })}

      </nav>

    </aside>
  );
}
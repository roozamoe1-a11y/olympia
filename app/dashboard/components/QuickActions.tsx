"use client";

import Link from "next/link";

import {
  ShoppingCart,
  Brain,
  LineChart,
  Newspaper,
  CalendarDays,
  User,
  Package,
} from "lucide-react";

const actions = [
  {
    title: "سبد خرید",
    description: "مشاهده و مدیریت کالاها",
    href: "/cart",
    icon: ShoppingCart,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "هوش مصنوعی المپیا",
    description: "پیشنهاد مکمل و برنامه مصرف",
    href: "/ai",
    icon: Brain,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "بازارهای مالی",
    description: "دلار، طلا، ارز دیجیتال و نفت",
    href: "/market",
    icon: LineChart,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "اخبار ورزشی",
    description: "آخرین اخبار ورزش ایران و جهان",
    href: "https://www.varzesh3.com",
    icon: Newspaper,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "تقویم اقتصادی",
    description: "رویدادهای مهم بازار",
    href: "/dashboard/calendar",
    icon: CalendarDays,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "پروفایل",
    description: "اطلاعات حساب کاربری",
    href: "/dashboard/profile",
    icon: User,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "سفارش‌ها",
    description: "پیگیری سفارشات",
    href: "/dashboard/orders",
    icon: Package,
    color: "from-yellow-400 to-amber-600",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-[#101010] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all duration-300">

      <h2 className="text-xl font-bold text-yellow-400 mb-6">
        دسترسی سریع
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              prefetch={false}
              className="
                bg-[#171717]
                border
                border-zinc-800
                rounded-2xl
                p-4
                hover:border-yellow-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div
                className={`
                  w-12
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  ${action.color}
                  flex
                  items-center
                  justify-center
                  mb-4
                `}
              >
                <Icon
                  size={24}
                  className="text-black"
                />
              </div>

              <h3 className="text-white text-sm font-bold mb-2">
                {action.title}
              </h3>

              <p className="text-gray-500 text-xs leading-5">
                {action.description}
              </p>

            </Link>
          );
        })}

      </div>

    </div>
  );
}
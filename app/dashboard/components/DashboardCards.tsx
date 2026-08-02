"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Heart,
  User,
  ShoppingCart,
  Brain,
  Newspaper,
  LineChart,
  CalendarDays,
} from "lucide-react";

type DashboardCardsProps = {
  cartCount: number;
  orderCount: number;
  favoriteCount: number;
  unreadNews: number;
};

export default function DashboardCards({
  cartCount,
  orderCount,
  favoriteCount,
  unreadNews,
}: DashboardCardsProps) {
  const cards = [
    {
      title: "سبد خرید",
      value: cartCount,
      icon: ShoppingCart,
      href: "/cart",
    },
    {
      title: "پروفایل",
      value: "",
      icon: User,
      href: "/dashboard/profile",
    },
    {
      title: "سفارش‌ها",
      value: orderCount,
      icon: ShoppingBag,
      href: "/dashboard/orders",
    },
    {
      title: "علاقه‌مندی‌ها",
      value: favoriteCount,
      icon: Heart,
      href: "/dashboard/favorites",
    },
    {
      title: "هوش مصنوعی",
      value: "",
      icon: Brain,
      href: "/ai",
    },
    {
      title: "اخبار",
      value: unreadNews,
      icon: Newspaper,
      href: "/news",
    },
    {
      title: "بازارهای مالی",
      value: "",
      icon: LineChart,
      href: "/market",
    },
    {
      title: "تقویم اقتصادی",
      description: "رویدادهای مهم اقتصادی",
      href: "https://www.eghtesadonline.com",
      icon: CalendarDays,
      color: "from-red-500 to-orange-500",
      external: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Link
            key={card.title}
            href={card.href}
            className="bg-[#101010] border border-zinc-800 rounded-2xl p-5 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
              <Icon
                className="text-yellow-400"
                size={26}
              />
            </div>

            <h3 className="text-gray-400 text-sm">
              {card.title}
            </h3>

            {card.value !== "" ? (
              <p className="text-white text-2xl font-bold mt-2">
                {card.value}
              </p>
            ) : (
              <p className="text-gray-500 text-sm mt-2">
                ورود
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
}
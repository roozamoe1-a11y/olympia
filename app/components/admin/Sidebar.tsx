"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  FolderTree,
  BadgeDollarSign,
  ShoppingCart,
  Users,
  TicketPercent,
  Image,
  Newspaper,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "داشبورد",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "محصولات",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "دسته‌بندی‌ها",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "برندها",
    href: "/admin/brands",
    icon: BadgeDollarSign,
  },
  {
    title: "سفارش‌ها",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "کاربران",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "کد تخفیف",
    href: "/admin/coupons",
    icon: TicketPercent,
  },
  {
    title: "بنرها",
    href: "/admin/banners",
    icon: Image,
  },
  {
    title: "وبلاگ",
    href: "/admin/blog",
    icon: Newspaper,
  },
  {
    title: "تنظیمات",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen sticky top-0 bg-[#111] border-l border-zinc-800 w-72">

      <div className="h-20 flex items-center justify-center border-b border-zinc-800">

        <h1 className="text-3xl font-extrabold text-yellow-400">
          OLYMPIA
        </h1>

      </div>

      <nav className="p-5 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (

            <Link
              key={item.href}
              href={item.href}
              className={
                flex
                items-center
                gap-4
                rounded-xl
                px-4
                py-3
                transition-all
                duration-300
                ${
                  active
                    ? "bg-yellow-400 text-black font-bold"
                    : "text-gray-300 hover:bg-zinc-800 hover:text-yellow-400"
                }
              }
            >

              <Icon size={22} />

              <span>{item.title}</span>

            </Link>

          );

        })}

      </nav>

    </aside>
  );
}
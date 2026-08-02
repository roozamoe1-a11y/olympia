"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/products", label: "محصولات" },
    { href: "/market", label: "بازار" },
    { href: "/news", label: "اخبار" },
    { href: "/dashboard", label: "داشبورد" },
    { href: "/ai", label: "هوش مصنوعی" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/95 backdrop-blur-md text-white border-b border-yellow-500/20 shadow-[0_8px_30px_rgba(255,170,0,0.08)]">

      {/* نوار بالا */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-black text-center text-[11px] sm:text-xs md:text-sm py-2 font-bold tracking-wide">
        🚚 ارسال سریع | ✔️ تضمین اصالت محصولات | 🎧 پشتیبانی تخصصی المپیا
      </div>

      {/* ردیف اول */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">

        {/* لوگو */}
        <Link
          href="/"
          className="flex flex-col justify-center flex-1 max-w-[520px] group transition-all duration-300"
        >
          <span className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-extrabold text-right group-hover:text-yellow-300 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,180,0,.45)]">
            المپیا
          </span>

          <div className="w-24 md:w-28 h-[2px] bg-gradient-to-r from-yellow-500 via-orange-400 to-transparent rounded-full mt-2 mb-2 ml-auto group-hover:w-40 transition-all duration-500" />

          <span className="text-yellow-300 text-[11px] sm:text-xs md:text-sm leading-5 text-right">
            <span className="block text-white font-semibold">
              فروشگاه تخصصی مکمل های ورزشی
            </span>

            <span className="block text-yellow-300">
              با بهترین برند های دنیا
            </span>
          </span>
        </Link>

        {/* آیکون ها */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">

          <button
            aria-label="جستجو"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(255,180,0,.25)] transition-all duration-300"
          >
            <Search size={20} />
          </button>

          <Link
            href="/dashboard"
            aria-label="پنل کاربری"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(255,180,0,.25)] transition-all duration-300"
          >
            <User size={20} />
          </Link>

          <Link
            href="/cart"
            aria-label="سبد خرید"
            className="relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(255,180,0,.25)] transition-all duration-300"
          >
            <ShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            )}
          </Link>{/* دکمه منوی موبایل */}
          <button
            aria-label="منوی سایت"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-10 h-10 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center hover:border-yellow-400 transition-all"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>{/* منو دسکتاپ */}
      <div className="hidden lg:block pb-4">
        <div className="max-w-fit mx-auto px-8 py-3 rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl shadow-[0_10px_30px_rgba(255,180,0,.08)]">
          <nav className="flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:transition-all
                  ${
                    pathname === link.href
                      ? "text-yellow-400 after:w-full"
                      : "text-gray-300 hover:text-yellow-400 after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* منوی موبایل */}
      {mobileMenu && (
        <div className="lg:hidden border-t border-yellow-500/20 bg-[#080808]/95 backdrop-blur-xl">
          <nav className="flex flex-col px-5 py-4">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300
                  ${
                    pathname === link.href
                      ? "bg-yellow-500 text-black"
                      : "text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}
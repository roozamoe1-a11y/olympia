"use client";

import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/95 backdrop-blur-md text-white border-b border-yellow-500/20 shadow-[0_8px_30px_rgba(255,170,0,0.08)]">

      {/* نوار بالا */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-black text-center text-xs md:text-sm py-2 font-bold tracking-wide">
        🚚 ارسال سریع | ✔ تضمین اصالت محصولات | 🎧 پشتیبانی تخصصی المپیا
      </div>

      {/* ردیف اول */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* لوگو */}
        <Link
          href="/"
          className="flex flex-col justify-center flex-1 max-w-[520px] group transition-all duration-300"
        >
          <span className="text-yellow-400 text-4xl md:text-5xl font-extrabold text-right group-hover:text-yellow-300 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,180,0,.45)]">
            المپیا
          </span>

          {/* خط طلایی */}
          <div className="w-28 h-[2px] bg-gradient-to-r from-yellow-500 via-orange-400 to-transparent rounded-full mt-2 mb-2 ml-auto group-hover:w-40 transition-all duration-500" />

          <span className="text-yellow-300 text-xs md:text-sm leading-5 text-right">
            <span className="block text-white font-semibold">
              فروشگاه تخصصی مکمل های ورزشی
            </span>

            <span className="block text-yellow-300">
              با بهترین برند های دنیا
            </span>
          </span>
        </Link>{/* آیکون ها */}
        <div className="flex items-center gap-4 shrink-0">

          <button className="w-11 h-11 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(255,180,0,.25)] transition-all duration-300">
            <Search size={22} />
          </button>

          <Link
            href="/dashboard"
            className="w-11 h-11 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(255,180,0,.25)] transition-all duration-300"
          >
            <User size={22} />
          </Link>

          <Link
            href="/cart"
            className="relative w-11 h-11 rounded-full border border-zinc-700 bg-[#111] flex items-center justify-center hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(255,180,0,.25)] transition-all duration-300"
          >
            <ShoppingCart size={24} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
                {cart.length}
              </span>
            )}
          </Link>

        </div>

      </div>

      {/* منو */}
      <div className="pb-4">

        <div className="max-w-fit mx-auto px-8 py-3 rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl shadow-[0_10px_30px_rgba(255,180,0,.08)]">

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm md:text-base font-medium"><Link
  href="/"
  className="relative px-2 py-1 text-gray-300 hover:text-yellow-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all"
>
  خانه
</Link>

<Link
  href="/products"
  className="relative px-2 py-1 text-gray-300 hover:text-yellow-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all"
>
  محصولات
</Link>

<Link
  href="/market"
  className="relative px-2 py-1 text-gray-300 hover:text-yellow-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all"
>
  بازار
</Link>

<Link
  href="/news"
  className="relative px-2 py-1 text-gray-300 hover:text-yellow-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all"
>
  اخبار
</Link>

<Link
  href="/dashboard"
  className="relative px-2 py-1 text-gray-300 hover:text-yellow-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all"
>
  داشبورد
</Link>

<Link
  href="/ai"
  className="relative px-2 py-1 text-gray-300 hover:text-yellow-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all"
>
  هوش مصنوعی
</Link>

          </nav>
        </div>
      </div>
    </header>
  );
}
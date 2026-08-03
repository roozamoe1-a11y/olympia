"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 border-b border-zinc-800 bg-[#111] flex items-center justify-between px-8">

      {/* عنوان صفحه */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          پنل مدیریت المپیا
        </h2>
      </div>

      {/* سمت چپ */}
      <div className="flex items-center gap-5">

        {/* جستجو */}
        <div className="hidden md:flex items-center bg-zinc-900 rounded-xl px-4 py-2 w-80">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="جستجو..."
            className="
              bg-transparent
              outline-none
              mr-3
              w-full
              text-sm
              placeholder:text-gray-500
            "
          />

        </div>

        {/* اعلان */}
        <button
          className="
            relative
            h-11
            w-11
            rounded-xl
            bg-zinc-900
            flex
            items-center
            justify-center
            hover:bg-zinc-800
            transition
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              top-2
              right-2
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />
        </button>

        {/* مدیر */}
        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-yellow-400"
          />

          <div className="hidden md:block text-right">

            <p className="font-bold">
              مدیر سایت
            </p>

            <p className="text-xs text-gray-400">
              Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}
"use client";

import { User, Phone, Mail, Edit3 } from "lucide-react";
import Link from "next/link";

type UserProfileProps = {
  name: string;
  email: string;
  phone: string;
  points: number;
  orders: number;
};

export default function UserProfileCard({
  name,
  email,
  phone,
  points,
  orders,
}: UserProfileProps) {
  return (
    <div className="bg-[#101010] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center">
            <User className="text-black" size={28} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              {name}
            </h2>

            <p className="text-gray-500 text-sm">
              پروفایل کاربر
            </p>

          </div>

        </div>

        <Link
          href="/dashboard/profile/edit"
          className="w-9 h-9 rounded-xl border border-zinc-700 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
        >
          <Edit3 size={18} />
        </Link>

      </div>

      <div className="space-y-4">

        <div className="flex items-center gap-3 text-gray-300">
          <Mail size={18} className="text-yellow-400" />
          <span className="text-sm">{email}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <Phone size={18} className="text-yellow-400" />
          <span className="text-sm">{phone}</span>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-[#171717] rounded-xl p-4 text-center border border-zinc-800">
          <p className="text-xs text-gray-500 mb-2">سفارش‌ها</p>
          <span className="text-yellow-400 text-xl font-bold">
            {orders}
          </span>
        </div>

        <div className="bg-[#171717] rounded-xl p-4 text-center border border-zinc-800">
          <p className="text-xs text-gray-500 mb-2">امتیاز</p>
          <span className="text-yellow-400 text-xl font-bold">
            {points}
          </span>
        </div>

      </div>

      <Link
        href="/dashboard/profile"
        className="block w-full mt-6 py-3 rounded-xl bg-yellow-500 text-center text-black font-bold hover:bg-yellow-400 transition"
      >
        مشاهده پروفایل
      </Link>

    </div>
  );
}
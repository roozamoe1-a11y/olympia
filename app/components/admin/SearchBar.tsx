"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex items-center bg-[#111] border border-zinc-800 rounded-xl px-4 h-12 w-full md:w-96">

      <Search
        size={18}
        className="text-gray-500"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجوی محصول..."
        className="
          w-full
          bg-transparent
          outline-none
          mr-3
          text-white
          placeholder:text-gray-500
        "
      />

    </div>
  );
}
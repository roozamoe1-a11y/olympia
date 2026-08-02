"use client";

import Link from "next/link";
import {
  ShoppingCart,
  PackageCheck,
  CreditCard,
} from "lucide-react";

export default function CartSummaryCard() {
  return (
    <div className="bg-[#101010] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all duration-300">


      {/* عنوان */}

      <div className="flex items-center gap-3 mb-6">

        <ShoppingCart
          className="text-yellow-400"
          size={26}
        />

        <h2 className="text-xl font-bold text-yellow-400">
          سبد خرید
        </h2>

      </div>



      {/* اطلاعات سبد */}

      <div className="space-y-4">


        <div className="flex items-center justify-between bg-[#171717] border border-zinc-800 rounded-xl p-4">

          <span className="text-gray-400 text-sm">
            تعداد کالا
          </span>

          <span className="text-white font-bold">
            0
          </span>

        </div>



        <div className="flex items-center justify-between bg-[#171717] border border-zinc-800 rounded-xl p-4">

          <span className="text-gray-400 text-sm">
            مبلغ کل
          </span>

          <span className="text-yellow-400 font-bold">
            ۰ تومان
          </span>

        </div>



      </div>




      {/* امکانات */}

      <div className="mt-6 space-y-3">


        <div className="flex items-center gap-3 text-gray-300 text-sm">

          <PackageCheck
            size={18}
            className="text-green-400"
          />

          ارسال سریع محصولات

        </div>



        <div className="flex items-center gap-3 text-gray-300 text-sm">

          <CreditCard
            size={18}
            className="text-yellow-400"
          />

          پرداخت امن

        </div>


      </div>




      <Link
        href="/cart"
        className="
        block
        text-center
        mt-6
        py-3
        rounded-xl
        bg-yellow-500
        text-black
        font-bold
        hover:bg-yellow-400
        transition
        "
      >
        ادامه خرید
      </Link>



    </div>
  );
}
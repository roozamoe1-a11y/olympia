"use client";

import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#0b0b0b] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
            تسویه حساب
          </h1>

          {cart.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold mb-4">
                سبد خرید شما خالی است
              </h2>

              <p className="text-gray-400 mb-8">
                ابتدا یک یا چند محصول به سبد خرید اضافه کنید.
              </p>

              <Link href="/products">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
                  بازگشت به فروشگاه
                </button>
              </Link>
            </div>
          ) : (
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

              <div className="grid md:grid-cols-4 gap-6">

                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="tel"
                  placeholder="شماره موبایل"
                  className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="email"
                  placeholder="ایمیل (اختیاری)"
                  className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  placeholder="کد پستی"
                  className="bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
                />

              </div>

              <textarea
                rows={5}
                placeholder="آدرس کامل"
                className="w-full mt-6 bg-zinc-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <div className="border-t border-zinc-700 mt-8 pt-8">

                <h2 className="text-2xl font-bold mb-6">
                  خلاصه سفارش
                </h2>

                <div className="space-y-4">

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b border-zinc-800 pb-3"
                    >
                      <div>
                        <p className="font-bold">
                          {item.name}
                        </p>

                        <p className="text-sm text-gray-400">
                          تعداد: {item.quantity}
                        </p>
                      </div>

                      <span className="text-yellow-400 font-bold">
                        {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
                      </span>
                    </div>
                  ))}

                </div>

                <div className="border-t border-zinc-700 mt-8 pt-6 flex justify-between items-center text-2xl font-bold">

                  <span>جمع کل</span>

                  <span className="text-yellow-400">
                    {totalPrice.toLocaleString("fa-IR")} تومان
                  </span>

                </div>
                <button
                  disabled={cart.length === 0}
                  className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 disabled:bg-zinc-700 disabled:text-gray-500 text-black py-4 rounded-xl text-xl font-bold transition"
                >
                  پرداخت
                </button>

              </div>

            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
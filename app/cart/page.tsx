"use client";

import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // محاسبه جمع کل
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formattedTotal =
    totalPrice.toLocaleString("fa-IR") + " تومان";

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#0b0b0b] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
            سبد خرید
          </h1>

          {cart.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
              <p className="text-xl text-gray-400">
                سبد خرید شما خالی است.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />

                      <div>
                        <h2 className="text-2xl font-bold">
                          {item.name}
                        </h2>

                        <p className="text-yellow-400 mt-2">
                          {item.price.toLocaleString("fa-IR")} تومان
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xl font-bold"
                          >
                            −
                          </button>

                          <span className="w-8 text-center text-xl font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-10 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-500 px-5 py-3 rounded-xl transition"
                    >
                      حذف
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    تعداد کالا:{" "}
                    {cart.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </h2>

                  <p className="mt-3 text-2xl font-bold text-yellow-400">
                    جمع کل: {formattedTotal}
                  </p>
                </div>{cart.length > 0 ? (
                  <Link href="/checkout">
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition duration-300">
                      ادامه خرید
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="bg-gray-700 text-gray-400 font-bold px-8 py-4 rounded-xl cursor-not-allowed"
                  >
                    ادامه خرید
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image?: string;
  };
};

export default function ProductCard({ product }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <Link href={`/products/${product.id}`}>
      <div className="cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition duration-300 hover:border-yellow-500 hover:-translate-y-2">
        <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-zinc-800 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-gray-500">
              تصویر محصول
            </span>
          )}
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">
          {product.name}
        </h3>

        <p className="mb-5 text-lg font-bold text-yellow-400">
          {product.price.toLocaleString("fa-IR")} تومان
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
            alert("محصول به سبد خرید اضافه شد.");
          }}
          className="w-full rounded-xl bg-yellow-500 py-3 font-bold text-black transition hover:bg-yellow-400"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </Link>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import type { Product } from "@/app/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const finalPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500">

      <Link href={`/products/${product.id}`}>

        <div className="relative mb-4 h-52 overflow-hidden rounded-xl bg-zinc-800">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="300px"
            className="object-contain p-4 transition duration-500 group-hover:scale-110"
          />

        </div>


        <p className="text-sm text-gray-400">
          {product.brand}
        </p>


        <h3 className="mt-2 text-xl font-bold text-white">
          {product.name}
        </h3>


        {product.discount && (
          <span className="mt-3 inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-400">
            {product.discount}% تخفیف
          </span>
        )}


        <div className="mt-4">

          {product.discount && (
            <p className="text-sm text-gray-500 line-through">
              {product.price.toLocaleString("fa-IR")} تومان
            </p>
          )}


          <p className="text-2xl font-bold text-yellow-400">
            {Math.round(finalPrice).toLocaleString("fa-IR")} تومان
          </p>

        </div>

      </Link>


      <button
        disabled={!product.stock}
        onClick={() => addToCart(product)}
        className={`mt-5 w-full rounded-xl py-3 font-bold transition

        ${
          !product.stock
          ? "cursor-not-allowed bg-zinc-700 text-gray-400"
          : "bg-yellow-500 text-black hover:bg-yellow-400"
        }

        `}
      >

        {!product.stock
        ? "ناموجود"
        : "افزودن به سبد خرید"}

      </button>


    </div>
  );
}
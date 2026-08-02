"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

export type FavoriteProduct = {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  rating: number;
};

type FavoriteProductsProps = {
  products: FavoriteProduct[];
};

export default function FavoriteProducts({
  products,
}: FavoriteProductsProps) {
  return (
    <div className="bg-[#101010] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">

      <div className="flex items-center gap-3 mb-6">
        <Heart
          className="text-red-400"
          size={26}
        />

        <h2 className="text-xl font-bold text-yellow-400">
          علاقه‌مندی‌ها
        </h2>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          هنوز محصولی به علاقه‌مندی‌ها اضافه نشده است.
        </div>
      ) : (
        <div className="space-y-4">

          {products.map((product) => (

            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex items-center gap-4 bg-[#171717] border border-zinc-800 rounded-xl p-3 hover:border-yellow-500/30 transition"
            >

              <Image
                src={product.image}
                alt={product.name}
                width={64}
                height={64}
                className="rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="text-white font-bold text-sm">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  {product.brand}
                </p>

                <div className="flex items-center gap-1 mt-2">

                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-xs text-yellow-400">
                    {product.rating.toFixed(1)}
                  </span>

                </div>

              </div>

              <div className="text-left">

                <p className="text-yellow-400 text-xs font-bold">
                  {product.price}
                </p>

                <button
                  type="button"
                  className="mt-3 w-8 h-8 rounded-lg bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition"
                >
                  <ShoppingCart size={16} />
                </button>

              </div>

            </Link>

          ))}

        </div>
      )}

      <Link
        href="/dashboard/favorites"
        className="block w-full mt-6 py-3 rounded-xl border border-yellow-500 text-center text-yellow-400 font-bold hover:bg-yellow-500 hover:text-black transition"
      >
        مشاهده همه علاقه‌مندی‌ها
      </Link>

    </div>
  );
}
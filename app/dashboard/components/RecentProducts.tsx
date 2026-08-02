"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Clock3,
  ShoppingCart,
} from "lucide-react";

export type RecentProduct = {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
};

type RecentProductsProps = {
  products: RecentProduct[];
  onAddToCart?: (id: number) => void;
};

export default function RecentProducts({
  products,
  onAddToCart,
}: RecentProductsProps) {
  return (
    <div className="bg-[#101010] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all duration-300">

      <div className="flex items-center gap-3 mb-6">
        <Clock3
          className="text-yellow-400"
          size={26}
        />

        <h2 className="text-xl font-bold text-yellow-400">
          محصولات اخیر
        </h2>
      </div>

      {products.length === 0 ? (

        <div className="text-center py-10 text-gray-500">
          محصولی وجود ندارد.
        </div>

      ) : (

        <div className="space-y-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="flex items-center gap-4 bg-[#171717] border border-zinc-800 rounded-xl p-3 hover:border-yellow-500/30 transition"
            >

              <Link href={`/products/${product.id}`}>

                <Image
                  src={product.image}
                  alt={product.name}
                  width={64}
                  height={64}
                  className="rounded-xl object-cover"
                />

              </Link>

              <div className="flex-1">

                <Link href={`/products/${product.id}`}>

                  <h3 className="text-white text-sm font-bold hover:text-yellow-400 transition">
                    {product.name}
                  </h3>

                </Link>

                <p className="text-gray-500 text-xs mt-1">
                  {product.brand}
                </p>

                <p className="text-yellow-400 text-xs mt-2 font-bold">
                  {product.price}
                </p>

              </div>

              <button
                type="button"
                onClick={() => onAddToCart?.(product.id)}
                className="w-9 h-9 rounded-xl bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <ShoppingCart size={18} />
              </button>

            </div>

          ))}

        </div>

      )}

      <Link
        href="/products"
        className="block w-full mt-6 py-3 rounded-xl border border-yellow-500 text-center text-yellow-400 font-bold hover:bg-yellow-500 hover:text-black transition"
      >
        مشاهده محصولات بیشتر
      </Link>

    </div>
  );
}
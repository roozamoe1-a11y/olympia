"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image?: string;

    // آماده برای آینده
    brand?: string;
    discount?: number;
    stock?: boolean;
    category?: string;
  };
};

export default function ProductCard({ product }: ProductProps) {
  const { addToCart } = useCart();

  const finalPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500">

      <Link href={`/products/${product.id}`}>

        <div className="mb-4 relative flex h-48 items-center justify-center overflow-hidden rounded-xl bg-zinc-800">

          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width:768px) 100vw, 300px"
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <span className="text-gray-500">
              تصویر محصول
            </span>
          )}

        </div>

        {product.brand && (
          <p className="mb-2 text-xs text-gray-400">
            {product.brand}
          </p>
        )}

        <h3 className="mb-3 text-xl font-bold text-white">
          {product.name}
        </h3>{product.discount && (
          <div className="mb-3 inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-400">
            {product.discount}% تخفیف
          </div>
        )}

        <div className="mb-5 flex flex-col gap-1">

          {product.discount && (
            <span className="text-sm text-gray-500 line-through">
              {product.price.toLocaleString("fa-IR")} تومان
            </span>
          )}

          <p className="text-lg font-bold text-yellow-400">
            {finalPrice.toLocaleString("fa-IR")} تومان
          </p>

        </div>

      </Link>


      <button
        disabled={product.stock === false}
        onClick={() => {
          addToCart(product);
        }}
        className={`w-full rounded-xl py-3 font-bold transition-all duration-300
          ${
            product.stock === false
              ? "cursor-not-allowed bg-zinc-700 text-gray-400"
              : "bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,.25)]"
          }
        `}
      >
        {product.stock === false
          ? "ناموجود"
          : "افزودن به سبد خرید"}
      </button>


    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import type { Product } from "@/app/data/products";


type Props = {
  product: Product;
};


export default function ProductCard({ product }: Props) {

  const { addToCart } = useCart();


  const finalPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;


  return (

    <div
      className="
      group
      rounded-2xl
      bg-[#111]
      border
      border-zinc-800
      overflow-hidden
      p-3
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >

      <Link href={`/products/${product.id}`}>

        <div
          className="
          relative
          w-full
          aspect-square
          rounded-xl
          overflow-hidden
          bg-zinc-900
          "
        >

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="
            object-contain
            group-hover:scale-105
            transition-transform
            duration-300
            "
          />

        </div>


        <div className="mt-3 text-center">

          <p className="text-xs text-gray-400">
            {product.brand}
          </p>


          <h3
            className="
            text-white
            font-bold
            text-sm
            md:text-base
            mt-2
            line-clamp-2
            "
          >
            {product.name}
          </h3>


          {product.discount && (
            <span
              className="
              inline-block
              mt-2
              px-3
              py-1
              rounded-full
              bg-red-500/20
              text-red-400
              text-xs
              "
            >
              {product.discount}% تخفیف
            </span>
          )}


          <div className="mt-3">

            <span
              className="
              text-yellow-400
              font-bold
              text-sm
              "
            >
              {finalPrice.toLocaleString()}
              {" "}
              تومان
            </span>


            {product.oldPrice && (
              <div
                className="
                text-xs
                text-gray-500
                line-through
                mt-1
                "
              >
                {product.oldPrice.toLocaleString()}
              </div>
            )}

          </div>

        </div>

      </Link>


      <button
        onClick={() => addToCart(product)}
        className="
        mt-4
        w-full
        rounded-xl
        py-2
        bg-yellow-400
        text-black
        font-bold
        text-sm
        hover:bg-yellow-300
        transition
        "
      >
        افزودن به سبد خرید
      </button>


    </div>

  );
}
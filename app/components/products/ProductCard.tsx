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


  const hasDiscount =
    product.discountPrice &&
    product.discountPrice < product.price;


  const displayPrice =
    hasDiscount
      ? product.discountPrice
      : product.price;



  return (

    <div
      className="
      group
      flex
      flex-col
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      p-4
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-yellow-500
      "
    >


      <Link href={`/products/${product.id}`}>



        {/* تصویر */}

        <div
          className="
          relative
          mb-4
          h-52
          overflow-hidden
          rounded-xl
          bg-white
          "
        >

          {product.image ? (

            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width:768px) 50vw,300px"
              className="
              object-contain
              p-5
              transition-transform
              duration-500
              group-hover:scale-110
              "
            />

          ) : (

            <div
              className="
              flex
              h-full
              items-center
              justify-center
              text-gray-500
              "
            >
              تصویر محصول
            </div>

          )}

        </div>




        {/* برند */}

        <p className="text-xs text-gray-400">
          {product.brand}
        </p>



        {/* نام */}

        <h3
          className="
          mt-2
          min-h-[48px]
          text-lg
          font-bold
          text-white
          "
        >
          {product.name}
        </h3>



        {/* دسته */}

        <p className="mt-2 text-xs text-yellow-400">
          {product.category}
        </p>



        {/* تخفیف */}

        {hasDiscount && (

          <span
            className="
            mt-3
            inline-flex
            w-fit
            rounded-full
            bg-red-500/20
            px-3
            py-1
            text-xs
            font-bold
            text-red-400
            "
          >
            تخفیف ویژه
          </span>

        )}




        {/* قیمت */}

        <div className="mt-4 min-h-[60px]">


          {hasDiscount && (

            <p
              className="
              text-sm
              text-gray-500
              line-through
              "
            >
              {product.price.toLocaleString("fa-IR")} تومان
            </p>

          )}



          {displayPrice && displayPrice > 0 ? (

            <p
              className="
              text-xl
              font-extrabold
              text-yellow-400
              "
            >
              {displayPrice.toLocaleString("fa-IR")} تومان
            </p>

          ) : (

            <p className="text-sm text-gray-400">
              قیمت در حال بروزرسانی
            </p>

          )}

        </div>



      </Link>




      {/* دکمه خرید */}

      <button

        disabled={!product.isAvailable}

        onClick={() => addToCart(product)}

        className={`
        mt-5
        w-full
        rounded-xl
        py-3
        font-bold
        transition-all

        ${
          !product.isAvailable

          ? 
          "cursor-not-allowed bg-zinc-700 text-gray-400"

          :

          "bg-yellow-500 text-black hover:bg-yellow-400"
        }

        `}
      >

        {!product.isAvailable
          ? "ناموجود"
          :
          "افزودن به سبد خرید"
        }

      </button>


    </div>

  );
}
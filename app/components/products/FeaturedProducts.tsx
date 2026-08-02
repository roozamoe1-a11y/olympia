"use client";

import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    name: "Gold Standard Whey",
    brand: "Optimum Nutrition",
    image: "/images/whey.jpg",
    oldPrice: 4990000,
    price: 4390000,
    discount: "12%",
    rating: 5,
  },
  {
    id: 2,
    name: "Gold Whey",
    brand: "Kevin Levrone",
    image: "/images/levrone.jpg",
    oldPrice: 4350000,
    price: 3890000,
    discount: "10%",
    rating: 5,
  },
  {
    id: 3,
    name: "Nitro-Tech",
    brand: "MuscleTech",
    image: "/images/nitrotech.jpg",
    oldPrice: 4700000,
    price: 4190000,
    discount: "11%",
    rating: 5,
  },
  {
    id: 4,
    name: "ISO-XP",
    brand: "Applied Nutrition",
    image: "/images/isoxp.jpg",
    oldPrice: 5150000,
    price: 4650000,
    discount: "10%",
    rating: 5,
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="bg-[#080808] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400">
            محصولات ویژه
          </h2>

          <p className="mt-3 text-gray-400">
            محبوب‌ترین مکمل‌های ورزشی فروشگاه المپیا
          </p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">


          {products.map((product) => (

            <div
              key={product.id}
              className="
              group
              flex
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900
              hover:border-yellow-500
              transition-all
              duration-300
              hover:-translate-y-2
              "
            >


              {/* تصویر محصول */}

              <div className="
              relative
              h-52
              md:h-72
              flex
              items-center
              justify-center
              bg-white
              overflow-hidden
              ">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                  max-h-full
                  max-w-full
                  object-contain
                  p-5
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  "
                />


                <span
                className="
                absolute
                top-3
                left-3
                rounded-full
                bg-red-600
                px-3
                py-1
                text-xs
                font-bold
                text-white
                "
                >
                  {product.discount} تخفیف
                </span>


              </div>



              <div className="flex flex-col flex-1 p-4">


                <p className="text-xs text-gray-400">
                  {product.brand}
                </p>


                <h3
                className="
                mt-2
                min-h-[48px]
                text-sm
                md:text-lg
                font-bold
                text-white
                "
                >
                  {product.name}
                </h3>


                <div className="mt-2 text-yellow-400">
                  {"★".repeat(product.rating)}
                </div>



                <div className="mt-4">

                  <p className="
                  text-xs
                  text-gray-500
                  line-through
                  ">
                    {product.oldPrice.toLocaleString("fa-IR")}
                    تومان
                  </p><p className="
                  mt-1
                  text-lg
                  font-extrabold
                  text-yellow-400
                  ">
                    {product.price.toLocaleString("fa-IR")}
                    تومان
                  </p>

                </div>



                <button
                onClick={() => addToCart(product)}
                className="
                mt-auto
                pt-4
                "
                >

                  <span
                  className="
                  block
                  w-full
                  rounded-xl
                  bg-yellow-500
                  py-3
                  text-sm
                  font-bold
                  text-black
                  hover:bg-yellow-400
                  transition
                  "
                  >
                    افزودن به سبد خرید
                  </span>

                </button>


              </div>


            </div>

          ))}


        </div>


      </div>
    </section>
  );
}
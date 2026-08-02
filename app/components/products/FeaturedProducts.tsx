"use client";

import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Gold Standard Whey",
    brand: "Optimum Nutrition",
    image: "/images/whey.jpg",
    price: 4390000,
    discount: 12,
    stock: true,
    category: "پروتئین",
  },

  {
    id: 2,
    name: "Gold Whey",
    brand: "Kevin Levrone",
    image: "/images/levrone.jpg",
    price: 3890000,
    discount: 10,
    stock: true,
    category: "پروتئین",
  },

  {
    id: 3,
    name: "Nitro-Tech",
    brand: "Muscletech",
    image: "/images/nitrotech.jpg",
    price: 4190000,
    discount: 11,
    stock: true,
    category: "پروتئین",
  },

  {
    id: 4,
    name: "ISO-XP",
    brand: "Applied Nutrition",
    image: "/images/isoxp.jpg",
    price: 4650000,
    discount: 10,
    stock: true,
    category: "ایزوله",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-zinc-900 py-14 md:py-20">

      <div className="mx-auto max-w-7xl px-3 md:px-6">

        <div className="mb-10 text-center md:mb-14">

          <h2 className="text-3xl font-extrabold text-yellow-400 md:text-4xl">
            محصولات ویژه
          </h2>

          <p className="mt-3 text-sm text-gray-400 md:text-base">
            محبوب‌ترین مکمل‌های ورزشی فروشگاه المپیا
          </p>

        </div><div className="
          grid
          grid-cols-2
          gap-4
          md:grid-cols-3
          lg:grid-cols-4
          md:gap-8
        ">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
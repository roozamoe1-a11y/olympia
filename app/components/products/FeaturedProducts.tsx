const products = [
  {
    id: 1,
    name: "Gold Standard Whey",
    brand: "Optimum Nutrition",
    image: "/images/whey.jpg",
    oldPrice: "۴,۹۹۰,۰۰۰",
    price: "۴,۳۹۰,۰۰۰",
    discount: "12%",
    rating: "★★★★★",
  },
  {
    id: 2,
    name: "Gold Whey",
    brand: "Kevin Levrone",
    image: "/images/levrone.jpg",
    oldPrice: "۴,۳۵۰,۰۰۰",
    price: "۳,۸۹۰,۰۰۰",
    discount: "10%",
    rating: "★★★★★",
  },
  {
    id: 3,
    name: "Nitro-Tech",
    brand: "Muscletech",
    image: "/images/nitrotech.jpg",
    oldPrice: "۴,۷۰۰,۰۰۰",
    price: "۴,۱۹۰,۰۰۰",
    discount: "11%",
    rating: "★★★★★",
  },
  {
    id: 4,
    name: "ISO-XP",
    brand: "Applied Nutrition",
    image: "/images/isoxp.jpg",
    oldPrice: "۵,۱۵۰,۰۰۰",
    price: "۴,۶۵۰,۰۰۰",
    discount: "10%",
    rating: "★★★★★",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-zinc-900 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
            محصولات ویژه
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-400">
            محبوب‌ترین مکمل‌های ورزشی فروشگاه المپیا
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-700 bg-zinc-800 transition duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 md:h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-2 top-2 md:left-4 md:top-4 rounded-full bg-red-600 px-2 md:px-3 py-1 text-[10px] md:text-sm font-bold text-white">
                  OFF {product.discount}
                </span>
              </div>

              <div className="p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="mt-1 text-[11px] md:text-sm text-gray-400">
                  {product.brand}
                </p>

                <div className="mt-2 md:mt-3 text-yellow-400 text-sm md:text-lg">
                  {product.rating}
                </div>

                <div className="mt-3 md:mt-5">
                  <p className="text-[11px] md:text-base text-gray-500 line-through">
                    {product.oldPrice} تومان
                  </p>

                  <p className="mt-1 text-lg md:text-2xl font-extrabold text-yellow-400">
                    {product.price} تومان
                  </p>
                </div>

                <button className="mt-4 md:mt-6 w-full rounded-xl bg-yellow-500 py-2 md:py-3 text-xs md:text-base font-bold text-black transition hover:bg-yellow-400">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
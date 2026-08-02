import ProductCard from "./ProductCard";
import { products } from "@/app/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#080808] py-14 md:py-20">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* عنوان بخش */}
        <div className="text-center mb-10 md:mb-14">

          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400">
            محصولات ویژه
          </h2>

          <p className="mt-3 text-gray-400 text-sm md:text-base">
            محبوب‌ترین مکمل‌های ورزشی فروشگاه المپیا
          </p>

        </div>


        {/* لیست محصولات */}
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          md:gap-8
          "
        >

          {products.map((product) => (

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
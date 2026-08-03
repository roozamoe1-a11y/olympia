import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/products/ProductCard";
import { products } from "@/app/data/products";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <section className="bg-[#0b0b0b] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-yellow-400 mb-4">
            فروشگاه المپیا
          </h1>

          <p className="text-center text-gray-400 mb-14">
            تمامی مکمل‌های ورزشی اورجینال
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
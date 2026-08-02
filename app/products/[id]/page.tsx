import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { products } from "../../data/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      <section className="bg-[#0b0b0b] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 items-center">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-5xl font-bold text-yellow-400 mb-6">
                {product.name}
              </h1>

              <p className="text-3xl font-bold text-white mb-8">
                {product.price.toLocaleString("fa-IR")} تومان
              </p>

              <p className="text-gray-400 leading-9 mb-10">
                مکمل ورزشی اورجینال با تضمین اصالت کالا، مناسب برای افزایش قدرت،
                عضله‌سازی و ریکاوری سریع.
              </p>

              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold transition">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
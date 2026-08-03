"use client";

import { useRouter } from "next/navigation";
import ProductForm from "@/app/components/admin/ProductForm";

export default function NewProductPage() {
  const router = useRouter();

  async function createProduct(data: any) {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          price: Number(data.price),
          oldPrice: data.oldPrice
            ? Number(data.oldPrice)
            : null,
          discount: data.discount
            ? Number(data.discount)
            : null,
        }),
      });

      if (!response.ok) {
        throw new Error("خطا در ساخت محصول");
      }

      alert("محصول با موفقیت ساخته شد");

      router.push("/admin/products");
      router.refresh();

    } catch (error) {
      console.error(error);
      alert("خطا در ساخت محصول");
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] p-8 text-white">

      <h1 className="text-3xl font-bold text-yellow-400 mb-8">
        افزودن محصول جدید
      </h1>

      <div className="max-w-3xl">
        <ProductForm
          onSubmit={createProduct}
        />
      </div>

    </div>
  );
}
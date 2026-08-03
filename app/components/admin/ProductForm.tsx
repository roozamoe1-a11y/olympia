"use client";

import { useState } from "react";
import { Save } from "lucide-react";

type ProductFormData = {
  name: string;
  brand: string;
  image: string;
  price: string;
  oldPrice: string;
  discount: string;
  stock: boolean;
  category: string;
  description: string;
};

type Props = {
  initialData?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
};

export default function ProductForm({
  initialData,
  onSubmit,
}: Props) {

  const [form, setForm] = useState<ProductFormData>({
    name: initialData?.name || "",
    brand: initialData?.brand || "",
    image: initialData?.image || "",
    price: initialData?.price || "",
    oldPrice: initialData?.oldPrice || "",
    discount: initialData?.discount || "",
    stock: initialData?.stock ?? true,
    category: initialData?.category || "",
    description: initialData?.description || "",
  });


  function handleChange(
    field: keyof ProductFormData,
    value: string | boolean
  ) {

    setForm({
      ...form,
      [field]: value,
    });

  }


  function submitHandler(
    e: React.FormEvent
  ) {

    e.preventDefault();

    onSubmit(form);

  }


  return (

    <form
      onSubmit={submitHandler}
      className="
        bg-[#111]
        border
        border-zinc-800
        rounded-2xl
        p-6
        space-y-5
      "
    >

      <h2 className="text-2xl font-bold text-yellow-400">
        اطلاعات محصول
      </h2>


      <input
        placeholder="نام محصول"
        value={form.name}
        onChange={(e)=>handleChange("name",e.target.value)}
        className="admin-input"
      />


      <input
        placeholder="برند"
        value={form.brand}
        onChange={(e)=>handleChange("brand",e.target.value)}
        className="admin-input"
      />


      <input
        placeholder="آدرس تصویر"
        value={form.image}
        onChange={(e)=>handleChange("image",e.target.value)}
        className="admin-input"
      />


      <input
        placeholder="قیمت"
        value={form.price}
        onChange={(e)=>handleChange("price",e.target.value)}
        className="admin-input"
      />


      <input
        placeholder="قیمت قدیم"
        value={form.oldPrice}
        onChange={(e)=>handleChange("oldPrice",e.target.value)}
        className="admin-input"
      />


      <input
        placeholder="درصد تخفیف"
        value={form.discount}
        onChange={(e)=>handleChange("discount",e.target.value)}
        className="admin-input"
      />


      <input
        placeholder="دسته بندی"
        value={form.category}
        onChange={(e)=>handleChange("category",e.target.value)}
        className="admin-input"
      />


      <textarea
        placeholder="توضیحات محصول"
        value={form.description}
        onChange={(e)=>handleChange("description",e.target.value)}
        className="
          admin-input
          min-h-32
        "
      />


      <label className="flex items-center gap-3 text-gray-300">

        <input
          type="checkbox"
          checked={form.stock}
          onChange={(e)=>handleChange(
            "stock",
            e.target.checked
          )}
        />

        موجود در انبار

      </label>


      <button
        type="submit"
        className="
          flex
          items-center
          justify-center
          gap-2
          w-full
          bg-yellow-400
          text-black
          font-bold
          py-3
          rounded-xl
          hover:bg-yellow-300
          transition
        "
      >

        <Save size={20}/>

        ذخیره محصول

      </button>


    </form>

  );
}
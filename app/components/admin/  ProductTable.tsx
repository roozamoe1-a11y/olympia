"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

export type AdminProduct = {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  stock: boolean;
};

type Props = {
  products: AdminProduct[];
  onDelete: (id: number) => void;
};

export default function ProductTable({
  products,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#111]">

      <table className="w-full">

        <thead className="bg-zinc-900">

          <tr className="text-gray-300">

            <th className="py-4">تصویر</th>

            <th>نام محصول</th>

            <th>برند</th>

            <th>قیمت</th>

            <th>موجودی</th>

            <th>عملیات</th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.id}
              className="border-t border-zinc-800 hover:bg-zinc-900 transition"
            >

              <td className="py-3">

                <div className="flex justify-center">

                  <div className="relative w-16 h-16">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain rounded-lg"
                    />

                  </div>

                </div>

              </td>

              <td className="text-center font-bold">
                {product.name}
              </td>

              <td className="text-center text-gray-400">
                {product.brand}
              </td>

              <td className="text-center text-yellow-400 font-bold">
                {product.price.toLocaleString()} تومان
              </td>

              <td className="text-center">

                {product.stock ? (
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400 text-sm">
                    موجود
                  </span>
                ) : (
                  <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-400 text-sm">
                    ناموجود
                  </span>
                )}

              </td>

              <td>

                <div className="flex justify-center gap-3">

                  <Link
                    href={/admin/products/edit/${product.id}}
                    className="rounded-lg bg-blue-600 p-2 hover:bg-blue-500 transition"
                  >

                    <Pencil size={18} />

                  </Link>

                  <button
                    onClick={() => onDelete(product.id)}
                    className="rounded-lg bg-red-600 p-2 hover:bg-red-500 transition"
                  >

                    <Trash2 size={18} />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
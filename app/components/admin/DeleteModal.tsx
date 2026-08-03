"use client";

import { X, Trash2 } from "lucide-react";

type Props = {
  open: boolean;
  productName?: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({
  open,
  productName,
  onClose,
  onConfirm,
}: Props) {

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        px-4
      "
    >

      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-zinc-800
          bg-[#111]
          p-6
        "
      >

        <div className="flex justify-between items-center mb-6">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-red-500/20 p-3">

              <Trash2
                className="text-red-400"
                size={24}
              />

            </div>

            <h2 className="text-xl font-bold">
              حذف محصول
            </h2>

          </div>


          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >

            <X size={22}/>

          </button>

        </div>


        <p className="text-gray-400 leading-8">

          آیا مطمئن هستید که می‌خواهید محصول

          <span className="text-yellow-400 font-bold mx-2">
            {productName}
          </span>

          را حذف کنید؟

        </p>


        <div className="flex gap-3 mt-8">

          <button
            onClick={onClose}
            className="
              flex-1
              rounded-xl
              bg-zinc-800
              py-3
              hover:bg-zinc-700
            "
          >
            انصراف
          </button>


          <button
            onClick={onConfirm}
            className="
              flex-1
              rounded-xl
              bg-red-600
              py-3
              hover:bg-red-500
            "
          >
            حذف
          </button>

        </div>

      </div>

    </div>
  );
}
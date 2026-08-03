"use client";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">

      {Array.from(
        { length: totalPages },
        (_, index) => index + 1
      ).map((page) => (

        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={
            h-10
            w-10
            rounded-xl
            transition
            font-bold
            ${
              currentPage === page
                ? "bg-yellow-400 text-black"
                : "bg-zinc-900 text-gray-400 hover:bg-zinc-800"
            }
          }
        >
          {page}
        </button>

      ))}

    </div>
  );
}
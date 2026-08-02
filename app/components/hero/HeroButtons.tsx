export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <button className="rounded-xl bg-yellow-500 px-8 py-3 font-bold text-black transition hover:bg-yellow-400">
        مشاهده محصولات
      </button>

      <button className="rounded-xl border border-yellow-500 px-8 py-3 text-white transition hover:bg-yellow-500 hover:text-black">
        دستیار هوش مصنوعی المپیا
      </button>
    </div>
  );
}
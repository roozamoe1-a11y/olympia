export default function MarketHeader() {
  return (
    <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400">
          بازارهای مالی
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-9">
          مشاهده لحظه‌ای قیمت ارزهای دیجیتال، طلا، ارز، نفت، شاخص‌های جهانی
          و اخبار اقتصادی در یک صفحه.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="rounded-full border border-yellow-500 px-5 py-2 text-yellow-400">
            ارز دیجیتال
          </span>

          <span className="rounded-full border border-yellow-500 px-5 py-2 text-yellow-400">
            طلا
          </span>

          <span className="rounded-full border border-yellow-500 px-5 py-2 text-yellow-400">
            فارکس
          </span>

          <span className="rounded-full border border-yellow-500 px-5 py-2 text-yellow-400">
            نفت
          </span>

          <span className="rounded-full border border-yellow-500 px-5 py-2 text-yellow-400">
            شاخص‌ها
          </span>
        </div>
      </div>
    </section>
  );
}
const categories = [
  {
    title: "پروتئین",
    icon: "💪",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "کراتین",
    icon: "⚡️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "آمینو",
    icon: "🥤",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "گینر",
    icon: "🏋️",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "چربی سوز",
    icon: "🔥",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "ویتامین",
    icon: "💊",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function Categories() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400">
            دسته‌بندی محصولات
          </h2>

          <p className="mt-4 text-gray-400">
            مکمل مورد نیاز خود را سریع پیدا کنید.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-zinc-700
                bg-zinc-900
                p-5
                md:p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-yellow-500
                hover:shadow-2xl
                hover:shadow-yellow-500/20
                cursor-pointer
              "
            >
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-3xl shadow-lg transition duration-300 group-hover:scale-110 md:h-20 md:w-20 md:text-4xl`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                مشاهده محصولات
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const brands = [
  {
    name: "Optimum Nutrition",
    logo: "/images/brands/on.png",
  },
  {
    name: "Kevin Levrone",
    logo: "/images/brands/levrone.png",
  },
  {
    name: "Muscletech",
    logo: "/images/brands/muscletech.png",
  },
  {
    name: "Applied Nutrition",
    logo: "/images/brands/applied.png",
  },
  {
    name: "Rule1",
    logo: "/images/brands/rule1.png",
  },
  {
    name: "Universal",
    logo: "/images/brands/universal.png",
  },
];

export default function Brands() {
  return (
    <section className="bg-[#111] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-extrabold text-yellow-400">
          برندهای معتبر
        </h2>

        <p className="mb-12 text-center text-gray-400">
          نمایندگی بهترین برندهای مکمل دنیا
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-32 items-center justify-center rounded-2xl border border-gray-700 bg-[#1c1c1c] p-6 transition-all duration-300 hover:border-yellow-500"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
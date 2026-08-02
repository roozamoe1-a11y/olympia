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
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-extrabold text-yellow-400 mb-4">
          برندهای معتبر
        </h2>

        <p className="text-center text-gray-400 mb-12">
          نمایندگی بهترین برندهای مکمل دنیا
        </p>

        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-[#1c1c1c] rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 p-8 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
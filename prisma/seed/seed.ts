import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "وی پروتئین",
        brand: "Optimum Nutrition",
        category: "Protein",
        price: 3450000,
        image: "/images/whey.jpg",
        description: "پروتئین وی با کیفیت بالا برای عضله سازی",
        discount: 0,
      },
      {
        name: "کراتین مونوهیدرات",
        brand: "Universal",
        category: "Creatine",
        price: 1980000,
        image: "/images/hero2.jpg",
        description: "افزایش قدرت و حجم عضلات",
        discount: 0,
      },
      {
        name: "BCAA",
        brand: "IsoXP",
        category: "Amino Acid",
        price: 2350000,
        image: "/images/isoxp.jpg",
        description: "آمینو اسیدهای ضروری برای ریکاوری",
        discount: 0,
      },
      {
        name: "گلوتامین",
        brand: "Levrone",
        category: "Supplement",
        price: 1790000,
        image: "/images/levrone.jpg",
        description: "کمک به بازسازی عضلات",
        discount: 0,
      },
    ],
  });

  console.log("Products seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

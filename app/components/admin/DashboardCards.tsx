import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
} from "lucide-react";

const cards = [
  {
    title: "تعداد محصولات",
    value: "0",
    icon: Package,
    color: "text-yellow-400",
  },
  {
    title: "سفارش‌های امروز",
    value: "0",
    icon: ShoppingCart,
    color: "text-blue-400",
  },
  {
    title: "کاربران",
    value: "0",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "فروش امروز",
    value: "0 تومان",
    icon: DollarSign,
    color: "text-red-400",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-[#111]
              p-6
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-sm">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {card.value}
                </h2>

              </div>

              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-zinc-900
                  flex
                  items-center
                  justify-center
                "
              >
                <Icon
                  size={30}
                  className={card.color}
                />
              </div>

            </div>
          </div>
        );

      })}

    </div>
  );
}
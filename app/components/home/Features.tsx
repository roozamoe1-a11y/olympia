import {
  Truck,
  ShieldCheck,
  CreditCard,
  Headphones,
} from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Truck,
      title: "ارسال سریع",
      text: "ارسال به سراسر کشور",
    },
    {
      icon: ShieldCheck,
      title: "ضمانت اصالت",
      text: "تمام محصولات اورجینال",
    },
    {
      icon: CreditCard,
      title: "پرداخت امن",
      text: "درگاه پرداخت مطمئن",
    },
    {
      icon: Headphones,
      title: "پشتیبانی",
      text: "۷ روز هفته پاسخگو",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#111]">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
            چرا المپیا؟
          </h2>

          <p className="text-gray-400 mt-3 text-sm md:text-lg">
            با خیال راحت خرید کنید
          </p>
        </div>

        {/* موبایل ۲ ستون - دسکتاپ ۴ ستون */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl md:rounded-3xl border border-zinc-800 bg-zinc-900 p-4 md:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]"
              >
                <div className="mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-all duration-300">
                  <Icon
                    size={28}
                    className="md:w-10 md:h-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="mb-2 md:mb-3 text-base md:text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xs md:text-base text-gray-400 leading-6">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
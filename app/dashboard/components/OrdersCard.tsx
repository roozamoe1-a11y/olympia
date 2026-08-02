"use client";

import Link from "next/link";
import {
  Package,
  CheckCircle,
  Clock3,
  Truck,
} from "lucide-react";

export type Order = {
  id: string;
  product: string;
  status: "delivered" | "shipping" | "pending";
  date: string;
};

type OrdersCardProps = {
  orders: Order[];
};

export default function OrdersCard({
  orders,
}: OrdersCardProps) {
  const getStatus = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return {
          text: "تحویل شده",
          color: "text-green-400",
          icon: CheckCircle,
        };

      case "shipping":
        return {
          text: "در حال ارسال",
          color: "text-yellow-400",
          icon: Truck,
        };

      default:
        return {
          text: "در انتظار پرداخت",
          color: "text-orange-400",
          icon: Clock3,
        };
    }
  };

  return (
    <div className="bg-[#101010] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Package
          className="text-yellow-400"
          size={26}
        />

        <h2 className="text-xl font-bold text-yellow-400">
          سفارش‌های اخیر
        </h2>
      </div>

      {/* Orders */}

      {orders.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          هنوز سفارشی ثبت نشده است.
        </div>
      ) : (
        <div className="space-y-4">

          {orders.map((order) => {
            const status = getStatus(order.status);
            const Icon = status.icon;

            return (
              <Link
                key={order.id}
                href={`/dashboard/orders/${order.id}`}
                className="block bg-[#171717] border border-zinc-800 rounded-xl p-4 hover:border-yellow-500/30 transition-all duration-300"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                      <Icon
                        size={22}
                        className={status.color}
                      />
                    </div>

                    <div>

                      <h3 className="text-white font-bold text-sm">
                        {order.product}
                      </h3>

                      <p className="text-gray-500 text-xs mt-1">
                        شماره سفارش: {order.id}
                      </p>

                    </div>

                  </div>

                  <div className="text-left">

                    <p
                      className={`text-xs font-bold ${status.color}`}
                    >
                      {status.text}
                    </p>

                    <span className="text-gray-500 text-xs">
                      {order.date}
                    </span>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>
      )}

      <Link
        href="/dashboard/orders"
        className="block w-full mt-6 py-3 rounded-xl border border-yellow-500 text-center text-yellow-400 font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300"
      >
        مشاهده همه سفارش‌ها
      </Link>

    </div>
  );
}
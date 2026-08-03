import DashboardCards from "@/app/components/admin/DashboardCards";
import StatsChart from "@/app/components/admin/StatsChart";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* عنوان */}
      <div>
        <h1 className="text-4xl font-extrabold text-yellow-400">
          داشبورد مدیریت
        </h1>

        <p className="mt-2 text-gray-400">
          به پنل مدیریت فروشگاه المپیا خوش آمدید.
        </p>
      </div>

      {/* کارت‌ها */}
      <DashboardCards />

      {/* نمودار */}
      <StatsChart />

      {/* دو باکس پایین */}
      <div className="grid gap-8 lg:grid-cols-2">

        {/* آخرین محصولات */}
        <div className="rounded-2xl border border-zinc-800 bg-[#111] p-6">

          <h2 className="mb-6 text-xl font-bold text-yellow-400">
            آخرین محصولات
          </h2>

          <div className="text-gray-500">
            هنوز محصولی ثبت نشده است.
          </div>

        </div>

        {/* آخرین سفارش‌ها */}
        <div className="rounded-2xl border border-zinc-800 bg-[#111] p-6">

          <h2 className="mb-6 text-xl font-bold text-yellow-400">
            آخرین سفارش‌ها
          </h2>

          <div className="text-gray-500">
            هنوز سفارشی ثبت نشده است.
          </div>

        </div>

      </div>

    </div>
  );
}
export default function EconomicCalendar() {
  const events = [
    {
      time: "10:30",
      event: "نرخ بهره اروپا",
      impact: "زیاد",
    },
    {
      time: "15:00",
      event: "آمار اشتغال آمریکا",
      impact: "زیاد",
    },
    {
      time: "18:00",
      event: "ذخایر نفت خام",
      impact: "متوسط",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        تقویم اقتصادی
      </h2>

      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        {events.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-zinc-900 p-4 border-b border-zinc-800"
          >
            <span>{item.time}</span>
            <span>{item.event}</span>
            <span className="text-yellow-400">{item.impact}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
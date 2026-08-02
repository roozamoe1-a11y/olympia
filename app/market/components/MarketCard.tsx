type MarketCardProps = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  positive?: boolean;
};

export default function MarketCard({
  name,
  symbol,
  price,
  change,
  positive = true,
}: MarketCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/10">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{symbol}</p>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold text-yellow-400">{price}</p>

          <p
            className={`mt-1 text-sm font-semibold ${
              positive ? "text-green-400" : "text-red-400"
            }`}
          >
            {change}
          </p>
        </div>
      </div>
    </div>
  );
}
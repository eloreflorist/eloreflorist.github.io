import { formatStartingPrice } from "@/lib/price";

type StartingPriceProps = {
  price?: number;
  compact?: boolean;
};

export default function StartingPrice({ price, compact = false }: StartingPriceProps) {
  if (typeof price !== "number") return null;
  const amount = formatStartingPrice(price);

  if (compact) {
    return (
      <p className="mt-1 text-sm text-gray-800">
        <span className="text-gray-500">Starts from </span>
        <data value={String(price)} className="font-semibold">{amount}</data>
      </p>
    );
  }

  return (
    <p className="mb-6">
      <span className="block text-sm text-gray-500">Starts from</span>
      <data value={String(price)} className="text-2xl font-semibold text-gray-900">{amount}</data>
    </p>
  );
}

export const PRICE_CURRENCY = "IDR";

export function formatStartingPrice(price: number) {
  const amount = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(price);
  return `Rp. ${amount}`;
}

export function startingPriceText(price: number) {
  return `Starts from ${formatStartingPrice(price)}`;
}

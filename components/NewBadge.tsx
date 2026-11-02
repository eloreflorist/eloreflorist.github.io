"use client";

import { getNewUntil, isNewUntil } from "@/lib/newArrivals";

type NewBadgeProps = {
  productName: string;
  until?: string;
  slug?: string;
  label?: string;
};

export default function NewBadge({
  productName,
  until,
  slug,
  label = "NEW",
}: NewBadgeProps) {
  const expiresOn = until ?? (slug ? getNewUntil(slug) : undefined);

  if (!expiresOn || !isNewUntil(expiresOn)) return null;

  return (
    <>
      <p className="sr-only">
        New {productName} at Èlore Florist in Surabaya. New until{" "}
        <time dateTime={expiresOn}>{expiresOn}</time>.
      </p>
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-[7.25rem] w-[7.25rem] overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute -left-10 top-7 w-40 -rotate-45 bg-[#7A3E48] py-1.5 text-center text-[10px] font-bold tracking-[0.25em] text-white shadow-md md:text-[11px]">
          {label}
        </span>
      </div>
    </>
  );
}

import { googleMapsUrl, testimonials } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <p className="flex justify-center gap-0.5 text-xs leading-none" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "text-amber-500" : "text-gray-300"} aria-hidden="true">
          ★
        </span>
      ))}
    </p>
  );
}

function formatWhen(date: string) {
  const hasDay = date.length > 7;
  const value = new Date(`${hasDay ? date : `${date}-01`}T00:00:00`);
  const options: Intl.DateTimeFormatOptions = hasDay
    ? { day: "numeric", month: "long", year: "numeric" }
    : { month: "long", year: "numeric" };
  return value.toLocaleDateString("en-GB", options);
}

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials" className="min-w-0">
      <h2 id="testimonials" className="flex items-center gap-4 text-sm font-semibold tracking-[0.18em] text-gray-900">
        <span className="h-px flex-1 bg-gray-300" aria-hidden="true" />
        <a href={googleMapsUrl} rel="noopener noreferrer" className="shrink-0 hover:opacity-70">
          TESTIMONIALS
        </a>
        <span className="h-px flex-1 bg-gray-300" aria-hidden="true" />
      </h2>
      <p className="sr-only">Google Maps reviews of Èlore Florist in Surabaya.</p>
      <ul className="mt-8 grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-6">
        {testimonials.map((item, index) => (
          <li
            key={`${item.name ?? "review"}-${item.date}`}
            className={`flex h-full flex-col rounded-lg bg-gray-50 p-4 text-center shadow-md lg:col-span-2 ${
              testimonials.length === 5 && index === 3 ? "lg:col-start-2" : ""
            }`}
          >
            <Stars rating={item.rating} />
            {item.name ? <p className="mt-2 text-sm font-semibold text-gray-900">{item.name}</p> : null}
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-gray-800">
              <p>“{item.quote}”</p>
              {item.translation ? <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.translation}</p> : null}
            </blockquote>
            <p className="mt-3 text-xs tracking-wide text-gray-500">
              {item.source} · {formatWhen(item.date)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

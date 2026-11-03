"use client";

const MAPS_URL =
  "https://www.google.com/maps/place/Elore+Florist+%26+Gift+Surabaya/@-7.3384187,112.7377265,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb8c6ffce3ed:0xebe9213354acb36c!8m2!3d-7.3384187!4d112.7377265!16s%2Fg%2F11ywkgtgq_";

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.25!2d112.73515!3d-7.3384187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb8c6ffce3ed%3A0xebe9213354acb36c!2sElore%20Florist%20%26%20Gift%20Surabaya!5e0!3m2!1sen!2sid!4v1730640000000!5m2!1sen!2sid";

function isMobileDevice() {
  const ua = navigator.userAgent;
  const iPadOs = navigator.maxTouchPoints > 1 && /Macintosh/i.test(ua);
  return /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || iPadOs;
}

export default function ShopMap() {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg shadow-lg">
      <iframe
        title="Èlore Florist shop on Google Maps"
        src={EMBED_URL}
        className="pointer-events-none absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex={-1}
      />
      <a
        href={MAPS_URL}
        className="absolute inset-0 flex items-end p-3"
        aria-label="Open Èlore Florist shop photos on Google Maps"
        onClick={(event) => {
          if (isMobileDevice()) return;
          event.preventDefault();
          window.open(MAPS_URL, "_blank", "noopener,noreferrer");
        }}
      >
        <span className="rounded-full bg-white/95 px-3 py-1 text-sm font-medium text-primary shadow">
          View shop on Google Maps
        </span>
      </a>
    </div>
  );
}

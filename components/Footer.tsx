export default function Footer() {
  return (
    <footer className="bg-pink-100 px-4 py-16 text-sm">
      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
        <div>
          <p className="mb-2 font-semibold">NEWSLETTER</p>
          <input
            placeholder="Email Address"
            className="w-full border px-3 py-2"
          />
        </div>
        <div>
          <p className="font-semibold">SHOP</p>
          <ul className="mt-2 space-y-1">
            <li>Flowers</li>
            <li>Gifts</li>
            <li>Weddings</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">VISIT</p>
          <p>33 W. Main St, Durham NC</p>
          <p>Tue–Fri 12–6</p>
        </div>
      </div>
    </footer>
  );
}

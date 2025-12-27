export default function Hero() {
  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/flower.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative text-center text-white px-4">
        <p className="mb-2 text-sm tracking-widest">WELCOME TO</p>
        <h2 className="mb-4 text-4xl font-light md:text-6xl">Èlore Florist</h2>
        <button className="rounded bg-pink-200 px-6 py-3 text-sm text-black">SHOP NOW</button>
      </div>
    </section>
  );
}

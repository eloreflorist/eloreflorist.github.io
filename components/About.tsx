export default function About() {
    return (
      <section className="bg-pink-100 relative flex h-screen items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center text-white px-4">
            <h3 className="mb-6 text-2xl tracking-wide">Èlore Florist</h3>
            <p className="mx-auto max-w-2xl text-sm leading-7">
            We specialize in creating opulent floral art inspired by nature’s
            splendor. Each piece is sustainably crafted and designed to tell
            a story of beauty and intention.
            </p>
        </div>
      </section>
    );
  }
  
import { colors } from "@/app/theme";

export default function About() {
    return (
      <section className="relative flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundColor: colors.accent }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center px-4">
            <h3 className="mb-6 text-2xl tracking-wide" style={{ color: colors.white }}>Èlore Florist</h3>
            <p className="mx-auto max-w-2xl text-sm leading-7" style={{ color: colors.white }}>
            We specialize in creating opulent floral art inspired by nature's
            splendor. Each piece is sustainably crafted and designed to tell
            a story of beauty and intention.
            </p>
        </div>
      </section>
    );
  }
  
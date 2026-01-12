import Link from "next/link";
import { colors } from "@/app/theme";

export default function Footer() {
  return (
    <footer className='px-4 py-16 text-sm' style={{ backgroundColor: colors.accent }}>
      <div className='mx-auto max-w-6xl grid gap-8 md:grid-cols-2'>
        <div>
          <p className='font-semibold' style={{ color: colors.primary }}>SHOP</p>
          <ul className='mt-2 space-y-1'>
            <li><Link href='/flowers' className='transition-colors' style={{ color: colors.primary }} >Flowers</Link></li>
            <li><Link href='/weddings' className='transition-colors' style={{ color: colors.primary }} >Weddings</Link></li>
            <li><Link href='/gifts' className='transition-colors' style={{ color: colors.primary }} >Gifts</Link></li>
          </ul>
        </div>
        <div>
          <p className='font-semibold' style={{ color: colors.primary }}>FIND US</p>
          <p style={{ color: colors.primary }}>Jl. Siwalankerto Timur I No. 2, Wonocolo, Surabaya</p>
          <p style={{ color: colors.primary }}>Monday - Friday 09:00 AM - 05:00 PM</p>
          <p style={{ color: colors.primary }}>Saturday 09:00 AM - 04:00 PM</p>
          <p style={{ color: colors.primary }}>SUNDAY CLOSED</p>
        </div>
      </div>
    </footer>
  );
}


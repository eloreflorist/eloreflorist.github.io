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
          <p className='font-semibold' style={{ color: colors.primary }}>VISIT</p>
          <p style={{ color: colors.primary }}>44 W. Main St, Durham NC</p>
          <p style={{ color: colors.primary }}>Monday - Saturday 10:00 AM - 6:00 PM</p>
        </div>
      </div>
    </footer>
  );
}


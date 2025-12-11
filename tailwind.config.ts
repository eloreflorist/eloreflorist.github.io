// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#59544A',
        secondary: '#C8CBCA',
        accent: '#C0BBAE',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
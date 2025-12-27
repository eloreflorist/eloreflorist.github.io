import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Èlore Florist",
  description: "Minimal floral designs inspired by nature",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased">
        {children}
      </body>
    </html>
  );
}

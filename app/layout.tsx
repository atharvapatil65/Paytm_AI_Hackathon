import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAHAKAR | Your AI business partner",
  description: "Explore SAHAKAR, a Merchant Growth AI concept that helps local merchants sell everywhere, serve customers, manage dues, and grow with Saha.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

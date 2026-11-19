import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VELTRIX — Beyond Digital Assets.",
  description: "A premium digital asset platform concept.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

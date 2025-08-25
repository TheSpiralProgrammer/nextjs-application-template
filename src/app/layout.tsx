import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CryptoAnalytics - Cryptocurrency Dashboard",
  description: "A modern cryptocurrency analytics dashboard with drawing tools and real-time data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

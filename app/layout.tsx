import type, { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Shopcart – Everything You Need",
    default: "Shopcart – Everything You Need",
  },
  description:
    "Discover everything in one place at Shopcart – your go-to online destination for shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-advent antialiased">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "~/components/layout/Navbar";
import { Toaster } from "~/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecommerce Frontend",
  description: "Ecommerce Frontend",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

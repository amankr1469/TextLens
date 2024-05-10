import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text-Extractor",
  description: "Convert Any Image To Text For Free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Header />
        <hr className="w-[90%] mx-auto border-[#202020] rounded-full" />
        <div>{children}</div>
        <hr className="w-[90%] mx-auto border-[#202020] rounded-full" />
      </body>
    </html>
  );
}
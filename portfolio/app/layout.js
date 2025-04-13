import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bozyu's Playground 🐾",
  description: "Play with doggies! Meet Loki, Bozyu, Luna, Fifi, Pipi and Happy. Proudly made by Bozyu",
  icons: {
    icon: "./images/bozyu.png?v=2", // Use absolute path from /public folder
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fundamentals of Computing",
  description:
    "Final project for Univserity of Belize Fundamentals of Computing course [CMPS1134-2]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

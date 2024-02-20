import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InfoModal from "./components/InfoModal";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venta de Garage",
  description: "By 3R",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Suspense fallback={<>Loading...</>}>
          <InfoModal />
        </Suspense>
      </body>
    </html>
  );
}

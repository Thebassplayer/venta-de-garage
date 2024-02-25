import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InfoModal from "./components/InfoModal";
import { Suspense } from "react";
import Footer from "./components/Footer";
import { cx } from "./utils/styles";

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
      <body
        className={cx(
          inter.className,
          "flex min-h-screen flex-col justify-between",
        )}
      >
        {children}
        <Footer />

        <Suspense fallback={<>Loading...</>}>
          <InfoModal />
        </Suspense>
      </body>
    </html>
  );
}

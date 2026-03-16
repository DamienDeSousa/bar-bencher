import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bar Bencher",
  description: "Les cocktails de gentlemen qui poussent à la salle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#FAF7F2] overflow-x-hidden">{children}</body>
    </html>
  );
}

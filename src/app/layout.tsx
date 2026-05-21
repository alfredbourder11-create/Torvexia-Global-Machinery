import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TORVEXIA Global Machinery",
  description: "International Agricultural Equipment Division",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}

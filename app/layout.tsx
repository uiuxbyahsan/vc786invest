import type { Metadata } from "next";
import { inter, playfairDisplay } from "../lib/fonts";
import Providers from "../components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "786 Ventures — Venture returns for the next generation of engineers",
  description:
    "786 Ventures backs exceptional founders. The returns fund STEM scholarships for minority and women engineering students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="bg-background font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

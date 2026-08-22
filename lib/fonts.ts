import localFont from "next/font/local";
import { Inter, Playfair_Display } from "next/font/google";

// Formula (PP Formula) — display / heading typeface, registered from
// /formula-2-font-family. Sans-serif; used as the heading face throughout.
export const formula = localFont({
  src: [
    {
      path: "../fonts/PPFormula-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/PPFormula-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/PPFormula-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/PPFormula-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Playfair Display — targeted italic accent only (a single emphasized word in
// select headlines). Never used as a running typeface. Italic weights only.
export const playfairItalic = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

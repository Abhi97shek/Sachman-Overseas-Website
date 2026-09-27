/*
  FONTS

  The theme names the faces Arcadia and Arcadia Display. Those files are not
  in the repo, so Outfit is loaded as the live stand-in and assigned to the
  same CSS variables. Drop Arcadia files here later and point next/font/local
  at them without changing component classes.
*/
import { Geist_Mono, Outfit } from "next/font/google";

export const brandFont = Outfit({
  variable: "--font-brand",
  subsets: ["latin"],
  display: "swap",
});

export const codeFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVariables = `${brandFont.variable} ${codeFont.variable}`;

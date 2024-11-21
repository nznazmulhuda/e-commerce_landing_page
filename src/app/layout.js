import { Manrope } from "next/font/local";
import "./globals.css";

// fonts declear
const manrope = Manrope({
  src: [
    {
      path: "./fonts/manrope/Manrope-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  preload: true,
});

export const metadata = {
  title: "E-Commerce Landing Page",
  description: "Shop top-quality products at unbeatable prices on We5ive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased font-manrope`}>{children}</body>
    </html>
  );
}

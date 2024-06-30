import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const sharpSans = localFont({
  variable: "--font-sharp-sans",
  src: [
    {
      path: "./../assets/fonts/sharp_sans_no1_-_medium-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../assets/fonts/sharp_sans_no1_-_semibold-webfont.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sharpSans.className}>{children}</body>
    </html>
  );
}

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
  title: "Scio Consulting Assitant",
  description: "AI Assistant for Scio Consulting",
  icons: {
    icon: {
      url: "https://sciodev.com/wp-content/uploads/2024/03/cropped-Logo-scio_512x512_icono-192x192.png",
      type: "image/png",
    },
  },
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

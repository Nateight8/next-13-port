import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import localFont from "next/font/local";
const customFont = localFont({
  src: "../../public/font/custom.ttf",
  variable: "--headingFont",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${customFont.variable}`}>{children}</body>
    </html>
  );
}

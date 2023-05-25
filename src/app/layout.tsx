import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"], variable: "--bodyFont" });

export const metadata = {
  title: "Dev by Nate | Portfolio",
  description:
    "Embark on an inspiring journey through my portfolio as a passionate React developer specializing in front-end development. With Next.js as my trusted companion, I've crafted a collection of awe-inspiring projects that blend cutting-edge technology with an intuitive touch. Immerse yourself in the harmonious dance of creativity and functionality, as each project unfolds before your eyes. Experience the thrill of seamless user experiences and meticulously designed interfaces, meticulously built with love and dedication. Join me in unlocking the boundless potential of React and Next.js, and witness the magic that happens when human emotion converges with the artistry of code.",
};

import localFont from "next/font/local";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeaderToo from "../components/header/HeaderToo";
const avantR = localFont({
  src: "../../public/font/avante/Avant-Demi-R.otf",
  variable: "--headingFont",
});

const custom = localFont({
  src: "../../public/font/avante/Avant-Demi-R.otf",
  variable: "--heading",
});
const textFont = localFont({
  src: "../../public/font/Thunder-blacklc.ttf",
  variable: "--custom",
});

const customB = localFont({
  src: "../../public/font/avante/Avant-book-r.otf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${avantR.variable} ${textFont.variable} ${custom.variable} ${customB.className} `}
      >
        <HeaderToo />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

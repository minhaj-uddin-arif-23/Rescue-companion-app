import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Home from "./page";
import Homepage from "./Home/Homepage";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default:"Rescue companion app",
    template:"%s  | Rescue companion app "
  },
  description: "Trying to learn about Next js  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
           
        {children}
        <Footer />
      </body>
    </html>
  );
}

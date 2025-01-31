import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const poppins = Poppins({
  weight:["400","600","700"],
  subsets:["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default:"Rescue companion app",
    template: `%s  | Rescue companion app `
  },
  
  keywords: ['Next.js', 'React', 'JavaScript','Learn to next js','typescript','playground'],
  description: "Trying to learn about Next js  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
           
        {children}
        <Footer />
      </body>
    </html>
  );
}

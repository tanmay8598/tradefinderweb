import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ClientOnly from "./../components/ClientsOnly/ClientsOnly";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trade Finder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}

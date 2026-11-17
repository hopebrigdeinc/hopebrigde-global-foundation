import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({ subsets:["latin"], variable:"--font-inter", display:"swap" });
const playfair = Playfair_Display({ subsets:["latin"], variable:"--font-playfair", display:"swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hopebridgeglobal.org"),
  title: { default:"Hopebridge Global Foundation | Bridging Hope", template:"%s | Hopebridge Global Foundation" },
  description:"Hopebridge Global Foundation is a humanitarian nonprofit initiative committed to creating meaningful opportunities and strengthening underserved communities.",
  openGraph:{ title:"Hopebridge Global Foundation", description:"Bridging Hope. Building a Better Tomorrow.", url:"https://hopebridgeglobal.org", siteName:"Hopebridge Global Foundation", type:"website" },
  robots:{ index:true, follow:true }
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}><SiteHeader />{children}<SiteFooter /></body></html>;
}

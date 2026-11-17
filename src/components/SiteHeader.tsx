"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect,useState } from "react";
import { Menu,X,ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

export default function SiteHeader(){
 const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false);
 const path=usePathname();
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>36);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
 useEffect(()=>{setOpen(false);},[path]);
 return <header className={`fixed z-50 top-0 inset-x-0 transition-all duration-300 ${scrolled||open?"bg-navy shadow-lg":"bg-gradient-to-b from-black/45 to-transparent"}`}>
  <div className="container-shell flex h-[82px] items-center justify-between gap-8">
   <Link href="/" aria-label="Hopebridge Global Foundation home" className="flex items-center gap-3 shrink-0">
    <Image src="/images/hopebridge-logo.png" width={150} height={100} alt="Hopebridge Global Foundation logo placeholder" priority />
    <span className="hidden sm:block text-white leading-tight"><span className="block font-semibold tracking-wide text-sm">HOPEBRIDGE</span><span className="block text-[9px] tracking-[.24em] text-white/70">GLOBAL FOUNDATION</span></span>
   </Link>
   <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5">
    {navItems.map(item=><Link key={item.href} href={item.href} className={`relative py-3 text-[10px] font-semibold tracking-[.12em] uppercase text-white/85 hover:text-gold transition-colors ${path===item.href?"text-gold":""}`}>{item.label}{path===item.href&&<span className="absolute left-0 right-0 -bottom-1 h-px bg-gold"/>}</Link>)}
   </nav>
   <button className="xl:hidden text-white p-2" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<nav aria-label="Mobile navigation" className="xl:hidden bg-navy border-t border-white/10 px-6 py-5 max-h-[80vh] overflow-auto">{navItems.map(item=><Link key={item.href} href={item.href} className={`block py-3 border-b border-white/10 text-xs tracking-[.13em] uppercase ${path===item.href?"text-gold":"text-white"}`}>{item.label}</Link>)}<a href="mailto:hopebridgeinc@gmail.com" className="mt-5 inline-flex text-gold text-xs tracking-widest uppercase">Email the foundation <ChevronDown size={14}/></a></nav>}
 </header>;
}

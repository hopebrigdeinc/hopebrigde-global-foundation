import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/content";
export default function SiteFooter(){return <footer className="bg-[#0c2851] text-white">
 <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.2fr_.8fr_1fr]">
  <div><div className="flex items-center gap-3 mb-6"><Image src="/images/hopebridge-logo.png" width={120} height={80} alt="Hopebridge logo placeholder"/><div className="text-sm font-semibold tracking-wider">HOPEBRIDGE<br/><span className="text-[9px] font-normal tracking-[.2em] text-white/60">GLOBAL FOUNDATION</span></div></div><p className="max-w-sm text-sm leading-7 text-white/65">Bridging Hope. Building a Better Tomorrow. Working towards dignity, opportunity and sustainable community development.</p></div>
  <div><p className="eyebrow mb-5">Explore</p><div className="grid grid-cols-2 gap-x-5 gap-y-3">{navItems.map(i=><Link key={i.href} href={i.href} className="text-xs text-white/70 hover:text-gold">{i.label}</Link>)}</div></div>
  <div><p className="eyebrow mb-5">Get in touch</p><a className="text-lg hover:text-gold" href="mailto:hopebridgeinc@gmail.com">hopebridgeinc@gmail.com</a><p className="mt-4 text-xs leading-6 text-white/55">For general, programme and partnership enquiries, contact the foundation by email.</p></div>
 </div>
 <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-3 py-5 text-[10px] tracking-wider text-white/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Hopebridge Global Foundation. All rights reserved.</span><span>Bridging Hope. Building a Better Tomorrow.</span></div></div>
 </footer>}

"use client";
import { useEffect, useRef, useState } from "react";
export default function Reveal({ children, className="" }:{children:React.ReactNode;className?:string}) {
  const ref=useRef<HTMLDivElement>(null); const [visible,setVisible]=useState(false);
  useEffect(()=>{ const node=ref.current; if(!node){setVisible(true);return;} const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.12}); observer.observe(node); return()=>observer.disconnect();},[]);
  return <div ref={ref} className={`${className} reveal ${visible?"is-visible":""}`}>{children}</div>;
}

"use client";
import {useState} from "react";
import {ArrowRight,CheckCircle2} from "lucide-react";
export default function ContactForm({defaultType="General enquiry"}:{defaultType?:string}){
 const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 const [message,setMessage]=useState("");
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setStatus("sending");setMessage("");const form=e.currentTarget;const data=Object.fromEntries(new FormData(form).entries());try{const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});const body=await res.json();if(!res.ok)throw new Error(body.error||"Unable to send your enquiry.");setStatus("success");setMessage("Thank you. Your enquiry has been sent to the foundation.");form.reset();}catch(err){setStatus("error");setMessage(err instanceof Error?err.message:"Something went wrong. Please email hopebridgeinc@gmail.com.");}}
 return <form onSubmit={submit} className="space-y-5">
  <div className="grid gap-5 sm:grid-cols-2"><Field label="Your name" name="name" required/><Field label="Email address" name="email" type="email" required/></div>
  <div className="grid gap-5 sm:grid-cols-2"><Field label="Phone (optional)" name="phone"/><label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy">Enquiry type</span><select name="type" defaultValue={defaultType} className="w-full border border-slate-300 bg-white px-4 py-3 text-sm"><option>General enquiry</option><option>Partnership enquiry</option><option>Programme enquiry</option><option>Grant programme enquiry</option><option>Media enquiry</option></select></label></div>
  <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy">Message</span><textarea name="message" required minLength={10} rows={5} className="w-full resize-y border border-slate-300 px-4 py-3 text-sm outline-none focus:border-navy" placeholder="How can we help?"/></label>
  <div className="flex flex-wrap items-center gap-4"><button disabled={status==="sending"} className="btn btn-navy disabled:opacity-60">{status==="sending"?"Sending…":"Send enquiry"} <ArrowRight size={16}/></button><p aria-live="polite" className={`text-sm ${status==="error"?"text-red-700":"text-green-800"}`}>{status==="success"&&<CheckCircle2 className="mr-2 inline" size={16}/>}{message}</p></div>
  <p className="text-xs leading-5 text-charcoal/50">Your details are used only to respond to this enquiry. Please do not include sensitive personal or financial information.</p>
 </form>
}
function Field({label,name,type="text",required=false}:{label:string;name:string;type?:string;required?:boolean}){return <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy">{label}</span><input name={name} type={type} required={required} autoComplete={name==="name"?"name":name==="email"?"email":"tel"} className="w-full border border-slate-300 px-4 py-3 text-sm outline-none focus:border-navy"/></label>}

import {NextResponse} from "next/server";
import {Resend} from "resend";
import {z} from "zod";
const schema=z.object({name:z.string().trim().min(2).max(120),email:z.string().email().max(254),phone:z.string().max(40).optional().or(z.literal("")),type:z.string().min(2).max(80),message:z.string().trim().min(10).max(5000)});
export async function POST(req:Request){
 try{
  const parsed=schema.safeParse(await req.json());
  if(!parsed.success)return NextResponse.json({error:"Please check the form fields and try again."},{status:400});
  const apiKey=process.env.RESEND_API_KEY,from=process.env.CONTACT_FROM_EMAIL,to=process.env.CONTACT_TO_EMAIL||"hopebridgeinc@gmail.com";
  if(!apiKey||!from)return NextResponse.json({error:"Online form delivery is not configured yet. Please email hopebridgeinc@gmail.com directly."},{status:503});
  const resend=new Resend(apiKey);const d=parsed.data;
  const result=await resend.emails.send({from,to,replyTo:d.email,subject:`Website ${d.type}: ${d.name}`,text:`Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone||"Not provided"}\nType: ${d.type}\n\n${d.message}`});
  if(result.error)return NextResponse.json({error:"We could not send your enquiry. Please email hopebridgeinc@gmail.com."},{status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Invalid request. Please try again or email hopebridgeinc@gmail.com."},{status:400});}
}

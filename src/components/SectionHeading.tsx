export default function SectionHeading({eyebrow,title,description,light=false}:{eyebrow:string;title:string;description?:string;light?:boolean}) {
 return <div className="max-w-3xl"><p className="eyebrow mb-5">{eyebrow}</p><h2 className={`display-title text-4xl md:text-6xl ${light?"text-white":"text-navy"}`}>{title}</h2>{description&&<p className={`mt-6 max-w-2xl text-base md:text-lg leading-8 ${light?"text-white/70":"text-charcoal/75"}`}>{description}</p>}</div>;
}

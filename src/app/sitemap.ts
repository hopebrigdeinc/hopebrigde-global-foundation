import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","about","programmes","impact","grant-programme","partnerships","news-gallery","contact"];return routes.map(route=>({url:`https://hopebridgeglobal.org/${route}`,lastModified:new Date(),changeFrequency:"monthly",priority:route===""?1:.7}));}

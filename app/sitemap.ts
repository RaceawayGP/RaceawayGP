import type{MetadataRoute}from"next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://raceaway.example";return["","/singapore-gp","/singapore-gp/tickets","/singapore-gp/seats","/singapore-gp/travel","/about","/affiliate-disclosure","/privacy"].map(url=>({url:base+url,lastModified:new Date(),changeFrequency:url===""?"weekly":"monthly",priority:url===""?1:.8}))}

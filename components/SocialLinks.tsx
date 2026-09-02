export default function SocialLinks(){
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/raceawaygp/" },
    { name: "Threads", href: "https://www.threads.com/@raceawaygp" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61593658486256" },
  ];

  return <div className="grid grid-3">{socialLinks.map(({name,href})=><a key={name} className="card feature-link" href={href} target="_blank" rel="noopener noreferrer"><span className="eyebrow">Follow</span><h3>{name} ↗</h3></a>)}</div>
}

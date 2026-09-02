export default function SocialLinks(){
  // TODO: replace with real RaceAway social URLs.
  return <div className="grid grid-3">{["Instagram","Threads","Facebook"].map(x=><a key={x} className="card feature-link" href="#"><span className="eyebrow">Follow</span><h3>{x} ↗</h3></a>)}</div>
}

type Props={platform:string;href:string;label:string;disabled?:boolean;disclosureText?:string};
export default function AffiliateButton({platform,href,label,disabled=false,disclosureText}:Props){
  // TODO: track affiliate_click and ticket_compare_click when analytics is added.
  if(disabled)return <div><button className="btn btn-disabled" disabled aria-label={`${platform} 即將推出`}>即將推出</button>{disclosureText&&<small className="muted" style={{display:"block",marginTop:8}}>{disclosureText}</small>}</div>;
  return <div><a className="btn btn-primary" href={href} target="_blank" rel="sponsored nofollow noopener noreferrer">{label}</a>{disclosureText&&<small className="muted" style={{display:"block",marginTop:8}}>{disclosureText}</small>}</div>
}

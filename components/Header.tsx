"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const links=[{label:"賽事",href:"/singapore-gp"},{label:"門票",href:"/singapore-gp/tickets"},{label:"座位指南",href:"/singapore-gp/seats"},{label:"Race Trip",href:"/singapore-gp/travel"},{label:"關於我們",href:"/about"}];
export default function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="container nav"><Link href="/" className="brand" onClick={()=>setOpen(false)} aria-label="RaceAway 首頁"><Image className="brand-logo" src="/brand/raceaway-logo.png" alt="RaceAway" width={46} height={46} priority/><span>Race<span>Away</span></span></Link><nav className={open?"navlinks open":"navlinks"} aria-label="主要導覽">{links.map(x=><Link key={x.href} href={x.href} onClick={()=>setOpen(false)}>{x.label}</Link>)}<Link className="btn btn-primary nav-cta" href="/singapore-gp" onClick={()=>setOpen(false)}>探索新加坡站</Link></nav><button className="menu" aria-label="開啟選單" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?"×":"☰"}</button></div></header>}

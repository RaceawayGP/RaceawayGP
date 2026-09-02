import Image from "next/image";
import Link from "next/link";
import { FeatureCard, NavCard, SectionHeading } from "@/components/ui";
import SocialLinks from "@/components/SocialLinks";

const popularGuides = [
  { tag: "TICKET BASICS", title: "Walkabout vs Grandstand：第一次睇點揀？", href: "/singapore-gp/tickets" },
  { tag: "SEAT DECISION", title: "Singapore GP 邊個座位最值得？", href: "/singapore-gp/seats" },
  { tag: "FIRST RACE", title: "第一次現場睇 F1，要買幾多日？", href: "/singapore-gp/tickets" },
  { tag: "PLATFORM", title: "Klook vs KKday vs Trip.com：F1 門票點揀？", href: "/singapore-gp/tickets#platforms" },
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-visual" aria-hidden="true"><Image src="/brand/raceaway-banner.png" alt="" fill priority sizes="(max-width: 780px) 100vw, 58vw" /></div>
      <div className="hero-shade" />
      <div className="container"><div className="hero-copy">
        <div className="eyebrow">門票攻略・座位比較・觀賽旅程</div>
        <h1>第一次現場睇 F1，<br />都唔使估。</h1>
        <p className="hero-question">揀邊張飛？坐邊個位？邊個平台買？</p>
        <p>RaceAway 幫香港、台灣車迷比較門票、座位同 Race Trip 資訊，第一次去現場都可以買得有信心。</p>
        <div className="hero-actions"><Link className="btn btn-primary" href="/singapore-gp">探索 Singapore GP 2026</Link><Link className="btn btn-secondary" href="/singapore-gp/seats">查看座位指南</Link></div>
        <div className="route-line">香港 🇭🇰・台灣 🇹🇼 <span>→</span> 全球 Race Weekends</div>
      </div></div>
    </section>

    <section className="section singapore-feature"><div className="container">
      <SectionHeading eyebrow="NEXT RACE GUIDE" title="Singapore GP 2026" description="準備去新加坡現場睇 F1？由揀飛到 Race Trip，一次過搞清楚。" />
      <div className="grid grid-4 product-grid"><NavCard title="🎟️ 門票攻略" description="了解票種及購票選擇" href="/singapore-gp/tickets" /><NavCard title="💺 座位指南" description="搵最適合你預算同觀賽喜好嘅位置" href="/singapore-gp/seats" /><NavCard title="💰 平台比較" description="比較 Klook、KKday、Trip.com 購票資訊" href="/singapore-gp/tickets#platforms" /><NavCard title="✈️ Race Trip" description="香港／台灣出發住宿、交通及行程攻略" href="/singapore-gp/travel" /></div>
    </div></section>

    <section className="section dark-band"><div className="container">
      <SectionHeading eyebrow="POPULAR GUIDES" title="大家最想知道" description="由最常見嘅門票問題開始，快啲搵到適合你嘅答案。" />
      <div className="grid grid-4 editorial-grid">{popularGuides.map((guide, index) => <Link className="editorial-card" href={guide.href} key={guide.title}><span className="editorial-number">0{index + 1}</span><span className="eyebrow">{guide.tag}</span><h3>{guide.title}</h3><span className="read-more">閱讀指南 →</span></Link>)}</div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="WHY RACEAWAY" title="由買飛到入場，一站搞清楚。" /><div className="grid grid-4"><FeatureCard icon="01" title="門票比較">快速理解票種同平台選擇。</FeatureCard><FeatureCard icon="02" title="座位指南">按預算同觀賽喜好揀位置。</FeatureCard><FeatureCard icon="03" title="Race Trip">整理住宿、交通及行程。</FeatureCard><FeatureCard icon="04" title="購票提醒" badge="即將推出">掌握重要購票時間。</FeatureCard></div></div></section>

    <section className="section dark-band"><div className="container"><SectionHeading eyebrow="LOCAL PERSPECTIVE" title="為香港 🇭🇰・台灣 🇹🇼 車迷而設" description="繁體中文資訊、HKD／TWD 預算脈絡，加上由香港或台灣出發嘅實際住宿、交通同 race-weekend 規劃。" /><div className="grid grid-2 country-links"><Link className="card feature-link" href="/singapore-gp/travel"><span className="country-flag">🇭🇰</span><h3>香港出發</h3><p>由航班、住宿到賽後交通，逐步建立行程。</p><span className="read-more">睇 Race Trip 攻略 →</span></Link><Link className="card feature-link" href="/singapore-gp/travel"><span className="country-flag">🇹🇼</span><h3>台灣出發</h3><p>按出發城市、TWD 預算同旅程節奏開始計劃。</p><span className="read-more">睇 Race Trip 攻略 →</span></Link></div><div className="badge-row">{["Traditional Chinese", "HKD context", "TWD context", "Practical race-weekend planning"].map(x => <span className="badge" key={x}>{x}</span>)}</div></div></section>

    <section className="section"><div className="container"><SectionHeading title="Follow RaceAway" description="Instagram、Threads 同 Facebook 持續分享門票、座位同 Race Trip 攻略。" /><SocialLinks /></div></section>
  </>;
}

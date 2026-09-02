import type{Metadata}from"next";import CountryToggle from"@/components/CountryToggle";import{PageHero,SectionHeading}from"@/components/ui";
export const metadata:Metadata={title:"香港／台灣去 Singapore GP 旅程攻略｜RaceAway",description:"由香港或台灣出發，規劃 Singapore GP 機票、住宿、交通與預算。"};
export default function Page(){return <><PageHero eyebrow="Race Trip" title="香港 / 台灣去 Singapore GP 點 plan？" subtitle="將機票、住宿、交通同比賽日安排拆開，一步步建立你嘅觀賽預算。"/><section className="section"><div className="container"><SectionHeading title="揀你嘅出發地" description="以下內容為規劃框架，不包含即時機票或酒店價格。"/><CountryToggle/></div></section></>}

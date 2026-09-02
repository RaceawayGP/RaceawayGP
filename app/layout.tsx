import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://raceaway.example"),
  title:{ default:"RaceAway｜F1 門票、座位與現場觀賽指南", template:"%s" },
  description:"香港及台灣 F1 車迷的現場觀賽指南。比較門票、了解座位、計劃 Singapore、Suzuka 等 Race Trip。",
  openGraph:{ type:"website", locale:"zh_HK", siteName:"RaceAway", title:"RaceAway｜F1 門票、座位與現場觀賽指南", description:"香港及台灣 F1 車迷的現場觀賽指南。" }
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body><Header/><main>{children}</main><Footer/></body></html>}

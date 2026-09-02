import type{Metadata}from"next";import{PageHero}from"@/components/ui";
export const metadata:Metadata={title:"私隱政策｜RaceAway",description:"RaceAway MVP 私隱政策。"};
export default function Page(){return <><PageHero eyebrow="Privacy" title="私隱政策" subtitle="RaceAway 重視你嘅私隱。"/><section className="section"><article className="container prose"><p>目前 RaceAway MVP 不設帳戶、付款系統或訂閱表格，亦不主動收集個人資料。</p><p>日後如加入分析、聯絡表格或第三方服務，我們會在啟用前更新本政策，說明資料類型、用途及你的選擇。</p><p>第三方網站有其獨立私隱政策。離開 RaceAway 前往其他平台時，請查閱該平台的最新條款。</p></article></section></>}

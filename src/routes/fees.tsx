import { createFileRoute } from "@tanstack/react-router";
import { FeesPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/fees")({ head:()=>seo("Fee Structure","Review the Session 2026–27 fee information for Golden Future International School.","/fees"), component: Page });
function Page(){return <FeesPage/>}

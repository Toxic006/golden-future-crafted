import { createFileRoute } from "@tanstack/react-router";
import { DownloadsPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/downloads")({ head:()=>seo("Downloads","Access verified school forms and planning documents.","/downloads"), component: Page });
function Page(){return <DownloadsPage/>}

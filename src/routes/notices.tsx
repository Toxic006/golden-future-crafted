import { createFileRoute } from "@tanstack/react-router";
import { NoticesPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/notices")({ head:()=>seo("Notices","Read verified school notices and updates from Golden Future International School.","/notices"), component: Page });
function Page(){return <NoticesPage/>}

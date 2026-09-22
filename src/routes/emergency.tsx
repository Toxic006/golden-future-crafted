import { createFileRoute } from "@tanstack/react-router";
import { EmergencyPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/emergency")({ head:()=>seo("Emergency Contacts","Find important public and school emergency contact numbers.","/emergency"), component: Page });
function Page(){return <EmergencyPage/>}

import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/contact")({ head:()=>seo("Contact Us","Contact Golden Future International School in Patiyali, Kasganj for admissions and school enquiries.","/contact"), component: Page });
function Page(){return <ContactPage/>}

import { createFileRoute } from "@tanstack/react-router";
import { FacilitiesPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/facilities")({ head:()=>seo("School Facilities","Explore laboratories, sports, transport, health and learning facilities at Golden Future International School.","/facilities"), component: Page });
function Page(){return <FacilitiesPage/>}

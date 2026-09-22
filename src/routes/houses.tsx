import { createFileRoute } from "@tanstack/react-router";
import { HousesPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/houses")({ head:()=>seo("School Houses","Discover Ganga, Yamuna, Saraswati and Godavari houses at Golden Future International School.","/houses"), component: Page });
function Page(){return <HousesPage/>}

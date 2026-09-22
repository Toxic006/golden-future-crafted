import { createFileRoute } from "@tanstack/react-router";
import { AcademicsPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/academics")({ head:()=>seo("Academics","Explore the CBSE-aligned academic programme from Nursery to Class 12 at Golden Future International School.","/academics"), component: Page });
function Page(){return <AcademicsPage/>}

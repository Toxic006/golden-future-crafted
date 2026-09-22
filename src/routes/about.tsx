import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/about")({ head:()=>seo("About Our School","Discover Golden Future International School’s vision, values, learning approach and leadership.","/about"), component: Page });
function Page(){return <AboutPage/>}

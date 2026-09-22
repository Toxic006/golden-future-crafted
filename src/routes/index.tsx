import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/")({ head:()=>seo("Home","A welcoming CBSE school in Patiyali, Kasganj, nurturing confident learners from Nursery to Class 12.","/"), component: Page });
function Page(){return <HomePage/>}

import { createFileRoute } from "@tanstack/react-router";
import { TimingsPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/timings")({ head:()=>seo("School Timings","View summer and winter timings for Golden Future International School.","/timings"), component: Page });
function Page(){return <TimingsPage/>}

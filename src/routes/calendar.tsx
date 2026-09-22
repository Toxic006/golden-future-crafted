import { createFileRoute } from "@tanstack/react-router";
import { CalendarPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/calendar")({ head:()=>seo("Academic Calendar","View the tentative Session 2026–27 academic calendar.","/calendar"), component: Page });
function Page(){return <CalendarPage/>}

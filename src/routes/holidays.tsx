import { createFileRoute } from "@tanstack/react-router";
import { HolidaysPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/holidays")({ head:()=>seo("Holiday Calendar","View the 2026 holiday calendar for Golden Future International School.","/holidays"), component: Page });
function Page(){return <HolidaysPage/>}

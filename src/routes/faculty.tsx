import { createFileRoute } from "@tanstack/react-router";
import { FacultyPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/faculty")({ head:()=>seo("Faculty & Staff","Meet the dedicated faculty and staff of Golden Future International School.","/faculty"), component: Page });
function Page(){return <FacultyPage/>}

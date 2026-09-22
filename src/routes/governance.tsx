import { createFileRoute } from "@tanstack/react-router";
import { GovernancePage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/governance")({ head:()=>seo("School Governance","Learn about governance and the School Management Committee structure.","/governance"), component: Page });
function Page(){return <GovernancePage/>}

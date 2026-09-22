import { createFileRoute } from "@tanstack/react-router";
import { AdmissionsPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/admissions")({ head:()=>seo("Admissions 2026–27","Admission information and enquiry for Nursery to Class 12 at Golden Future International School.","/admissions"), component: Page });
function Page(){return <AdmissionsPage/>}

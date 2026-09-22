import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/gallery")({ head:()=>seo("School Gallery","View authentic moments from school life, learning, sports and activities at Golden Future International School.","/gallery"), component: Page });
function Page(){return <GalleryPage/>}

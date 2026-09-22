import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages";
import { seo } from "@/components/site";
export const Route = createFileRoute("/activities")({ head:()=>seo("Student Activities","Explore sports, yoga, safety, wellness and co-curricular activities at Golden Future International School.","/activities"), component: Page });
function Page(){return <GalleryPage activity/>}

import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/components/site";
export const Route=createFileRoute("/$")({head:()=>seo("Page not found","The requested page could not be found.","/"),component:NotFound});
function NotFound(){return <section className="section-pad"><div className="mx-auto max-w-xl py-24 text-center"><p className="eyebrow">404</p><h1 className="mt-3 font-display text-5xl font-bold text-brand">Page not found</h1><p className="mt-5 text-muted-foreground">The page you requested may have moved or is no longer available.</p><Link to="/" className="btn-primary mt-8">Return home</Link></div></section>}

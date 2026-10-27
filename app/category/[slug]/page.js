import { notFound } from "next/navigation";
import { categories, catBySlug } from "../../../lib/categories";
import { products } from "../../../lib/products";
import Listing from "../../components/Listing";
import CatIcons from "../../components/CatIcons";
export const generateStaticParams = () => categories.map(c => ({ slug: c.slug }));
export async function generateMetadata({ params }) { const c = catBySlug((await params).slug); return c ? { title: c.name, description: c.blurb } : {}; }
export default async function Cat({ params }) {
  const c = catBySlug((await params).slug); if (!c) notFound();
  return (<div><CatIcons/><h1 className="pt">{c.icon} {c.name}</h1><p className="sub">{c.blurb}</p><Listing items={products.filter(p => p.cat === c.slug)}/></div>);
}

import Link from "next/link";
import { categories } from "../../lib/categories";
import { products } from "../../lib/products";
export const metadata = { title: "All categories" };
export default function Cats() {
  return (<div><h1 className="pt">Categories</h1><div className="catlist">{categories.map(c => { const n = products.filter(p => p.cat === c.slug); return (
    <Link key={c.slug} href={`/category/${c.slug}`} className="catrow"><span className="ci">{c.icon}</span><span className="grow"><b>{c.name}</b><small>{c.blurb}</small></span><span className="cnt">{n.length} ›</span></Link>); })}</div></div>);
}

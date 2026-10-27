"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../lib/products";
import { categories } from "../../lib/categories";
import Listing from "../components/Listing";
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export default function Results() {
  const sp = useSearchParams(); const q = (sp.get("q") || "").trim(); const max = sp.get("max") || "";
  const terms = norm(q).split(/\s+/).filter(Boolean).map(t => t.replace(/(es|s)$/, ""));
  const items = products.filter(p => { const hay = norm([p.name, p.blurb, p.cat, ...(p.tags || []), categories.find(c => c.slug === p.cat)?.name || ""].join(" ")); return terms.every(t => hay.includes(t)); });
  return (<div><h1 className="pt">{q ? <>Results for “{q}”</> : max ? `Under $${max}` : "Search"}</h1>
    {!q && !max && <><p className="sub">Popular searches</p><div className="chips">{["lashes","faja","bonnet","bag","earrings","power bank","waist trainer","kitchen"].map(t => <Link key={t} href={`/search?q=${encodeURIComponent(t)}`}>{t}</Link>)}</div></>}
    {(q || max) && (items.length ? <Listing key={q + max} items={items} initialMax={max}/> : <div className="empty"><p>No products found for “{q}”.</p><Link className="btn" href="/categories">Browse categories</Link></div>)}</div>);
}

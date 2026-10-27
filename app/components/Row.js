import Link from "next/link";
import ProductCard from "./ProductCard";
export default function Row({ title, href, items, tone }) {
  if (!items.length) return null;
  return (<section className={`rowsec ${tone || ""}`}><div className="rowhd"><h2>{title}</h2>{href && <Link href={href}>See all ›</Link>}</div>
    <div className="hscroll">{items.map(p => <div className="hs-item" key={p.id}><ProductCard p={p}/></div>)}</div></section>);
}

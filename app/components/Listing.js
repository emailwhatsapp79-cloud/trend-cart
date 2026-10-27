"use client";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
export default function Listing({ items, initialMax }) {
  const [sort, setSort] = useState("featured"); const [max, setMax] = useState(initialMax || "");
  const list = useMemo(() => { let a = items.filter(p => !max || p.price <= Number(max));
    if (sort === "low") a = [...a].sort((x, y) => x.price - y.price); if (sort === "high") a = [...a].sort((x, y) => y.price - x.price); if (sort === "az") a = [...a].sort((x, y) => x.name.localeCompare(y.name)); return a; }, [items, sort, max]);
  return (<><div className="filters">
    <select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort"><option value="featured">Sort: Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="az">Name: A–Z</option></select>
    <select value={max} onChange={e => setMax(e.target.value)} aria-label="Max price"><option value="">Any price</option><option value="15">Under $15</option><option value="25">Under $25</option><option value="40">Under $40</option></select>
  </div><p className="count">{list.length} item{list.length === 1 ? "" : "s"}</p>
  {list.length ? <div className="grid">{list.map(p => <ProductCard key={p.id} p={p}/>)}</div> : <p className="empty">No products match. Try another filter.</p>}</>);
}

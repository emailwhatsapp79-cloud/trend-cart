"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { byId } from "../../lib/products";
const K = "tc_recent";
export function TrackView({ id }) { useEffect(() => { try { const a = (JSON.parse(localStorage.getItem(K)) || []).filter(x => x !== id); a.unshift(id); localStorage.setItem(K, JSON.stringify(a.slice(0, 12))); } catch {} }, [id]); return null; }
export default function Recent({ exclude }) {
  const [ids, set] = useState([]); useEffect(() => { try { set(JSON.parse(localStorage.getItem(K)) || []); } catch {} }, []);
  const items = ids.filter(i => i !== exclude).map(byId).filter(Boolean).slice(0, 10);
  if (!items.length) return null;
  return (<section className="rowsec"><div className="rowhd"><h2>Recently viewed</h2></div><div className="hscroll">{items.map(p => <div className="hs-item" key={p.id}><ProductCard p={p}/></div>)}</div></section>);
}

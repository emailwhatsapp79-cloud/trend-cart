"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCart, setCart } from "../../lib/cart";
import { byId, usd, ngn } from "../../lib/products";
export default function Cart() {
  const [c, sc] = useState([]); useEffect(() => sc(getCart()), []);
  const upd = (i, q) => { const n = [...c]; if (q < 1) n.splice(i, 1); else n[i] = { ...n[i], qty: q }; sc(n); setCart(n); };
  const items = c.filter(i => byId(i.id)); const total = items.reduce((a, i) => a + byId(i.id).price * i.qty, 0);
  return (<div><h1>Your cart</h1>{items.length === 0 ? <p>Your cart is empty. <Link href="/">Shop trending →</Link></p> : <>
    {items.map((i, k) => { const p = byId(i.id); return <div className="row" key={k}><div><b>{p.name}</b><div className="ngn">{i.size} · {usd(p.price)}</div></div>
      <div style={{display:"flex",gap:8,alignItems:"center"}}><button onClick={() => upd(k, i.qty - 1)}>−</button>{i.qty}<button onClick={() => upd(k, i.qty + 1)}>+</button></div></div>; })}
    <div className="row"><b>Total (free shipping)</b><b>{usd(total)} <span className="ngn">≈ {ngn(total)}</span></b></div>
    <p><Link className="btn full" href="/checkout">Checkout</Link></p></>}</div>);
}

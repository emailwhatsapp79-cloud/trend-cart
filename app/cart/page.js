"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCart, setCart } from "../../lib/cart";
import { byId, usd, ngn } from "../../lib/products";
export default function Cart() {
  const [c, sc] = useState([]); useEffect(() => sc(getCart()), []);
  const upd = (i, q) => { const n = [...c]; if (q < 1) n.splice(i, 1); else n[i] = { ...n[i], qty: q }; sc(n); setCart(n); };
  const items = c.filter(i => byId(i.id)); const total = items.reduce((a, i) => a + byId(i.id).price * i.qty, 0);
  return (<div className="narrow"><h1>Your cart</h1>{items.length === 0 ? <div className="empty"><p>Your cart is empty.</p><Link className="btn" href="/">Start shopping</Link></div> : <>
    {items.map((i, k) => { const p = byId(i.id); return <div className="citem" key={k}>
      <Image src={p.images[0]} alt={p.name} width={72} height={72}/>
      <div className="grow"><b>{p.name}</b><div className="ngn">{i.size} · {usd(p.price)}</div></div>
      <div className="qty"><button aria-label="Decrease" onClick={() => upd(k, i.qty - 1)}>−</button><span>{i.qty}</span><button aria-label="Increase" onClick={() => upd(k, i.qty + 1)}>+</button></div></div>; })}
    <div className="row"><span>Shipping</span><b>Free</b></div>
    <div className="row"><b>Total</b><b>{usd(total)} <span className="ngn">≈ {ngn(total)}</span></b></div>
    <p><Link className="btn full" href="/checkout">Checkout securely</Link></p></>}</div>);
}

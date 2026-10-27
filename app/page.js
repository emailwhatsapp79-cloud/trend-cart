import Link from "next/link";
import Image from "next/image";
import { products, usd, ngn } from "../lib/products";
import Trust from "./Trust";
export default function Home() {
  const cats = [...new Set(products.map(p => p.tag))];
  return (<>
    <section className="hero">
      <div className="hero-t"><span className="eyebrow">New season edit</span>
        <h1>Snatched, charged &amp; styled.</h1>
        <p>Trending shapewear, gadgets and jewellery, with free worldwide shipping including Nigeria.</p>
        <Link href="#shop" className="btn">Shop the edit</Link></div>
      <div className="hero-i"><Image src="/products/tummy-faja-1.webp" alt="Colombian-style tummy faja" width={600} height={600} priority sizes="(max-width:760px) 60vw, 400px"/></div>
    </section>
    <Trust/>
    <div className="cats">{cats.map(c => <a key={c} href={`#${c}`}>{c}</a>)}</div>
    <section id="shop">{cats.map(c => (<div key={c} id={c}><h2 className="sec">{c}</h2>
      <div className="grid">{products.filter(p => p.tag === c).map(p => (
        <Link key={p.id} href={`/product/${p.id}`} className="card">
          <div className="ph"><Image src={p.images[0]} alt={p.name} fill sizes="(max-width:600px) 50vw, 260px"/><span className="chip">Free shipping</span></div>
          <div className="t"><h3>{p.name}</h3><div className="price">{usd(p.price)}</div><div className="ngn">≈ {ngn(p.price)}</div></div></Link>))}
      </div></div>))}</section>
    <div className="note">📦 Orders ship directly from our fulfilment partners. Typical delivery is 7–15 business days worldwide (13–16 days to Nigeria). Import duties may apply in some countries. <Link href="/policies/shipping">Shipping details</Link></div>
  </>);
}

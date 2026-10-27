import Link from "next/link";
import { products, usd, ngn } from "../lib/products";
import Img from "./ProductImg";
export default function Home() {
  return (<>
    <section className="hero"><h1>What's trending, delivered.</h1><p>Hand-picked viral finds — shapewear, gadgets and accessories. Free worldwide shipping.</p></section>
    <div className="grid">{products.map(p => (
      <Link key={p.id} href={`/product/${p.id}`} className="card"><Img p={p}/>
        <div className="t"><h3>{p.name}</h3><div className="price">{usd(p.price)}</div><div className="ngn">≈ {ngn(p.price)}</div></div></Link>))}
    </div>
    <div className="note">📦 Orders ship directly from our fulfilment partners. Typical delivery: 7–15 business days international, 13–16 days to Nigeria. Import duties may apply in some countries. <Link href="/policies/shipping">Details</Link></div>
  </>);
}

import Link from "next/link";
import Image from "next/image";
import { usd, ngn } from "../../lib/products";
export default function ProductCard({ p }) {
  return (<Link href={`/product/${p.id}`} className="card">
    <div className="ph"><Image src={p.images[0]} alt={p.name} fill sizes="(max-width:600px) 46vw, 220px"/></div>
    <div className="t"><h3>{p.name}</h3><div className="price">{usd(p.price)}</div><div className="ngn">≈ {ngn(p.price)}</div><div className="fs">Free shipping</div></div></Link>);
}

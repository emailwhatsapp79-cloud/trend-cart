import { notFound } from "next/navigation";
import { products, byId, usd, ngn } from "../../../lib/products";
import Img from "../../ProductImg";
import Add from "./Add";
export const generateStaticParams = () => products.map(p => ({ id: p.id }));
export default async function P({ params }) {
  const { id } = await params; const p = byId(id); if (!p) notFound();
  return (<div className="pd" style={{marginTop:16}}>
    <div style={{borderRadius:16,overflow:"hidden"}}><Img p={p} big/></div>
    <div><h1 style={{margin:"0 0 6px"}}>{p.name}</h1>
      <div className="price" style={{fontSize:24}}>{usd(p.price)} <span className="ngn">≈ {ngn(p.price)}</span></div>
      <p>{p.blurb}</p><Add id={p.id} sizes={p.sizes}/>
      <ul>{p.details.map(d => <li key={d}>{d}</li>)}</ul>
      <div className="note">🚚 Free shipping. Approx. 7–15 business days international, 13–16 days to Nigeria.{p.sizes.length ? " Sizes run small on many shapewear items — if between sizes, size up." : ""}</div>
    </div></div>);
}

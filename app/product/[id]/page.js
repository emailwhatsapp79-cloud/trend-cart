import { notFound } from "next/navigation";
import Link from "next/link";
import { products, byId, usd, ngn, CONTACT_EMAIL } from "../../../lib/products";
import Add from "./Add";
import Gallery from "./Gallery";
import Trust from "../../Trust";
import Row from "../../components/Row";
import Recent, { TrackView } from "../../components/Recent";
import { catBySlug } from "../../../lib/categories";
export const generateStaticParams = () => products.map(p => ({ id: p.id }));
export async function generateMetadata({ params }) {
  const p = byId((await params).id); if (!p) return {};
  return { title: p.name, description: p.blurb, openGraph: { title: p.name + " | Trend Cart", description: p.blurb, images: [{ url: p.images[0] }] } };
}
const CHART = [["S","64–70 cm","88–94 cm","6–8"],["M","70–76 cm","94–100 cm","8–10"],["L","76–82 cm","100–106 cm","10–12"],["XL","82–88 cm","106–112 cm","12–14"],["2XL","88–94 cm","112–118 cm","14–16"],["3XL","94–100 cm","118–124 cm","16–18"]];
export default async function P({ params }) {
  const { id } = await params; const p = byId(id); if (!p) notFound();
  return (<div className="pd">
    <Gallery images={p.images} name={p.name}/>
    <div className="info"><TrackView id={p.id}/><Link href={`/category/${p.cat}`} className="eyebrow">{catBySlug(p.cat)?.name}</Link>
      <h1>{p.name}</h1>
      <div className="price big">{usd(p.price)} <span className="ngn">≈ {ngn(p.price)}</span></div>
      <p className="blurb">{p.blurb}</p>
      <Add id={p.id} sizes={p.sizes}/>
      <div className="ship">🚚 <span><b>Free shipping worldwide.</b> Estimated delivery is 7–15 business days (13–16 days to Nigeria). Tracking is emailed when your order ships.</span></div>
      <Trust/>
      <h3>Details</h3><ul className="det">{p.details.map(d => <li key={d}>{d}</li>)}</ul>
      {p.chart && <details className="chart" open><summary>Size guide</summary>
        <table><thead><tr><th>Size</th><th>Waist</th><th>Hips</th><th>UK/NG dress</th></tr></thead><tbody>{p.sizes.map(s => { const r = CHART.find(x => x[0] === s); return r && <tr key={s}>{r.map(c => <td key={c}>{c}</td>)}</tr>; })}</tbody></table>
        <p className="ngn">This is a general guide; sizes can vary slightly by batch. Shapewear fits snugly, so if you're between sizes, choose the larger size.</p></details>}
      <p className="ask">Questions about this item? <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Question: " + p.name)}`}>Email us</a></p>
    </div>
    <div className="full-row"><Row title="You may also like" href={`/category/${p.cat}`} items={products.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 10)}/><Recent exclude={p.id}/></div></div>);
}

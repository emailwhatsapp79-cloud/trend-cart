import Link from "next/link";
import { categories } from "../../lib/categories";
export default function CatIcons() {
  return (<div className="caticons">{categories.map(c => <Link key={c.slug} href={`/category/${c.slug}`}><span className="ci">{c.icon}</span><span className="cl">{c.name}</span></Link>)}</div>);
}

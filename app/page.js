import { products, byId } from "../lib/products";
import { categories } from "../lib/categories";
import Carousel from "./components/Carousel";
import CatIcons from "./components/CatIcons";
import Row from "./components/Row";
import Recent from "./components/Recent";
import Trust from "./Trust";
const slides = [
  { eyebrow:"Shapewear", title:"Snatched waist, smooth lines", text:"Fajas, bodysuits and waist trainers", cta:"Shop shapewear", href:"/category/shapewear", img:"/products/tummy-faja-1.webp", bg:"linear-gradient(135deg,#ffd9e6,#ffeef3)" },
  { eyebrow:"Beauty", title:"Lashes, hair & glow tools", text:"Everyday beauty finds", cta:"Shop beauty", href:"/category/beauty", img:null, bg:"linear-gradient(135deg,#fde6c8,#fff4e3)" },
  { eyebrow:"Free worldwide shipping", title:"Gadgets for everyday life", text:"Power banks, holders, cables & more", cta:"Shop gadgets", href:"/category/phone-gadgets", img:"/products/magnetic-powerbank-1.webp", bg:"linear-gradient(135deg,#d9ecff,#eef6ff)" },
];
const firstImg = slug => products.find(p => p.cat === slug)?.images[0];
export default function Home() {
  const sl = slides.map(s => ({ ...s, img: s.img || firstImg("beauty") || "/products/jewelry-set-1.webp" }));
  const trending = products.filter(p => p.trending);
  const under15 = products.filter(p => p.price < 15).sort((a, b) => a.price - b.price);
  return (<>
    <Carousel slides={sl}/>
    <CatIcons/>
    <Trust/>
    <Row title="🔥 Trending now" items={trending} tone="hot"/>
    <Row title="Under $15" href="/search?max=15" items={under15} tone="deal"/>
    <Recent/>
    {categories.map(c => <Row key={c.slug} title={c.name} href={`/category/${c.slug}`} items={products.filter(p => p.cat === c.slug)}/>)}
    <div className="note">📦 Orders ship directly from our fulfilment partners. Typical delivery is 7–15 business days worldwide (13–16 days to Nigeria). Import duties may apply in some countries.</div>
  </>);
}

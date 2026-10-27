import "./globals.css";
import Link from "next/link";
import CartCount from "./CartCount";
export const metadata = { title: "Trend Cart — trending finds, shipped worldwide", description: "Trending shapewear, gadgets and accessories shipped worldwide." };
export default function L({ children }) {
  return (<html lang="en"><body>
    <div className="bar">Free shipping worldwide · Delivery approx. 7–15 days international, 13–16 days to Nigeria</div>
    <header><div className="wrap"><Link href="/" className="logo">Trend<span>Cart</span></Link><Link href="/cart" style={{textDecoration:"none"}}>🛒 Cart <CartCount/></Link></div></header>
    <main className="wrap">{children}</main>
    <footer><div className="wrap"><p><Link href="/policies/shipping">Shipping</Link><Link href="/policies/refunds">Refunds</Link><Link href="/policies/contact">Contact</Link></p><p>© {new Date().getFullYear()} Trend Cart</p></div></footer>
  </body></html>);
}

import "./globals.css";
import Link from "next/link";
import CartCount from "./CartCount";
import Logo from "./Logo";
import { CONTACT_EMAIL } from "../lib/products";
const SITE = "https://trend-cart-ruby.vercel.app";
export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Trend Cart | Trending shapewear, gadgets & accessories", template: "%s | Trend Cart" },
  description: "Shop trending shapewear, gadgets and jewellery with free worldwide shipping and secure Paystack checkout.",
  openGraph: { type: "website", siteName: "Trend Cart", url: SITE, title: "Trend Cart | Trending finds, shipped worldwide", description: "Shapewear, gadgets and jewellery with free worldwide shipping.", images: [{ url: "/products/tummy-faja-1.webp" }] },
  twitter: { card: "summary_large_image" },
};
export const viewport = { themeColor: "#C2185B", width: "device-width", initialScale: 1 };
export default function L({ children }) {
  return (<html lang="en"><body>
    <div className="bar">Free worldwide shipping · Secure checkout with Paystack</div>
    <header><div className="wrap hd"><Link href="/" aria-label="Trend Cart home"><Logo/></Link>
      <nav><Link href="/#shop">Shop</Link><Link href="/cart" className="cartlink" aria-label="Cart">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg><CartCount/></Link></nav></div></header>
    <main className="wrap">{children}</main>
    <footer><div className="wrap ft">
      <div><Logo/><p>Trending finds, shipped from our fulfilment partners straight to your door.</p></div>
      <div><h4>Help</h4><Link href="/policies/shipping">Shipping</Link><Link href="/policies/refunds">Returns &amp; refunds</Link><Link href="/policies/contact">Contact us</Link></div>
      <div><h4>Contact</h4><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><span>Secure payments by Paystack</span></div>
    </div><div className="wrap copy">© {new Date().getFullYear()} Trend Cart</div></footer>
  </body></html>);
}

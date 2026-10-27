"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartCount from "../CartCount";
const P = { home:"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z", cat:"M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z", search:"M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5", cart:"M3 3h2l2.4 12.2a2 2 0 0 0 2 1.8h8.2a2 2 0 0 0 2-1.6L21 8H6M9 21h.01M18 21h.01" };
const items = [["/", "Home", P.home], ["/categories", "Categories", P.cat], ["/search", "Search", P.search], ["/cart", "Cart", P.cart]];
export default function BottomNav() {
  const path = usePathname();
  return (<nav className="bnav">{items.map(([h, l, d]) => { const on = h === "/" ? path === "/" : path.startsWith(h) || (h === "/categories" && path.startsWith("/category"));
    return <Link key={h} href={h} className={on ? "on" : ""}><span className="bi"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>{h === "/cart" && <CartCount/>}</span>{l}</Link>; })}</nav>);
}

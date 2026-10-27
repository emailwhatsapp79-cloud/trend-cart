"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
function Bar() {
  const r = useRouter(); const sp = useSearchParams(); const [q, setQ] = useState(sp.get("q") || "");
  return (<form className="sbar" role="search" onSubmit={e => { e.preventDefault(); r.push("/search?q=" + encodeURIComponent(q.trim())); }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></svg>
    <input type="search" name="q" value={q} onChange={e => setQ(e.target.value)} placeholder="Search lashes, fajas, bags…" aria-label="Search products" enterKeyHint="search"/>
    <button type="submit">Search</button></form>);
}
export default function SearchBar() { return <Suspense fallback={<div className="sbar"/>}><Bar/></Suspense>; }

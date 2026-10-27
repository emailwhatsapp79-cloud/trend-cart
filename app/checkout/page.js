"use client";
import { useEffect, useState } from "react";
import { getCart } from "../../lib/cart";
import { byId, usd, ngn } from "../../lib/products";
const COUNTRIES = ["Nigeria","United States","United Kingdom","Canada","Ghana","South Africa","Kenya","Germany","France","Australia","United Arab Emirates","Other"];
export default function Checkout() {
  const [cfg, setCfg] = useState(null); const [cart, sc] = useState([]); const [msg, setMsg] = useState(""); const [busy, setBusy] = useState(false);
  const [f, sf] = useState({ name:"", email:"", phone:"", address1:"", address2:"", city:"", state:"", postcode:"", country:"Nigeria" });
  useEffect(() => { sc(getCart().filter(i => byId(i.id))); fetch("/api/config").then(r => r.json()).then(setCfg); }, []);
  const total = cart.reduce((a, i) => a + byId(i.id).price * i.qty, 0);
  const set = k => e => sf({ ...f, [k]: e.target.value });
  async function pay(e) {
    e.preventDefault(); setMsg("");
    if (!cfg?.paymentsEnabled) { setMsg("soon"); return; }
    setBusy(true);
    const r = await fetch("/api/orders", { method:"POST", headers:{"content-type":"application/json"}, body: JSON.stringify({ customer: f, items: cart }) });
    const o = await r.json(); if (!r.ok) { setBusy(false); setMsg(o.error || "Something went wrong"); return; }
    await new Promise((res, rej) => { if (window.PaystackPop) return res(); const s = document.createElement("script"); s.src = "https://js.paystack.co/v2/inline.js"; s.onload = res; s.onerror = rej; document.body.appendChild(s); });
    const pop = new window.PaystackPop();
    pop.newTransaction({ key: o.publicKey, email: f.email, amount: o.amount, currency: o.currency, reference: o.reference,
      onSuccess: () => { localStorage.removeItem("tc_cart"); location.href = "/order/" + o.reference; },
      onCancel: () => { setBusy(false); setMsg("Payment cancelled — your cart is still saved."); } });
  }
  if (!cart.length) return <p>Your cart is empty.</p>;
  return (<form onSubmit={pay}><h1>Checkout</h1>
    {cfg && !cfg.paymentsEnabled && <div className="soon">💳 <b>Payments coming soon.</b> We're finishing our secure Paystack checkout. You can fill in your details, but orders can't be paid just yet.</div>}
    <label>Full name</label><input required value={f.name} onChange={set("name")} autoComplete="name"/>
    <div className="two"><div><label>Email</label><input required type="email" value={f.email} onChange={set("email")} autoComplete="email"/></div>
      <div><label>Phone</label><input required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel"/></div></div>
    <label>Country</label><select value={f.country} onChange={set("country")}>{COUNTRIES.map(c => <option key={c}>{c}</option>)}</select>
    <label>Address line 1</label><input required value={f.address1} onChange={set("address1")} autoComplete="address-line1"/>
    <label>Address line 2 (optional)</label><input value={f.address2} onChange={set("address2")} autoComplete="address-line2"/>
    <div className="two"><div><label>City</label><input required value={f.city} onChange={set("city")}/></div><div><label>State / Region</label><input required value={f.state} onChange={set("state")}/></div></div>
    <label>Postal code</label><input value={f.postcode} onChange={set("postcode")} autoComplete="postal-code"/>
    <div className="note">Delivery approx. {f.country === "Nigeria" ? "13–16 days to Nigeria" : "7–15 business days"}. Import duties/taxes, if any, are set by your country.</div>
    {cart.map((i, k) => <div className="row" key={k}><span>{byId(i.id).name} ({i.size}) × {i.qty}</span><span>{usd(byId(i.id).price * i.qty)}</span></div>)}
    <div className="row"><b>Total</b><b>{usd(total)} <span className="ngn">≈ {ngn(total)}</span></b></div>
    {msg === "soon" ? <div className="soon" id="soon">✅ Details look good — but <b>payments are coming soon</b>. Please check back shortly to complete your order.</div> : msg && <p style={{color:"crimson"}}>{msg}</p>}
    <button className="btn full" disabled={busy || !cfg}>{cfg && !cfg.paymentsEnabled ? "Continue (payments coming soon)" : busy ? "Opening payment…" : "Pay securely with Paystack"}</button>
  </form>);
}

"use client";
import { useEffect, useState, use } from "react";
export default function O({ params }) {
  const { ref } = use(params); const [s, ss] = useState(null);
  useEffect(() => { fetch("/api/verify?reference=" + encodeURIComponent(ref)).then(r => r.json()).then(ss); }, [ref]);
  if (!s) return <p>Confirming your payment…</p>;
  return s.status === "paid" ? <div><h1>🎉 Order confirmed!</h1><p>Thank you{ s.name ? ", " + s.name : ""}. Your order reference is <b>{ref}</b>. A confirmation will be sent to {s.email}.</p>
    <div className="note">Your items ship from our fulfilment partner. Delivery approx. 7–15 business days international, 13–16 days to Nigeria. Keep your reference for any questions.</div></div>
  : <div><h1>Payment not confirmed</h1><p>We couldn't confirm payment for <b>{ref}</b> ({s.error || s.status}). If you were charged, contact us with this reference.</p></div>;
}

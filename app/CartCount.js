"use client";
import { useEffect, useState } from "react";
import { getCart } from "../lib/cart";
export default function C() { const [n, s] = useState(0);
  useEffect(() => { const u = () => s(getCart().reduce((a, i) => a + i.qty, 0)); u(); window.addEventListener("cart", u); return () => window.removeEventListener("cart", u); }, []);
  return n > 0 ? <span className="badge">{n}</span> : null; }

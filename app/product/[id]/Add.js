"use client";
import { useState } from "react";
import { addToCart } from "../../../lib/cart";
export default function Add({ id, sizes }) {
  const [s, setS] = useState(sizes[0] ? null : "One size"); const [ok, setOk] = useState(false);
  return (<div>{sizes.length > 0 && <><label>Size</label><div className="sizes">{sizes.map(z => <button key={z} className={s === z ? "on" : ""} onClick={() => setS(z)}>{z}</button>)}</div></>}
    <button className="btn full" disabled={!s} onClick={() => { addToCart(id, s); setOk(true); }}>{s ? "Add to cart" : "Select a size"}</button>
    {ok && <p>Added! <a href="/cart"><b>View cart →</b></a></p>}</div>);
}

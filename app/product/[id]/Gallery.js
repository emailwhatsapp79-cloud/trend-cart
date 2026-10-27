"use client";
import { useState } from "react";
import Image from "next/image";
export default function Gallery({ images, name }) {
  const [i, setI] = useState(0);
  return (<div className="gal">
    <div className="main"><Image src={images[i]} alt={name} fill priority sizes="(max-width:760px) 100vw, 520px"/></div>
    {images.length > 1 && <div className="thumbs">{images.map((s, k) => <button key={s} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}><Image src={s} alt="" width={72} height={72}/></button>)}</div>}
  </div>);
}

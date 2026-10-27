"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Carousel({ slides }) {
  const ref = useRef(null); const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => { const el = ref.current; if (!el) return; const n = (Math.round(el.scrollLeft / el.clientWidth) + 1) % slides.length; el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" }); }, 5000); return () => clearInterval(t); }, [slides.length]);
  return (<div className="car"><div className="car-track" ref={ref} onScroll={e => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}>
    {slides.map((s, k) => <Link key={k} href={s.href} className="slide" style={{ background: s.bg }}>
      <div className="slide-t"><span className="eyebrow">{s.eyebrow}</span><h2>{s.title}</h2><p>{s.text}</p><span className="btn sm">{s.cta}</span></div>
      <div className="slide-i"><Image src={s.img} alt="" fill sizes="45vw" priority={k === 0}/></div></Link>)}
  </div><div className="dots">{slides.map((_, k) => <span key={k} className={k === i ? "on" : ""}/>)}</div></div>);
}

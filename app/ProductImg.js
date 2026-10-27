export default function P({ p, big }) {
  return <div className="img" style={{ background: `linear-gradient(135deg, ${p.color}, #fff)`, color: p.accent, fontSize: big ? 96 : 52 }}>
    {p.emoji}<b style={{fontSize: big ? 20 : 13}}>{p.name}</b><small>illustration</small></div>;
}

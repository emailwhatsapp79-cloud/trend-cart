import { put, list } from "@vercel/blob";
const has = () => !!process.env.BLOB_READ_WRITE_TOKEN;
export async function saveOrder(o) {
  console.log("ORDER", JSON.stringify(o));
  if (!has()) return;
  await put(`orders/${o.reference}.json`, JSON.stringify(o), { access: "public", addRandomSuffix: false, allowOverwrite: true, contentType: "application/json" });
}
export async function getOrder(ref) {
  if (!has()) return null;
  const { blobs } = await list({ prefix: `orders/${ref}.json` });
  if (!blobs[0]) return null;
  const r = await fetch(blobs[0].url + "?t=" + Date.now(), { cache: "no-store" });
  return r.ok ? r.json() : null;
}
export async function allOrders() {
  if (!has()) return null;
  const out = []; let cursor;
  do { const r = await list({ prefix: "orders/", cursor }); cursor = r.cursor;
    for (const b of r.blobs) { const x = await fetch(b.url + "?t=" + Date.now(), { cache: "no-store" }); if (x.ok) out.push(await x.json()); }
  } while (cursor);
  return out.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
}

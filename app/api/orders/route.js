import { randomUUID } from "crypto";
import { byId } from "../../../lib/products";
import { saveOrder } from "../../../lib/store";
import { CURRENCY, toMinor } from "../../../lib/pay";
export async function POST(req) {
  if (!process.env.PAYSTACK_PUBLIC_KEY || !process.env.PAYSTACK_SECRET_KEY) return Response.json({ error: "Payments coming soon" }, { status: 503 });
  const { customer: c = {}, items = [] } = await req.json();
  for (const k of ["name","email","phone","address1","city","state","country"]) if (!String(c[k] || "").trim()) return Response.json({ error: "Missing " + k }, { status: 400 });
  const lines = items.filter(i => byId(i.id)).map(i => ({ id: i.id, name: byId(i.id).name, size: String(i.size).slice(0, 20), qty: Math.max(1, Math.min(20, i.qty | 0)), priceUsd: byId(i.id).price }));
  if (!lines.length) return Response.json({ error: "Cart is empty" }, { status: 400 });
  const totalUsd = Math.round(lines.reduce((a, l) => a + l.priceUsd * l.qty, 0) * 100) / 100;
  const reference = "TC-" + randomUUID().replace(/-/g, "").slice(0, 20);
  const order = { reference, status: "pending", createdAt: new Date().toISOString(), customer: c, lines, totalUsd, currency: CURRENCY, amountMinor: toMinor(totalUsd) };
  await saveOrder(order);
  return Response.json({ reference, amount: order.amountMinor, currency: CURRENCY, publicKey: process.env.PAYSTACK_PUBLIC_KEY });
}

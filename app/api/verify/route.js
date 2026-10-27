import { getOrder, saveOrder } from "../../../lib/store";
export const dynamic = "force-dynamic";
export async function GET(req) {
  const reference = new URL(req.url).searchParams.get("reference") || "";
  if (!/^TC-[a-f0-9]{20}$/.test(reference)) return Response.json({ status: "invalid", error: "Bad reference" }, { status: 400 });
  if (!process.env.PAYSTACK_SECRET_KEY) return Response.json({ status: "unavailable", error: "Payments coming soon" }, { status: 503 });
  const r = await fetch("https://api.paystack.co/transaction/verify/" + reference, { headers: { Authorization: "Bearer " + process.env.PAYSTACK_SECRET_KEY }, cache: "no-store" });
  const j = await r.json().catch(() => ({}));
  const d = j.data || {};
  const order = (await getOrder(reference)) || { reference, createdAt: new Date().toISOString(), note: "order record missing (no storage configured?)" };
  const ok = j.status && d.status === "success" && (!order.amountMinor || (d.amount === order.amountMinor && d.currency === order.currency));
  const updated = { ...order, status: ok ? "paid" : (d.status === "success" ? "amount_mismatch" : (d.status || "unverified")), paystack: { id: d.id, amount: d.amount, currency: d.currency, paidAt: d.paid_at, channel: d.channel, email: d.customer?.email }, verifiedAt: new Date().toISOString() };
  if (order.status !== "paid") await saveOrder(updated);
  return Response.json({ status: order.status === "paid" ? "paid" : updated.status, name: order.customer?.name, email: order.customer?.email || d.customer?.email });
}

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkPw, isAuthed, sessionToken } from "../../lib/auth";
import { allOrders } from "../../lib/store";
export const dynamic = "force-dynamic";
export const metadata = { robots: "noindex" };
async function login(fd) { "use server";
  if (checkPw(fd.get("pw"))) (await cookies()).set("tc_admin", sessionToken(), { httpOnly: true, secure: true, sameSite: "strict", maxAge: 86400 * 7, path: "/" });
  redirect("/admin"); }
async function logout() { "use server"; (await cookies()).delete("tc_admin"); redirect("/admin"); }
export default async function Admin() {
  if (!isAuthed((await cookies()).get("tc_admin")?.value)) return (<form action={login} style={{maxWidth:360}}><h1>Admin</h1><label>Password</label><input type="password" name="pw" required/><button className="btn full">Log in</button></form>);
  const orders = await allOrders();
  return (<div><h1>Orders</h1><form action={logout}><button>Log out</button></form>
    {orders === null ? <p>Order storage (Vercel Blob) isn't connected — orders are only in function logs.</p> : orders.length === 0 ? <p>No orders yet.</p> :
    <div style={{overflowX:"auto"}}><table><thead><tr><th>Date</th><th>Ref</th><th>Status</th><th>Customer</th><th>Ship to</th><th>Items</th><th>Total</th></tr></thead><tbody>
    {orders.map(o => <tr key={o.reference}><td>{o.createdAt?.slice(0,16).replace("T"," ")}</td><td>{o.reference}</td><td><b>{o.status}</b></td>
      <td>{o.customer?.name}<br/>{o.customer?.email}<br/>{o.customer?.phone}</td>
      <td>{[o.customer?.address1,o.customer?.address2,o.customer?.city,o.customer?.state,o.customer?.postcode,o.customer?.country].filter(Boolean).join(", ")}</td>
      <td>{o.lines?.map((l,i) => <div key={i}>{l.name} ({l.size}) ×{l.qty}</div>)}</td><td>${o.totalUsd} ({o.currency} {(o.amountMinor/100).toLocaleString()})</td></tr>)}
    </tbody></table></div>}</div>);
}

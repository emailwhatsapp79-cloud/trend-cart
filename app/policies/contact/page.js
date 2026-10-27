import { CONTACT_EMAIL } from "../../../lib/products";
export const metadata = { title: "Contact us" };
export default function C(){return <div className="narrow policy"><h1>Contact us</h1><div className="draft">Draft policy — store owner to review.</div>
<p>Questions about an order, sizing or a product? Email us and include your order reference (it starts with <b>TC-</b>) if you have one. We aim to reply within 1–2 business days.</p>
<p className="mail"><a className="btn" href={`mailto:${CONTACT_EMAIL}`}>Email {CONTACT_EMAIL}</a></p></div>}

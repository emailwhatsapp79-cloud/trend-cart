import { createHmac, timingSafeEqual } from "crypto";
const tok = () => createHmac("sha256", process.env.ADMIN_PASSWORD || "x").update("tc-admin").digest("hex");
export const sessionToken = tok;
export function checkPw(pw) { const a = Buffer.from(String(pw)), b = Buffer.from(process.env.ADMIN_PASSWORD || ""); return !!process.env.ADMIN_PASSWORD && a.length === b.length && timingSafeEqual(a, b); }
export function isAuthed(cookieVal) { return !!process.env.ADMIN_PASSWORD && cookieVal === tok(); }

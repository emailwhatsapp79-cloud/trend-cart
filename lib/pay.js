export const CURRENCY = process.env.PAYSTACK_CURRENCY || "NGN";
export const RATE = Number(process.env.NGN_RATE || 1550);
export const toMinor = usd => CURRENCY === "USD" ? Math.round(usd * 100) : Math.round(usd * RATE) * 100;

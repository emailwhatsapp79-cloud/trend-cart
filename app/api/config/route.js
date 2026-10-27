export const dynamic = "force-dynamic";
export function GET() { return Response.json({ paymentsEnabled: !!(process.env.PAYSTACK_PUBLIC_KEY && process.env.PAYSTACK_SECRET_KEY) }); }

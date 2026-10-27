const I = { lock:"M6 11V8a6 6 0 0 1 12 0v3M5 11h14v10H5z", truck:"M1 4h14v12H1zM15 9h4l4 4v3h-8zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", ret:"M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" };
const Ic = ({ d }) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>;
export default function Trust() {
  return (<div className="trust">
    <div><Ic d={I.lock}/><span><b>Secure checkout</b>Paid safely via Paystack</span></div>
    <div><Ic d={I.truck}/><span><b>Tracked shipping</b>Free, worldwide</span></div>
    <div><Ic d={I.ret}/><span><b>Easy returns</b>Damaged or wrong item? We fix it</span></div>
  </div>);
}

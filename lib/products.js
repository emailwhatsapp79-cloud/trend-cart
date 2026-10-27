// Prices in USD. NGN shown at a fixed display rate (NGN_RATE). Costs are supplier estimates.
export const NGN_RATE = 1550;
export const products = [
 { id:"seamless-bodysuit", name:"Seamless Sculpt Bodysuit", price:29.99, compareAt:null, color:"#f4c7c3", accent:"#8a3b3b", emoji:"✨",
   sizes:["S","M","L","XL","2XL"], blurb:"Smooth, seamless shaping bodysuit you can wear under anything.",
   details:["Seamless knit, no visible lines","Tummy & waist shaping","Breathable stretch fabric","Snap closure"] },
 { id:"tummy-faja", name:"Colombian-Style Tummy Faja", price:32.99, color:"#e8d5c4", accent:"#6b4a2b", emoji:"⏳",
   sizes:["S","M","L","XL","2XL","3XL"], blurb:"Firm-compression faja for an hourglass silhouette.",
   details:["High compression","Adjustable hook rows","Butt-lift cut","Pairs with the bodysuit"] },
 { id:"waist-trainer", name:"Waist Trainer Belt", price:27.99, color:"#d7e3f4", accent:"#2b4a6b", emoji:"🔥",
   sizes:["S","M","L","XL","2XL"], blurb:"Adjustable waist-cinching belt for workouts or under clothes.",
   details:["Velcro + hook adjustable","Flexible boning","Sweat-friendly lining"] },
 { id:"shaping-panties", name:"High-Waist Shaping Panties", price:19.99, color:"#e9d7f2", accent:"#5b2b6b", emoji:"💜",
   sizes:["S","M","L","XL","2XL"], blurb:"Everyday high-waist tummy control, soft and invisible.",
   details:["High-rise tummy panel","No-roll waistband","Soft breathable fabric"] },
 { id:"magnetic-powerbank", name:"10,000mAh Magnetic Power Bank + Stand", price:24.99, color:"#d9f0e3", accent:"#1f5a3a", emoji:"🔋",
   sizes:[], blurb:"Snap-on magnetic charging with a built-in kickstand. Great for power cuts and travel.",
   details:["10,000mAh capacity","Magnetic wireless + USB-C","Fold-out stand","Compact, pocket size"] },
 { id:"jewelry-set", name:"Necklace & Earrings Set", price:17.99, color:"#f6ecc9", accent:"#7a5a12", emoji:"💎",
   sizes:[], blurb:"Gold-tone necklace and matching earrings, gift-ready.",
   details:["Gold-tone finish","Necklace + pair of earrings","Gift-ready packaging (varies by supplier)"] },
];
export const byId = id => products.find(p => p.id === id);
export const ngn = usd => "₦" + Math.round(usd * NGN_RATE).toLocaleString("en-NG");
export const usd = n => "$" + n.toFixed(2);
export const SHIPPING_USD = 0; // free shipping, built into price

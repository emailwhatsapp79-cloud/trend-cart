// Prices in USD. NGN shown at a fixed display rate (NGN_RATE). Supplier listings: data/suppliers.json
export const NGN_RATE = 1550;
const im = (id, n) => Array.from({ length: n }, (_, i) => `/products/${id}-${i + 1}.webp`);
export const products = [
 { id:"seamless-bodysuit", name:"Seamless Sculpt Bodysuit", price:29.99, tag:"Shapewear", images:im("seamless-bodysuit",1),
   sizes:["S","M","L","XL","2XL"], chart:true, blurb:"A smooth, seamless shaping bodysuit you can wear under fitted dresses, jeans or on its own as a top.",
   details:["Seamless knit, no visible lines under clothes","Light tummy and waist shaping","Stretchy, breathable fabric","Colour options depend on supplier stock"] },
 { id:"tummy-faja", name:"Colombian-Style Tummy Faja", price:32.99, tag:"Shapewear", images:im("tummy-faja",3),
   sizes:["S","M","L","XL","2XL","3XL"], chart:true, blurb:"A firm-compression full-body faja that shapes the waist, smooths the tummy and lifts the bum. Popular for everyday wear and postpartum support.",
   details:["Firm compression","Front zip with hook-and-eye rows","Open-bust design, wear with your own bra","Butt-lifting cut"] },
 { id:"waist-trainer", name:"Latex Waist Trainer", price:27.99, tag:"Shapewear", images:im("waist-trainer",3),
   sizes:["S","M","L","XL","2XL"], chart:true, blurb:"An underbust waist cincher with flexible steel boning for an hourglass look under clothes or during workouts.",
   details:["Latex core with soft inner layer","Flexible steel bones","Zip plus hook-and-eye closure","Wear under clothes or at the gym"] },
 { id:"shaping-panties", name:"High-Waist Shaping Panties", price:19.99, tag:"Shapewear", images:im("shaping-panties",3),
   sizes:["S","M","L","XL","2XL"], chart:true, blurb:"Everyday high-waist tummy control that stays put. Smooths the tummy under tight dresses and skirts.",
   details:["High-rise tummy control panel","Anti-slip waistband","Soft, breathable fabric","Light bum-lifting shape"] },
 { id:"magnetic-powerbank", name:"10,000mAh Magnetic Power Bank", price:24.99, tag:"Gadgets", images:im("magnetic-powerbank",4),
   sizes:[], blurb:"A pocket-size power bank that snaps magnetically onto your phone for wireless charging. Handy for power cuts, travel and long days out.",
   details:["10,000mAh capacity","Magnetic wireless charging (MagSafe-style phones) plus 20W USB-C cable charging","Compact, travel friendly","Phones without magnets need a magnetic ring or case"] },
 { id:"jewelry-set", name:"Pearl & Gold-Tone Jewellery Set", price:17.99, tag:"Accessories", images:im("jewelry-set",4),
   sizes:[], blurb:"A 4-piece set of necklace, bracelet and earrings in gold tone with imitation pearls. Elegant for events and a ready-made gift.",
   details:["Necklace, bracelet and pair of earrings","Gold-tone finish with imitation pearls","Lightweight fashion jewellery","Great as a gift"] },
];
export const byId = id => products.find(p => p.id === id);
export const ngn = usd => "₦" + Math.round(usd * NGN_RATE).toLocaleString("en-NG");
export const usd = n => "$" + n.toFixed(2);
export const SHIPPING_USD = 0; // free shipping, built into price
export const CONTACT_EMAIL = "awamutata@gmail.com";

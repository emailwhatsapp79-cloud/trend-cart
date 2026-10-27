export const categories = [
  { slug:"shapewear", name:"Shapewear", icon:"⏳", blurb:"Fajas, bodysuits, waist trainers and shaping panties" },
  { slug:"womens-fashion", name:"Women's fashion", icon:"👗", blurb:"Dresses, loungewear and everyday pieces" },
  { slug:"beauty", name:"Beauty", icon:"💄", blurb:"Lashes, brushes, hair care and beauty tools" },
  { slug:"jewelry-accessories", name:"Jewelry & accessories", icon:"💎", blurb:"Jewellery sets, earrings, bags and hair accessories" },
  { slug:"phone-gadgets", name:"Phone & gadgets", icon:"📱", blurb:"Power banks, cables, holders and phone accessories" },
  { slug:"home-kitchen", name:"Home & kitchen", icon:"🏠", blurb:"Handy gadgets for kitchen and home" },
];
export const catBySlug = s => categories.find(c => c.slug === s);

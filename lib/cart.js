"use client";
const K = "tc_cart";
export const getCart = () => { try { return JSON.parse(localStorage.getItem(K)) || []; } catch { return []; } };
export const setCart = c => { localStorage.setItem(K, JSON.stringify(c)); window.dispatchEvent(new Event("cart")); };
export const addToCart = (id, size, qty = 1) => { const c = getCart(); const f = c.find(i => i.id === id && i.size === size); if (f) f.qty += qty; else c.push({ id, size, qty }); setCart(c); };

// Product photos are stored as base64 text in assets/images.txt ("<filename> <base64>" per line) and decoded to public/products at build time.
const fs = require("fs"), path = require("path");
const out = path.join(__dirname, "..", "public", "products");
fs.mkdirSync(out, { recursive: true });
for (const line of fs.readFileSync(path.join(__dirname, "..", "assets", "images.txt"), "utf8").split("\n")) {
  const [name, data] = line.trim().split(" "); if (name && data) fs.writeFileSync(path.join(out, name), Buffer.from(data, "base64"));
}
console.log("decoded images");

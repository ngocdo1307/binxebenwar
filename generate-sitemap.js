
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://binxebenwar.netlify.app";

// Đọc danh sách map hiện tại
const indexPath = path.join(__dirname, "data", "maps-index.json");
const maps = JSON.parse(fs.readFileSync(indexPath, "utf8"));

// Tạo danh sách URL
const urls = [
  `${SITE_URL}/`,
  `${SITE_URL}/cheats.html`,
  ...maps.map(map =>
    `${SITE_URL}/map.html?id=${encodeURIComponent(map.id)}`
  )
];

// Tạo nội dung sitemap XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
  </url>`).join("\n")}
</urlset>`;

// Ghi sitemap.xml tại thư mục gốc
fs.writeFileSync(
  path.join(__dirname, "sitemap.xml"),
  xml,
  "utf8"
);

console.log(`Sitemap đã tạo thành công: ${urls.length} URL`);

BINXEBEN - SEO BASIC
====================

SEO additions:
- index.html: title, meta description, canonical, Open Graph, Twitter Card, CollectionPage JSON-LD.
- map.html: default metadata and metadata generated from each map JSON record; canonical URL per map; CreativeWork JSON-LD.
- cheats.html: title, description, canonical and Open Graph.
- robots.txt: allows crawlers and declares sitemap.
- sitemap.xml: homepage, JJCHEATS page and all 63 map detail URLs.

Preserved:
- Original visual design and CSS.
- Existing JSON data format and fetch-based map detail loading.
- Search, pagination, map cards, downloads, video links and navigation.
- All 63 map records and their assets.

Ordering correction:
- The homepage list is sorted numerically by map ID in descending order:
  map-063, map-062, ... map-001.
- This replaces the old reverse() behavior, which caused the list to display
  map-050 ... map-001 followed by map-063 ... map-051.
- No map data is removed or modified.

After deployment:
1. Check /robots.txt and /sitemap.xml.
2. Add URL prefix https://binxebenwar.netlify.app/ in Google Search Console.
3. Submit https://binxebenwar.netlify.app/sitemap.xml.
4. Use URL Inspection to request indexing of the homepage and selected map pages.

Note: Google decides when and whether to index pages; sitemap submission does not guarantee immediate indexing.

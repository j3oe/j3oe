export default async function handler(req, res) {
  try {
    // Visit your GitHub profile page
    const targetUrl = "https://camo.githubusercontent.com/66601927b54aa5fe2504158f0f481cbac0e4e288f52ea4a87d29ee10cf09f0f5/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6a336f65";

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ReloaderBot/1.0)"
      }
    });

    if (!response.ok) {
      return res.status(response.status).send("Error fetching GitHub");
    }

    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", response.headers.get("content-type") || "text/html");
    res.setHeader("Cache-Control", "no-store");
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}

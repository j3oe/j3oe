export default async function handler(req, res) {
  try {
    // External URL you want to “visit” in background
    const targetUrl = "https://komarev.com/ghpvc/?username=j3oe";

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ReloaderBot/1.0)"
      }
    });

    if (!response.ok) {
      return res.status(response.status).send("Error fetching target");
    }

    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", response.headers.get("content-type") || "application/octet-stream");
    res.setHeader("Cache-Control", "no-store");
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}

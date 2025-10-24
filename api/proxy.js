export default async function handler(req, res) {
  try {
    // Visit your GitHub profile page
    const targetUrl = "https://e.rich/ff";

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

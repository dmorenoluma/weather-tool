export default async function handler(req, res) {
  try {
    const city = req.query.city || "Madrid";
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "OPENWEATHER_API_KEY missing" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const r = await fetch(url);
    const data = await r.json();

    // ⚠️ Manejar error de OpenWeather
    if (!data.main) {
      return res.status(500).json({ error: data.message || "OpenWeather API returned invalid data" });
    }

    res.status(200).json({
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

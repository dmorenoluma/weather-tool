export default async function handler(req, res) {
  const city = req.query.city || "Madrid";
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const r = await fetch(url);
  const data = await r.json();

  res.status(200).json({
    city: data.name,
    temp: data.main.temp,
    description: data.weather[0].description
  });
}

export default async function handler(req, res) {
  // Eventos de ejemplo
  const events = [
    { title: "Reunión con equipo", date: "2026-02-05T10:00:00Z" },
    { title: "Entrega de proyecto", date: "2026-02-06T15:00:00Z" }
  ];

  res.status(200).json(events);
}

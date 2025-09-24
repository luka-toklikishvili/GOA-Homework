import NewsCard from "./components/NewsCard";

export default function Tech() {
  const tech = [
    { title: "AI", description: "New AI model beats previous records." },
    { title: "SpaceX", description: "Rocket launch successful today." },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {tech.map((t, i) => (
        <NewsCard key={i} title={t.title} description={t.description} />
      ))}
    </div>
  );
}
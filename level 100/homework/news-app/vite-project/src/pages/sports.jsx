import NewsCard from "./components/NewsCard";

export default function Sports() {
  const sports = [
    { title: "Football", description: "Champions League results are here." },
    { title: "Basketball", description: "NBA season is heating up." },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {sports.map((s, i) => (
        <NewsCard key={i} title={s.title} description={s.description} />
      ))}
    </div>
  );
}
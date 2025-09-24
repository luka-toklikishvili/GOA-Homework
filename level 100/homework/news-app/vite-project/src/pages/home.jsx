import NewsCard from "./components/NewsCard";

export default function Home() {
  const news = [
    { title: "World News", description: "Biggest updates from around the globe." },
    { title: "Politics", description: "Latest political developments." },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {news.map((n, i) => (
        <NewsCard key={i} title={n.title} description={n.description} />
      ))}
    </div>
  );
}
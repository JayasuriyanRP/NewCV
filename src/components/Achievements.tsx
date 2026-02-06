import { useEffect, useState } from "react";

export type Achievement = { title: string; description: string };

export default function Achievements({
  url,
  data,
}: {
  url?: string | null;
  data?: Achievement[];
}) {
  const [achievements, setAchievements] = useState<Achievement[]>(data || []);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (url) {
      setLoading(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch achievements");
          return res.json();
        })
        .then((json) => {
          setAchievements(json);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [url]);

  if (loading) return <section>Loading achievements...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!achievements.length)
    return <section>No achievements data found.</section>;

  return (
    <section
      aria-labelledby="achievements-title"
      className="bg-[#f2f8e9] border-l-5 border-[#78ba15] p-4 rounded-lg mt-2.5 text-sm print:text-xs shadow-sm shadow-[#78ba15]"
    >
      <span className="font-semibold">Achievements:</span>
      <ul className="list-disc ml-6">
        {achievements.map((ach, idx) => (
          <li key={idx}>
            <span className="font-semibold">{ach.title}</span>
            {ach.description ? ` - ${ach.description}` : ""}
          </li>
        ))}
      </ul>
    </section>
  );
}

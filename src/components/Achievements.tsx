import { useEffect, useState } from "react";

export default function Achievements({
  url,
  data,
}: {
  url?: string | null;
  data?: string[];
}) {
  const [achievements, setAchievements] = useState<string[]>(data || []);
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
      className="bg-[#f2f8e9] border-l-5 border-[#78ba15] p-4 rounded-lg mt-2.5 text-[0.95em]"
    >
      <span className="font-semibold">Achievements:</span>
      <ul className="list-disc ml-6">
        {achievements.map((ach: string, idx: number) => (
          <li key={idx}>{ach}</li>
        ))}
      </ul>
    </section>
  );
}

import { useEffect, useState } from "react";

export default function Hobbies({ url }: { url: string }) {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch hobbies");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <section>Loading hobbies...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data.length) return <section>No hobbies data found.</section>;

  return (
    <section aria-labelledby="hobbies-title">
      <h2 id="hobbies-title">Hobbies & Interests</h2>
      <ul>
        {data.map((hobby: string, idx: number) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}

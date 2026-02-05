import { useEffect, useState } from "react";

export default function Basics({ url }: { url: string }) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch basics");
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

  if (loading) return <section>Loading basics...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data) return <section>No basics data found.</section>;

  return (
    <section aria-labelledby="name">
      <h1 id="name">{data.name}</h1>
      <p>{data.location}</p>
      <a href={`mailto:${data.email}`}>{data.email}</a>
      {/* Add more fields as needed */}
    </section>
  );
}

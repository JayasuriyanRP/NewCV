import { useEffect, useState } from "react";

export default function Certifications({ url }: { url: string }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch certifications");
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

  if (loading) return <section>Loading certifications...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data.length) return <section>No certifications data found.</section>;

  return (
    <section aria-labelledby="certifications-title" className="mb-4">
      <h2
        id="certifications-title"
        className="text-xl font-semibold border-b pb-1 mb-4"
      >
        Certifications
      </h2>
      <ul className="list-disc ml-6">
        {data.map((cert: any, idx: number) => (
          <li key={idx}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {cert.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

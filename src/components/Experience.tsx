import { useEffect, useState } from "react";

export default function Experience({ url }: { url: string }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch experience");
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

  if (loading) return <section>Loading experience...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data.length) return <section>No experience data found.</section>;
  return (
    <section aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      {data.map((job: any, idx: number) => (
        <div key={idx}>
          <h3>
            {job.company} ({job.startDate} - {job.endDate})
          </h3>
          <p>
            {job.title} - {job.location}
          </p>
          <ul>
            {job.responsibilities.map((r: string, i: number) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          {/* Render projects and achievements if present */}
        </div>
      ))}
    </section>
  );
}

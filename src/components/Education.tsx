import { useEffect, useState } from "react";

export default function Education({ url }: { url: string }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch education");
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

  if (loading) return <section>Loading education...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data.length) return <section>No education data found.</section>;

  return (
    <section aria-labelledby="education-title">
      <h2 id="education-title">Education</h2>
      {data.map((edu: any, idx: number) => (
        <div key={idx}>
          <h3>{edu.institution}</h3>
          <p>
            {edu.degree} ({edu.startDate} - {edu.endDate})
          </p>
          <p>
            {edu.location} | {edu.score}
          </p>
        </div>
      ))}
    </section>
  );
}

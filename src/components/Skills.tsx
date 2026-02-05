import { useEffect, useState } from "react";

export default function Skills({ url }: { url: string }) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
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

  if (loading) return <section>Loading skills...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data) return <section>No skills data found.</section>;

  return (
    <section aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      {Object.entries(data).map(([category, skills]) => {
        const skillList = Array.isArray(skills) ? skills : [];
        return (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {skillList.map((skill: any, idx: number) => (
                <li key={idx}>
                  {skill.name} {skill.years ? `- ${skill.years} yrs` : ""}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

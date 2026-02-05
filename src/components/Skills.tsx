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
    <section aria-labelledby="skills-title" className="mb-8">
      <h2
        id="skills-title"
        className="text-xl font-semibold border-b pb-1 mb-4 mt-8"
      >
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(data).map(([category, skills]) => {
          const skillList = Array.isArray(skills) ? skills : [];
          return (
            <div key={category}>
              <h3 className="text-lg font-bold mb-2">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillList.map((skill: any, idx: number) => (
                  <li
                    key={idx}
                    className="bg-gray-100 rounded px-2 py-1 text-sm"
                  >
                    {skill.name} {skill.years ? `- ${skill.years} yrs` : ""}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

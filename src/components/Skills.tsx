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
    <section aria-labelledby="skills-title" className="print:text-sm mb-2">
      <h2 id="skills-title" className="text-xl font-semibold border-b pb-1">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-2">
        {data &&
          Object.entries(data).map(([category, skills]) => {
            const skillList = Array.isArray(skills) ? skills : [];
            return (
              <div key={category}>
                <h3 className="text-lg print:text-sm font-bold mb-2">
                  {category}
                </h3>
                <ul className="list-disc ml-6">
                  {skillList.map((skill: any, idx: number) => (
                    <li key={idx} className="text-sm print:text-xs">
                      <span className="font-semibold">{skill.name}</span>
                      {skill.years ? (
                        <span className="text-gray-600">
                          {" "}
                          &ndash; {skill.years} yrs
                        </span>
                      ) : null}
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

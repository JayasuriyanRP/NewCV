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
    <section aria-labelledby="education-title" className="mb-8">
      <h2
        id="education-title"
        className="text-xl font-semibold border-b pb-1 mb-4 mt-8"
      >
        Education
      </h2>
      {data.map((edu: any, idx: number) => (
        <div key={idx} className="bg-white rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-bold">{edu.institution}</h3>
          <p className="text-base font-semibold mt-1">{edu.degree}</p>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>{edu.board}</span>
            <span>
              {edu.startDate} - {edu.endDate}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {edu.location} | {edu.score}
          </p>
        </div>
      ))}
    </section>
  );
}

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
    <section aria-labelledby="education-title" className="mb-6">
      <h2 id="education-title" className="text-xl font-semibold border-b pb-1">
        Education
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.map((edu: any, idx: number) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col"
          >
            <h3 className="text-base print:text-sm font-bold mb-1">
              {edu.institution}
            </h3>
            <p className="text-sm print:text-sm font-semibold mb-1">
              {edu.degree}
            </p>
            <div className="flex justify-between text-sm print:text-xs text-gray-500 mb-2">
              <span>{edu.board}</span>
              <span className="font-bold text-right text-xs ">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
            <p className="text-sm print:text-xs text-gray-500">
              {edu.location} | <span className="font-bold">{edu.score}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

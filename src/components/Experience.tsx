import { useEffect, useState } from "react";
import Projects from "./Projects";
import Achievements from "./Achievements";

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
    <section aria-labelledby="experience-title" className="mb-6">
      <h2
        id="experience-title"
        className="text-xl print:text-lg font-semibold border-b pb-1"
      >
        Experience
      </h2>
      {data.map((job: any, idx: number) => (
        <div
          key={idx}
          className="bg-white rounded-lg p-2 shadow-xl mb-4 print:text-sm"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 print:text-sm">
              {job.logo && (
                <img
                  src={job.logo}
                  alt={job.company + " logo"}
                  className="w-8 h-8"
                />
              )}
              <span className="text-lg print:text-base font-bold">
                {job.company}
              </span>
            </div>
            <span className="text-sm print:text-xs text-gray-500">
              {job.startDate} - {job.endDate}
            </span>
          </div>
          <div className="text-base print:text-sm font-semibold mt-1">
            {job.title}
          </div>
          <div className="text-sm print:text-xs text-gray-500 mb-2">
            {job.location}
          </div>
          <ul className="list-disc ml-6 mt-2 text-base print:text-sm">
            {job.responsibilities.map((r: string, i: number) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          {job.projects && job.projects.length > 0 && (
            <Projects url={null} data={job.projects} />
          )}
          {job.achievements && job.achievements.length > 0 && (
            <Achievements url={null} data={job.achievements} />
          )}
        </div>
      ))}
    </section>
  );
}

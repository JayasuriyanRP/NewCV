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
    <section aria-labelledby="experience-title" className="mb-4">
      <h2
        id="experience-title"
        className="text-xl font-semibold border-b pb-1 mb-4"
      >
        Experience
      </h2>
      {data.map((job: any, idx: number) => (
        <div key={idx} className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{job.company}</span>
            <span className="text-sm text-gray-500">
              {job.startDate} - {job.endDate}
            </span>
          </div>
          <div className="text-base font-semibold mt-1">{job.title}</div>
          <div className="text-sm text-gray-500 mb-2">{job.location}</div>
          <ul className="list-disc ml-6 mt-2 text-base">
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

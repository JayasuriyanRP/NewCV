import { useEffect, useState } from "react";

export default function Basics({ url }: { url: string }) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch basics");
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

  if (loading) return <section>Loading basics...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data) return <section>No basics data found.</section>;

  return (
    <section
      className="bg-white rounded-lg shadow p-6 mb-8"
      aria-labelledby="name"
    >
      <h1 id="name" className="text-3xl font-bold mb-2">
        {data.name}
      </h1>
      <p className="text-base text-gray-600 mb-1">{data.location}</p>
      <div className="flex flex-wrap gap-4 mb-2">
        <a href={`mailto:${data.email}`} className="text-blue-600 underline">
          {data.email}
        </a>
        <a
          href={data.github}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={data.linkedin}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="text-gray-600">{data.phone}</span>
      </div>
      <p className="mt-2 text-base text-gray-800">{data.summary}</p>
      {data.languages && (
        <div className="mt-2">
          <span className="font-semibold">Languages:</span>
          <ul className="inline-flex gap-2 ml-2">
            {data.languages.map((lang: any, idx: number) => (
              <li key={idx} className="bg-gray-100 rounded px-2 py-1 text-sm">
                {lang.name} ({lang.proficiency})
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

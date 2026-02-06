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
    <section className="bg-white rounded-lg p-4" aria-labelledby="name">
      <div className="flex items-center mb-4 gap-6">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt={data.name + " profile"}
            className="w-16 h-24 rounded-full shadow object-cover"
          />
        )}
        <div className="flex flex-col justify-center">
          <h1 id="name" className="text-4xl font-bold mb-2 text-left print:text-2xl">
            {data.name}
          </h1>
          <p className="text-base text-gray-600 mb-2 text-left print:text-sm">
            {data.location}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-2 justify-between items-center print:text-sm">
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-1 text-blue-600 underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
            />
          </svg>
          {data.email}
        </a>
        <a
          href={data.github}
          className="flex items-center gap-1 text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
          GitHub
        </a>
        <a
          href={data.linkedin}
          className="flex items-center gap-1 text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-700"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
          </svg>
          LinkedIn
        </a>
        <span className="flex items-center gap-1 text-gray-600">
          📞
          <a
            className="flex items-center gap-1 text-blue-600 underline"
            href={`tel:${data.phone}`}
          >
            {data.phone}
          </a>
        </span>
      </div>
      <p className="mt-2 text-base text-gray-800 print:text-sm">{data.summary}</p>
      {data.languages && (
        <div className="mt-2 print:text-xs">
          <span className="font-semibold">Languages:</span>
          <ul className="inline-flex gap-2 ml-2">
            {data.languages.map((lang: any, idx: number) => (
              <li key={idx} className="bg-gray-100 rounded px-2 py-1 text-sm print:text-xs">
                {lang.name} ({lang.proficiency})
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

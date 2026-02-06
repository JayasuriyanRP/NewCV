import { useEffect, useState } from "react";

type Hobby = {
  title: string;
  description: string;
};

export default function Hobbies({ url }: { url: string }) {
  const [data, setData] = useState<Hobby[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch hobbies");
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

  if (loading) return <section>Loading hobbies...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data.length) return <section>No hobbies data found.</section>;

  return (
    <section aria-labelledby="hobbies-title" className="print:text-sm">
      <h2 id="hobbies-title" className="text-xl font-semibold border-b p-2">
        Hobbies & Interests
      </h2>
      <ul className="p-2 grid grid-cols-2 sm:grid-cols-3">
        {data.map((hobby, idx) => (
          <li key={idx} className="p-1 shadow-lg">
            <span className="font-bold text-sm print:text-xs">
              {hobby.title}
            </span>
            <p className="text-xs print:text-xs">{hobby.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { useEffect, useState } from "react";
import ProjectSkills from "./ProjectSkills";

export default function Projects({
  url,
  data,
}: {
  url?: string | null;
  data?: any[];
}) {
  const [projects, setProjects] = useState<any[]>(data || []);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (url) {
      setLoading(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch projects");
          return res.json();
        })
        .then((json) => {
          setProjects(json);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [url]);

  if (loading) return <section>Loading projects...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!projects.length) return <section>No projects data found.</section>;

  return (
    <section
      aria-labelledby="projects-title"
      className="bg-[#eef6fc] border-l-4 border-[#007acc] my-3 py-3 px-3 rounded-md"
    >
      <span className="font-semibold">Projects:</span>
      <ul className="list-disc ml-6">
        {projects.map((proj: any, idx: number) => (
          <li key={idx} className="mb-2">
            <span className="font-semibold">{proj.name}:</span>{" "}
            {proj.description}
            <ProjectSkills skills={proj.technologies || []} />
          </li>
        ))}
      </ul>
    </section>
  );
}

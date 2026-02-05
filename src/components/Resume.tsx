import { useEffect, useState } from "react";
import Basics from "./Basics";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Hobbies from "./Hobbies";

export default function Resume({ rootUrl }: { rootUrl: string }) {
  const [root, setRoot] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(rootUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch resume root");
        return res.json();
      })
      .then((data) => {
        setRoot(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [rootUrl]);

  if (loading) return <main>Loading resume...</main>;
  if (error) return <main>Error: {error}</main>;
  if (!root) return <main>No resume data found.</main>;

  return (
    <main>
      <Basics url={root.basics} />
      <Experience url={root.experience} />
      <Education url={root.education} />
      <Skills url={root.skills} />
      <Certifications url={root.certifications} />
      <Hobbies url={root.hobbies} />
    </main>
  );
}

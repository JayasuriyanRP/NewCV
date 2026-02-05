import Resume from "./components/Resume";

// Replace with your actual resume.json URL
const RESUME_ROOT_URL = "/local.json";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Resume rootUrl={RESUME_ROOT_URL} />
    </div>
  );
}

import PrintActionsBar from "./components/PrintActionsBar";
import Resume from "./components/Resume";

// Replace with your actual resume.json URL
const RESUME_ROOT_URL = "local.json";

export default function App() {
  return (
    <div className="min-h-screen bg-resume-bg text-resume-text font-sans flex flex-col items-center py-8">
      <div className="w-full max-w-3xl">
        <PrintActionsBar />
        <Resume rootUrl={RESUME_ROOT_URL} />
      </div>
    </div>
  );
}

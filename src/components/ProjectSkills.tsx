export default function ProjectSkills({ skills }: { skills: string[] }) {
  if (!skills?.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-[#007acc] rounded-full px-3 py-1 text-xs font-medium text-white border border-radius-50"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

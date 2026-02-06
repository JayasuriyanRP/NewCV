export default function ProjectSkills({ skills }: { skills: string[] }) {
  if (!skills?.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2 print:text-sm">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-[#007acc] px-3 py-1 text-xs print:text-[0.7em] font-medium text-white print:text-black border-2 print:border-[0.1em] print:border-[#007acc] rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

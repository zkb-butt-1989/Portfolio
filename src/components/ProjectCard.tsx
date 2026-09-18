import { profile } from "@/content/profile";
import { StoreButtons } from "@/components/StoreButtons";

export function ProjectCard({
  project,
}: {
  project: (typeof profile.projects)[number];
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div
        className="mb-5 h-1.5 w-16 rounded-full"
        style={{ backgroundColor: project.accent }}
      />
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
        {project.role}
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50">
        {project.name}
      </h3>
      <p className="mt-1 text-cyan-300/90">{project.tagline}</p>
      <p className="mt-4 text-[15px] leading-7 text-zinc-400">{project.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <StoreButtons links={project.links} />
      </div>
    </article>
  );
}

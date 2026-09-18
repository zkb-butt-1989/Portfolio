import Link from "next/link";
import { PrintResumeButton } from "@/components/PrintResumeButton";
import { profile, skillGroups } from "@/content/profile";
import { withBase } from "@/lib/paths";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `CV — ${profile.name}`,
  robots: { index: false },
};

export default function ResumePage() {
  return (
    <div className="resume-page min-h-full bg-zinc-200 py-10 print:bg-white print:py-0">
      <div className="mx-auto mb-6 flex max-w-[210mm] justify-between gap-3 px-4 print:hidden">
        <Link href="/" className="text-sm text-zinc-700 hover:underline">
          ← Back to portfolio
        </Link>
        <div className="flex gap-3 text-sm">
          <a
            href={withBase("/ZubairKhalid-Resume.pdf")}
            className="font-medium text-zinc-900 underline"
          >
            Download PDF
          </a>
          <PrintResumeButton />
        </div>
      </div>
      <ResumeSheet />
    </div>
  );
}

export function ResumeSheet() {
  return (
    <article className="resume-sheet mx-auto w-full max-w-[210mm] bg-white px-[14mm] py-[12mm] text-zinc-900 shadow-lg print:max-w-none print:shadow-none">
      <header className="border-b border-zinc-300 pb-3">
        <h1 className="text-[26px] font-semibold tracking-tight">{profile.name}</h1>
        <p className="text-[13px] font-medium text-zinc-700">{profile.title}</p>
        <p className="mt-1 text-[11px] leading-5 text-zinc-600">
          {profile.location} · {profile.phone} · {profile.email} ·{" "}
          {profile.linkedinLabel}
        </p>
      </header>

      <section className="mt-3">
        <h2 className="resume-h">Summary</h2>
        <p className="text-[11.5px] leading-[1.45]">{profile.summary}</p>
      </section>

      <section className="mt-3">
        <h2 className="resume-h">Selected apps</h2>
        <div className="space-y-2">
          {profile.projects.map((project) => (
            <div key={project.slug}>
              <p className="text-[12px] font-semibold">
                {project.name}{" "}
                <span className="font-normal text-zinc-600">— {project.tagline}</span>
              </p>
              <p className="text-[11px] leading-[1.4] text-zinc-800">
                {project.summary} {project.role}. {project.stack.join(", ")}.
              </p>
              <p className="text-[10px] leading-[1.35] text-zinc-600">
                {project.links.map((link) => link.href).join("  ·  ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-3">
        <h2 className="resume-h">Experience</h2>
        <div className="space-y-2.5">
          {profile.experience.map((job) => (
            <div key={`${job.title}-${job.start}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="text-[12px] font-semibold">
                  {job.title} · {job.company}
                </p>
                <p className="text-[10.5px] text-zinc-600">
                  {job.start} – {job.end}
                </p>
              </div>
              <ul className="ml-3.5 list-disc text-[11px] leading-[1.4]">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-3">
        <h2 className="resume-h">Skills</h2>
        <ul className="text-[11px] leading-[1.45]">
          {skillGroups.map(([group, items]) => (
            <li key={group}>
              <span className="font-semibold">{group}:</span> {items.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <section>
          <h2 className="resume-h">Education</h2>
          {profile.education.map((item) => (
            <p key={item.school} className="text-[11px] leading-[1.4]">
              <span className="font-semibold">{item.credential}</span>
              <br />
              {item.school}, {item.place} · {item.dates}
            </p>
          ))}
        </section>
        <section>
          <h2 className="resume-h">Certifications</h2>
          {profile.certifications.map((item) => (
            <p key={item} className="text-[11px]">
              {item}
            </p>
          ))}
        </section>
      </div>
    </article>
  );
}

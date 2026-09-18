import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, skillGroups, telHref } from "@/content/profile";
import { withBase } from "@/lib/paths";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-24 sm:pt-28">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
            {profile.title}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {profile.pitch}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-cyan-300"
            >
              View apps
            </a>
            <a
              href={withBase("/ZubairKhalid-Resume.pdf")}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-100 hover:border-cyan-400/40"
            >
              Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-100 hover:border-cyan-400/40"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-50">
              Selected work
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Public store listings only. App source stays private — open Play or
              the App Store to see the live product.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {profile.projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-24 border-t border-white/10 py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-50">
                Experience
              </h2>
              <ol className="mt-10 space-y-10">
                {profile.experience.map((job) => (
                  <li key={`${job.title}-${job.start}`}>
                    <p className="text-sm text-zinc-500">
                      {job.start} – {job.end} · {job.location}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-zinc-50">
                      {job.title}
                    </h3>
                    <p className="text-cyan-300/90">{job.company}</p>
                    <p className="mt-2 text-sm text-zinc-500">{job.summary}</p>
                    <ul className="mt-3 space-y-2 text-[15px] leading-7 text-zinc-400">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <aside>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-50">
                Skills
              </h2>
              <div className="mt-10 space-y-6">
                {skillGroups.map(([group, items]) => (
                  <div key={group}>
                    <h3 className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                      {group}
                    </h3>
                    <p className="mt-2 text-zinc-300">{items.join(" · ")}</p>
                  </div>
                ))}
              </div>
              <h2 className="mt-12 text-2xl font-semibold tracking-tight text-zinc-50">
                Education
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-zinc-400">
                {profile.education.map((item) => (
                  <li key={item.school}>
                    <p className="font-medium text-zinc-200">{item.credential}</p>
                    <p>
                      {item.school} · {item.dates}
                    </p>
                  </li>
                ))}
              </ul>
              <h2 className="mt-10 text-2xl font-semibold tracking-tight text-zinc-50">
                Contact
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>
                  <a className="hover:text-cyan-300" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a className="hover:text-cyan-300" href={telHref(profile.phone)}>
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-cyan-300"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.linkedinLabel}
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

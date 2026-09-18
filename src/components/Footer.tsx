import { profile, telHref } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · {profile.location}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a className="hover:text-cyan-300" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="hover:text-cyan-300" href={telHref(profile.phone)}>
            {profile.phone}
          </a>
          <a
            className="hover:text-cyan-300"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

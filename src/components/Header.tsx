import Link from "next/link";
import { profile } from "@/content/profile";
import { withBase } from "@/lib/paths";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume", label: "CV" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07080d]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-100">
          {profile.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-zinc-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={withBase("/ZubairKhalid-Resume.pdf")}
            className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-semibold text-zinc-950 transition hover:bg-cyan-300"
          >
            Download PDF
          </a>
        </nav>
      </div>
    </header>
  );
}

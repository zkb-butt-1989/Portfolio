import type { StoreLink } from "@/content/profile";

export function StoreButtons({ links }: { links: readonly StoreLink[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-zinc-100 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
          <span aria-hidden className="text-cyan-300">
            {link.label === "Google Play"
              ? "▶"
              : link.label === "App Store"
                ? ""
                : "↗"}
          </span>
          {link.label}
        </a>
      ))}
    </div>
  );
}

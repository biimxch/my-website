import Link from "next/link";
import { personal } from "@/lib/data";

const linkColumns = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/about#contact" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "GitHub", href: personal.github, external: true },
      { label: "LinkedIn", href: personal.linkedin, external: true },
      { label: "Facebook", href: personal.facebook, external: true },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "View projects", href: "/work" },
      { label: "Resume", href: personal.resumeUrl, external: true },
      { label: "Email", href: `mailto:${personal.email}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="overflow-hidden bg-black text-white"
      style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10 lg:px-12 lg:pt-16 lg:pb-12">
        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
          <div className="min-w-0 max-w-xl">
            <p className="mb-3 font-['Montserrat'] text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
              Contact me
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="break-words font-['Montserrat'] text-[clamp(1.1rem,3vw,2.25rem)] font-medium leading-tight tracking-[-0.055em] [overflow-wrap:anywhere] transition-opacity hover:opacity-60"
            >
              {personal.email}
            </a>
            <p className="mt-4 font-['Montserrat'] text-sm leading-relaxed text-neutral-400">
              {personal.location}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid min-w-0 grid-cols-3 gap-4 sm:gap-10 lg:gap-12"
          >
            {linkColumns.map((column) => (
              <div key={column.title} className="flex min-w-0 flex-col items-start gap-2">
                <h2 className="mb-1 font-['Montserrat'] text-sm font-medium text-white">
                  {column.title}
                </h2>
                {column.links.map((link) =>
                  "external" in link && link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-words font-['Montserrat'] text-xs text-neutral-400 transition-colors hover:text-white focus-visible:text-white sm:text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="break-words font-['Montserrat'] text-xs text-neutral-400 transition-colors hover:text-white focus-visible:text-white sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-white/20 pt-4 sm:mt-20 sm:flex-row sm:items-end">
          <p className="max-w-full break-words font-['Montserrat'] text-[clamp(1.5rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.075em] text-white">
            Chompunuch Auttnam
          </p>
          <p className="pb-1 font-['Montserrat'] text-xs text-neutral-500 sm:shrink-0 sm:text-right">
            © Chompunuch 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

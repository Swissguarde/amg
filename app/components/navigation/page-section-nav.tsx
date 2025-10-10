"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageSectionNav() {
  const pathname = usePathname();

  const activeLink = links.find((link) => link.href === pathname);

  const displayLink =
    activeLink || (pathname.startsWith("/works") ? links[0] : null);

  if (!displayLink) return null;

  return (
    <section className="flex items-center gap-2 md:gap-4">
      <div className="flex w-fit cursor-pointer items-center justify-center rounded-full bg-white p-4 md:p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-400 md:size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        <Link href={displayLink.href} key={displayLink.name}>
          <h2 className="relative text-[60px] leading-[0.9] tracking-wide text-gray-700 md:text-[200px] md:leading-normal">
            {displayLink.name}
            <span className="absolute top-2 -right-8 text-xl md:top-10 md:-right-20 md:text-5xl">
              0{displayLink.supNumber}
            </span>
          </h2>
        </Link>
      </div>
    </section>
  );
}

const links = [
  {
    name: "All Work",
    href: "/works",
    supNumber: 6,
  },
  {
    name: "Dashboard",
    href: "/works/dashboard",
    supNumber: 1,
  },
  {
    name: "Branding",
    href: "/works/branding",
    supNumber: 2,
  },
  {
    name: "Web & App",
    href: "/works/web-app",
    supNumber: 3,
  },
  {
    name: "UX/UI",
    href: "/works/ux-ui",
    supNumber: 4,
  },
  {
    name: "Illustration",
    href: "/works/illustration",
    supNumber: 5,
  },
];

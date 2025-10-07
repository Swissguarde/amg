"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-1 flex h-18 w-screen items-center justify-between border-b border-[#B9BDAB] ${isHomepage && !isScrolled ? "bg-[#D5C8B0]" : "bg-white"}`}
    >
      <Link
        href="/"
        className="flex h-full items-center justify-center border-r border-[#B9BDAB] px-4"
      >
        <Image
          src="/signature.svg"
          alt="Ace Media Group"
          width={100}
          height={200}
        />
      </Link>

      <div className="w-full px-10 text-start">
        <h2 className="text-xs font-medium text-gray-600">
          The Ace Media Group. <br /> A design studio powering digital success.
        </h2>
      </div>

      <div className="flex h-full items-center border-l border-[#B9BDAB]">
        {links.map(({ description, href, label }, i) => (
          <Link
            key={i}
            href={href}
            className="flex h-full flex-col justify-center gap-2 border-r border-[#B9BDAB] px-4"
          >
            <span className="text-[10px] font-medium text-gray-500">
              {description}
            </span>
            <div className="flex items-center gap-12">
              {label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
}

const links = [
  {
    label: "Work",
    description: "Projects",
    href: "/works",
  },
  {
    label: "About",
    description: "Who we are",
    href: "/about",
  },
  {
    label: "Contact",
    description: "Get in touch",
    href: "/contact",
  },
];

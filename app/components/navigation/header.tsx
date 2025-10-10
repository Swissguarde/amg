"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex h-18 w-screen items-center justify-between border-b border-[#B9BDAB] ${isHomepage && !isScrolled ? "bg-[#D5C8B0]" : "bg-white"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex h-full items-center justify-center border-[#B9BDAB] px-4 md:border-r"
        >
          <Image
            src="/signature.svg"
            alt="Ace Media Group"
            width={100}
            height={200}
            className="h-auto w-20 md:w-24"
          />
        </Link>

        <div className="hidden w-full px-10 text-start md:block">
          <h2 className="text-xs font-medium text-gray-600">
            The Ace Media Group. <br /> A design studio powering digital
            success.
          </h2>
        </div>

        <div className="hidden h-full items-center border-l border-[#B9BDAB] lg:flex">
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

        <button
          onClick={toggleMobileMenu}
          className="flex h-full items-center justify-center border-l border-[#B9BDAB] px-4 lg:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>
      </header>

      <div
        className={`fixed top-0 right-0 left-0 z-40 h-[80vh] bg-[#D5C8B0] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#B9BDAB]/30 p-6">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center"
          >
            <Image
              src="/signature.svg"
              alt="Ace Media Group"
              width={80}
              height={40}
              className="h-auto w-16"
            />
          </Link>

          <button
            onClick={closeMobileMenu}
            className="p-2"
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-0 px-6 py-8">
          {links.map(({ description, href, label }, i) => (
            <div key={i} className="border-b border-[#B9BDAB]/30 py-6">
              <Link
                href={href}
                onClick={closeMobileMenu}
                className="group flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="mb-1 text-sm font-medium text-gray-600">
                    {description}
                  </span>
                  <span className="text-2xl font-semibold text-gray-800 transition-colors group-hover:text-gray-600">
                    {label}
                  </span>
                </div>
                <svg
                  className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-0 left-0 p-6">
          <p className="mb-4 text-center text-sm text-gray-600">
            A bespoke UX-driven design studio blending elegance and
            functionality
          </p>
          <div className="flex justify-between text-xs text-gray-600">
            <span>info@acemediagroup.com</span>
            <span>2025 Ace Media Group ©</span>
          </div>
        </div>
      </div>
    </>
  );
}

const links = [
  {
    label: "Work",
    description: "Projects (08)",
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

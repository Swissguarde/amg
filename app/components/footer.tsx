"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-[#151146]">
      {/* Top section: signature on left, numbered nav on right */}
      <div className="grid grid-cols-1 border-t border-[#e9ecef] lg:grid-cols-12">
        {/* Signature / logo */}
        <div className="col-span-1 flex items-center justify-center py-16 lg:col-span-8 lg:py-28">
          <Image
            src="/logo.png"
            alt="Ace Media Group Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="size-25 object-contain md:size-50"
            priority
          />
        </div>

        {/* Numbered navigation */}
        <nav className="col-span-1 divide-y divide-[#e9ecef] border-l border-[#e9ecef] lg:col-span-4">
          {[
            { no: "01.", label: "Home", href: "/" },
            { no: "02.", label: "About", href: "/about" },
            { no: "03.", label: "Work", href: "/works" },
            { no: "04.", label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.no}
              href={item.href}
              className="group grid grid-cols-[auto_1fr] items-center gap-6 p-8 transition-colors hover:bg-[#f8f9fa] sm:p-10"
            >
              <span className="text-sm tracking-wider text-[#6c757d]">
                {item.no}
              </span>
              <span className="text-2xl sm:text-3xl">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom section: 4 columns */}
      <div className="grid grid-cols-1 divide-y divide-[#e9ecef] border-t border-[#e9ecef] md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {/* Contact */}
        <div className="p-8 sm:p-10">
          <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#6c757d]">
            <span className="inline-block size-1.5 rounded-full bg-[#6c757d]" />{" "}
            Contact
          </h4>
          <a
            href="mailto:theacemedia1@gmail.com"
            className="text-lg break-all underline-offset-4 hover:underline sm:text-2xl"
          >
            theacemedia1@gmail.com
          </a>
        </div>

        {/* Subscribe */}
        <div className="p-8 sm:p-10">
          <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#6c757d]">
            <span className="inline-block size-1.5 rounded-full bg-[#6c757d]" />{" "}
            Subscribe
          </h4>
          <form
            className="flex max-w-md items-center gap-3 border-b border-[#e9ecef]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent py-3 outline-none placeholder:text-[#6c757d]"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-full p-2 transition-colors hover:bg-[#f8f9fa]"
            >
              <span
                aria-hidden
                className="inline-block rotate-[-45deg] text-2xl leading-none"
              >
                →
              </span>
            </button>
          </form>
        </div>

        {/* Connect */}
        <div className="p-8 sm:p-10">
          <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#6c757d]">
            <span className="inline-block size-1.5 rounded-full bg-[#6c757d]" />{" "}
            Connect
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://instagram.com/theacemediagroup_1"
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between p-8 sm:p-10">
          <div>
            <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#6c757d]">
              <span className="inline-block size-1.5 rounded-full bg-[#6c757d]" />{" "}
              Others
            </h4>
            <Link
              href="/privacy-policy"
              className="w-fit underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="mt-12 text-sm text-[#6c757d]">
            All rights reserved © Ace Media Group {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

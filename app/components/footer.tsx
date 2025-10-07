"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5eee6] text-[#1f1f1f]">
      {/* Top section: signature on left, numbered nav on right */}
      <div className="grid grid-cols-1 border-t border-[#e7dfd7] lg:grid-cols-12">
        {/* Signature / logo */}
        <div className="col-span-1 flex items-center justify-center py-16 lg:col-span-8 lg:py-28">
          <Image
            src="/signature.svg"
            alt="Signature"
            width={720}
            height={240}
            className="h-auto w-[70%] max-w-[780px] opacity-90"
            priority
          />
        </div>

        {/* Numbered navigation */}
        <nav className="col-span-1 divide-y divide-[#e7dfd7] border-l border-[#e7dfd7] lg:col-span-4">
          {[
            { no: "01.", label: "Home", href: "/" },
            { no: "02.", label: "About", href: "/about" },
            { no: "03.", label: "Work", href: "/works" },
            { no: "04.", label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.no}
              href={item.href}
              className="group grid grid-cols-[auto_1fr] items-center gap-6 p-8 transition-colors hover:bg-[#f2e8de] sm:p-10"
            >
              <span className="text-sm tracking-wider text-[#9b938b]">
                {item.no}
              </span>
              <span className="text-2xl sm:text-3xl">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom section: 4 columns */}
      <div className="grid grid-cols-1 divide-y divide-[#e7dfd7] border-t border-[#e7dfd7] md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {/* Contact */}
        <div className="p-8 sm:p-10">
          <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#9b938b]">
            <span className="inline-block size-1.5 rounded-full bg-[#9b938b]" />{" "}
            Contact
          </h4>
          <a
            href="mailto:acemediagrouo@gmail.com"
            className="text-lg break-all underline-offset-4 hover:underline sm:text-2xl"
          >
            acemediagroup@gmail.com
          </a>
        </div>

        {/* Subscribe */}
        <div className="p-8 sm:p-10">
          <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#9b938b]">
            <span className="inline-block size-1.5 rounded-full bg-[#9b938b]" />{" "}
            Subscribe
          </h4>
          <form
            className="flex max-w-md items-center gap-3 border-b border-[#cfc7bf]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent py-3 outline-none placeholder:text-[#9b938b]"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-full p-2 transition-colors hover:bg-[#efe7df]"
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
          <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#9b938b]">
            <span className="inline-block size-1.5 rounded-full bg-[#9b938b]" />{" "}
            Connect
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        {/* Others */}
        <div className="flex flex-col justify-between p-8 sm:p-10">
          <div>
            <h4 className="mb-10 flex items-center gap-2 text-sm tracking-wider text-[#9b938b]">
              <span className="inline-block size-1.5 rounded-full bg-[#9b938b]" />{" "}
              Others
            </h4>
            <Link href="#" className="w-fit underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
          </div>
          <p className="mt-12 text-sm text-[#9b938b]">
            2025 Made in Ace Media Group ©
          </p>
        </div>
      </div>
    </footer>
  );
}

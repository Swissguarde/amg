"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHorizontalScroll } from "@/app/hooks/useHorizontalScroll";
import { useGSAPAnimations } from "@/app/hooks/useGSAPAnimations";
import { useTextReveal } from "@/app/hooks/useTextReveal";

export default function WorkSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewWorkRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const viewWorkUnderlineRef = useRef<HTMLDivElement>(null);
  const contactUnderlineRef = useRef<HTMLDivElement>(null);
  const viewWorkArrowRef = useRef<SVGSVGElement>(null);
  const contactArrowRef = useRef<SVGSVGElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useHorizontalScroll({ wrapperRef, trackRef });

  useGSAPAnimations({
    links: [
      {
        linkRef: viewWorkRef,
        underlineRef: viewWorkUnderlineRef,
        arrowRef: viewWorkArrowRef,
      },
      {
        linkRef: contactRef,
        underlineRef: contactUnderlineRef,
        arrowRef: contactArrowRef,
      },
    ],
  });

  useTextReveal({ elementRef: headingRef });

  const works = [
    {
      id: 1,
      type: "mission",
    },

    {
      id: 2,
      title: "Product / Brand Design",
      slug: "brand",
      desc: "We build strong, consistent brand identities that resonate with your audience.",
      bg: "/branding.jpg",
    },
    {
      id: 3,
      title: "Web & App Development",
      slug: "webdev",
      desc: "Seamless mobile and web apps designed for performance and usability.",
      bg: "/web.jpg",
    },
    {
      id: 4,
      title: "Social Media Management",
      slug: "social",
      desc: "Elevate your brand's presence with strategic social media strategies.",
      bg: "/test.jpg",
    },
  ];

  return (
    <section
      ref={wrapperRef}
      className="bg-light relative border-b border-[#B9BDAB]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ transform: "translateX(0px)" }}
        >
          <div className="bg-light h-screen w-screen flex-shrink-0">
            <div className="grid h-full w-full grid-cols-[7fr_3fr] gap-4">
              <div className="flex flex-col justify-between p-8">
                <div className="flex items-center gap-2">
                  <div className="bg-background size-2 animate-pulse rounded-full" />
                  <p className="font-medium tracking-wider text-gray-600">
                    Our Mission
                  </p>
                </div>

                <h2
                  ref={headingRef}
                  className="text-start text-5xl font-normal text-gray-700"
                >
                  Redefine the digital landscape by crafting elegant,
                  human-centered experiences that seamlessly blend beauty and
                  functionality
                </h2>

                <p className="max-w-md self-end leading-7 text-gray-500">
                  From intuitive dashboards to immersive websites, we blend
                  creativity with strategy to deliver elegant, user-centric
                  solutions tailored to your brand&apos;s vision.
                </p>

                <div className="flex w-full max-w-md items-center gap-10 self-end">
                  <Link
                    ref={viewWorkRef}
                    href="/works"
                    className="relative flex items-center gap-2"
                  >
                    <span className="font-mono">View the Work</span>

                    <svg
                      ref={viewWorkArrowRef}
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
                    <div
                      ref={viewWorkUnderlineRef}
                      className="absolute bottom-0 left-0 h-[1px] w-full bg-current"
                    />
                  </Link>
                  <Link
                    ref={contactRef}
                    href="/contact"
                    className="relative flex items-center gap-2"
                  >
                    <span className="font-mono">Contact</span>

                    <svg
                      ref={contactArrowRef}
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
                    <div
                      ref={contactUnderlineRef}
                      className="absolute bottom-0 left-0 h-[1px] w-full bg-current"
                    />
                  </Link>
                </div>
              </div>

              <Link
                href="/works/uxui"
                className="group border-l border-[#B9BDAB] pt-10 transition-all duration-500 ease-in-out hover:bg-[url('/test.jpg')] hover:bg-cover hover:bg-center hover:text-white"
              >
                <div className="flex h-full flex-col justify-between">
                  <h2 className="text-[250px]">1</h2>

                  <p className="p-8 text-6xl leading-20 text-gray-700 group-hover:text-white">
                    UX/UI <br /> Design
                  </p>

                  <p className="p-8">
                    From intuitive dashboards to immersive websites, we blend
                    creativity with strategy to deliver elegant, user-centric
                    solutions tailored to your brand's vision.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {works
            .filter((w) => w.type !== "mission")
            .map((w, i) => (
              <Link
                key={i}
                href={`/works/${w.slug}`}
                className="group relative h-screen w-[30vw] flex-shrink-0 border-l border-[#B9BDAB] pt-10 transition-all duration-500 ease-in-out hover:text-white"
              >
                {/* Background Image */}
                <div
                  style={{ backgroundImage: `url(${w.bg})` }}
                  className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <h2 className="text-[250px]">{i + 2}</h2>

                  <p className="p-8 text-6xl leading-20 text-gray-700 group-hover:text-white">
                    {w.title}
                  </p>

                  <p className="p-8">{w.desc}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

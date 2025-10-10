"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHorizontalScroll } from "@/app/hooks/useHorizontalScroll";
import { useGSAPAnimations } from "@/app/hooks/useGSAPAnimations";
import { useTextReveal } from "@/app/hooks/useTextReveal";
import Image from "next/image";

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
      type: "uxui",
      title: "UX/UI Design",
      slug: "uxui",
      desc: "We create intuitive and engaging user interfaces that enhance user experience.",
      bg: "/test.jpg",
    },

    {
      id: 3,
      title: "Product / Brand Design",
      slug: "brand",
      desc: "We build strong, consistent brand identities that resonate with your audience.",
      bg: "/branding.jpg",
    },
    {
      id: 4,
      title: "Web & App Development",
      slug: "webdev",
      desc: "Seamless mobile and web apps designed for performance and usability.",
      bg: "/web.jpg",
    },
    {
      id: 5,
      title: "Social Media Management",
      slug: "social",
      desc: "Elevate your brand's presence with strategic social media strategies.",
      bg: "/test.jpg",
    },
  ];

  return (
    <section ref={wrapperRef} className="relative border-b border-[#B9BDAB]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ transform: "translateX(0px)" }}
        >
          <div className="h-screen w-screen flex-shrink-0">
            <div className="relative flex h-screen w-full flex-col md:grid md:grid-cols-[4fr_6fr] md:gap-4">
              <div className="relative hidden h-[40%] w-full sm:block md:h-full">
                <Image
                  src="/about-a.jpg"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-18 flex h-screen flex-col items-start justify-center gap-4 p-4 md:h-full md:gap-10 md:p-8">
                <div className="flex h-full flex-col justify-evenly p-4 md:justify-between md:p-8">
                  <div className="flex items-center gap-2">
                    <div className="size-2 animate-pulse rounded-full bg-[#D5C8B0]" />
                    <p className="text-sm font-medium tracking-wider text-gray-600 md:text-base">
                      Our Mission
                    </p>
                  </div>

                  <h2
                    ref={headingRef}
                    className="text-start text-2xl font-normal text-gray-700 md:text-5xl"
                  >
                    Redefine the digital landscape by crafting elegant,
                    human-centered experiences that seamlessly blend beauty and
                    functionality
                  </h2>

                  <p className="max-w-md self-end text-sm leading-6 text-gray-500 md:text-base md:leading-7">
                    From intuitive dashboards to immersive websites, we blend
                    creativity with strategy to deliver elegant, user-centric
                    solutions tailored to your brand&apos;s vision.
                  </p>

                  <div className="mb-20 flex w-full max-w-md items-center justify-between gap-4 self-end sm:justify-start md:gap-10">
                    <Link
                      ref={viewWorkRef}
                      href="/works"
                      className="relative flex items-center gap-2"
                    >
                      <span className="font-mono text-sm md:text-base">
                        View the Work
                      </span>

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
                      <span className="font-mono text-sm md:text-base">
                        Contact
                      </span>

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
              </div>
            </div>
          </div>

          {works
            .filter((w) => w.type !== "mission")
            .map((w, i, array) => (
              <Link
                key={i}
                href={`/works/${w.slug}`}
                className={`group relative mt-18 flex-shrink-0 border-l border-[#B9BDAB] pt-6 transition-all duration-500 ease-in-out hover:text-white md:mt-0 md:h-screen md:pt-24 ${
                  i === array.length - 1
                    ? "w-screen md:w-[30vw]"
                    : "w-[80vw] md:w-[30vw]"
                }`}
              >
                <div
                  style={{ backgroundImage: `url(${w.bg})` }}
                  className="absolute inset-0 hidden bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 hidden bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50 md:block" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-4 md:p-0">
                  <h2 className="text-[120px] leading-none md:text-[250px]">
                    {i + 1}
                  </h2>

                  <div className="flex flex-1 flex-col justify-center md:block md:text-left">
                    <p className="text-2xl leading-tight text-gray-700 group-hover:text-white md:p-8 md:text-6xl md:leading-20">
                      {w.title}
                    </p>

                    <p className="text-sm leading-relaxed md:p-8 md:text-base">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

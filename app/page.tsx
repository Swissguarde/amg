"use client";
import { gsap } from "gsap";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import WorkSection from "./components/hero/work-section";
import ProcessSection from "./sections/process-section";
import ClosingSection from "./components/hero/closing";

export default function Home() {
  const scrollLinkRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const scrollLink = scrollLinkRef.current;
    const arrow = arrowRef.current;

    if (!scrollLink || !arrow) return;

    gsap.fromTo(
      scrollLink,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      },
    );

    gsap.to(arrow, {
      y: 3,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    const handleMouseEnter = () => {
      gsap.to(scrollLink, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(arrow, {
        y: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(scrollLink, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(arrow, {
        y: 3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    scrollLink.addEventListener("mouseenter", handleMouseEnter);
    scrollLink.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      scrollLink.removeEventListener("mouseenter", handleMouseEnter);
      scrollLink.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <ReactLenis root>
      <section>
        <div className="relative grid h-screen w-full grid-cols-[6fr_4fr] gap-4 bg-[#D5C8B0]">
          <div className="flex flex-col items-start justify-center gap-10 p-8">
            <h2 className="max-w-2xl text-7xl leading-16 text-gray-800">
              Crafting digital experiences that attract, convert, and grow your
              business
            </h2>

            <ScrollLink to="work" smooth={true} duration={500}>
              <div
                ref={scrollLinkRef}
                className="flex cursor-pointer items-center gap-2 underline underline-offset-6"
              >
                <h2 className="text-md text-gray-600">Scroll for more</h2>
                <svg
                  ref={arrowRef}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </div>
            </ScrollLink>
          </div>

          <div className="relative h-full w-full">
            <Image
              src="/hero.png"
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div id="work">
          <WorkSection />
        </div>
        <ProcessSection />
        {/* <TestimonialsSection /> */}
        <ClosingSection />
      </section>
    </ReactLenis>
  );
}

"use client";
import { gsap } from "gsap";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import WorkSection from "./components/hero/work-section";
import ProcessSection from "./sections/process-section";
import ClosingSection from "./components/hero/closing";
import CTA from "./components/cta";

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
        <div className="relative flex h-screen w-full flex-col bg-[#D5C8B0] md:grid md:grid-cols-[6fr_4fr] md:gap-4">
          <div className="flex h-[60%] flex-col items-start justify-center gap-10 p-8 md:h-full">
            <h2 className="text-4xl text-gray-800 md:max-w-2xl md:text-7xl md:leading-16">
              Crafting digital experiences that attract, convert, and grow your
              business
            </h2>
            <p className="text-gray-600 md:max-w-2xl">
              We specialize in bespoke UX/UI design, branding, and blending
              artistry with innovation to craft scalable, impactful designs that
              resonate with users and grow with the business
            </p>

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

          <div className="relative h-[40%] w-full md:h-full">
            <Image
              src="/itysltt.png"
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
        <CTA />
      </section>
    </ReactLenis>
  );
}

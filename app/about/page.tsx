"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    gsap.utils.toArray(".work-item").forEach((item: any) => {
      const img = item.querySelector(".work-item-img");
      const name = item.querySelector(".work-item-name");

      const split = SplitText.create(name, {
        type: "chars",
        mask: "chars",
      });

      gsap.set(split.chars, { y: "125%" });
      split.chars.forEach((char, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: `top+=${index * 25 - 250} top`,
          end: `top+=${index * 25 - 100} top`,
          scrub: 1,
          animation: gsap.fromTo(
            char,
            {
              y: "125%",
            },
            {
              y: "0%",
              ease: "none",
            },
          ),
        });
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
          },
        ),
      });

      ScrollTrigger.create({
        trigger: item,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.5,
        animation: gsap.fromTo(
          img,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
            ease: "none",
          },
        ),
      });
    });
  }, []);

  return (
    <div className="mt-20">
      <section className="hero relative flex h-screen w-screen items-center justify-center overflow-hidden p-[2rem]">
        <h1 className="max-w-4xl text-center text-5xl leading-15 text-gray-700">
          At The Ace Media Group, we believe innovation should feel effortless.
          Our goal is to merge creativity and technology to create meaningful
          digital experiences—ones that inspire, connect, and drive real growth
          for modern brands.
        </h1>
      </section>
      <section className="work-item relative h-[150vh] w-screen overflow-hidden">
        <div className="work-item-img">
          <img
            src="/about-b.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="work-item-name">
          <h1 className="text-center text-7xl font-bold text-white uppercase">
            ACE MEDIA GROUP
          </h1>
        </div>
      </section>
      <section className="work-item relative h-[150vh] w-screen overflow-hidden">
        <div className="work-item-img">
          <img
            src="/about-a.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="work-item-name">
          <h1 className="text-center font-mono text-5xl font-bold text-gray-600 uppercase">
            Adaptability | Collaboration | Excellence
          </h1>
        </div>
      </section>
      <section className="outro relative flex h-screen w-screen items-center justify-center overflow-hidden p-[2rem]">
        back to base
      </section>
    </div>
  );
}

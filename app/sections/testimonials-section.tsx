"use client";
import Card from "../components/card";
import { ReactLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export interface ITestimonial {
  name: string;
  company: string;
  jobTitle: string;
  quote: string;
  image: string;
}

export default function TestimonialsSection() {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const totalScrollHeight = window.innerHeight * 3;
      const positions = [14, 38, 62, 86];
      const rotations = [-15, -7.5, 7.5, 15];

      ScrollTrigger.create({
        trigger: container.current?.querySelector(".cards"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      cards.forEach((card, i) => {
        gsap.to(card, {
          left: `${positions[i]}%`,
          rotation: `${rotations[i]}deg`,
          ease: "none",
          scrollTrigger: {
            trigger: container.current?.querySelector(".cards"),
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${i}`,
          },
        });
      });

      cards.forEach((card, i) => {
        const frontEl = card.querySelector(".flip-card-front");
        const backEl = card.querySelector(".flip-card-back");

        const staggerOffset = i * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: container.current?.querySelector(".cards"),
          start: `top top`,
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${i}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[i] * (1 - animationProgress);

              gsap.to(frontEl, {
                rotateY: frontRotation,
                ease: "power1.out",
              });

              gsap.to(backEl, {
                rotateY: backRotation,
                ease: "power1.out",
              });

              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    },
    { scope: container },
  );

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="custcontainer h-full w-full" ref={container}>
          <section className="cards">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                id={`card-${i + 1}`}
                frontSrc="/card.jpg"
                frontAlt="Card"
                backText={testimonial}
                ref={(el) => {
                  if (el) {
                    cardsRef.current[i] = el as HTMLDivElement;
                  }
                }}
              />
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

const testimonials: ITestimonial[] = [
  {
    name: "J.Michael",
    company: "LyftPay",
    jobTitle: "CTO",
    quote:
      "Working with Acemedia on our website and mobile app was a game changer.",
    image:
      "https://images.unsplash.com/photo-1645106281521-86da01d1031d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "D. Sofia",
    company: "GreenNest",
    jobTitle: "MD",
    quote:
      "Acemedia completely transformed our brand identity. From the logo to the color palette, every detail felt intentional and aligned with our vision.",
    image:
      "https://images.unsplash.com/photo-1508153460964-48ffffcb0829?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "C. Okafor",
    company: "EduConnect",
    jobTitle: "Founder",
    quote:
      "Their UI/UX work turned our complex idea into an intuitive, user-friendly experience.",
    image:
      "https://images.unsplash.com/photo-1707676401203-632160806884?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "L. Kim",
    company: "Bloom Lifestyle",
    jobTitle: "CEO",
    quote:
      "Our online presence skyrocketed after handing our social media to Acemedia.",
    image:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

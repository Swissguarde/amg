import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseTextRevealProps {
  elementRef: RefObject<HTMLElement | null>;
  trigger?: {
    start?: string;
    end?: string;
    toggleActions?: string;
  };
  animation?: {
    duration?: number;
    stagger?: number;
    ease?: string;
  };
}

export const useTextReveal = ({
  elementRef,
  trigger = {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  animation = {
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
  },
}: UseTextRevealProps) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Split the text into words and wrap each in a span
    const text = element.textContent || "";
    const words = text.split(" ");

    element.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`,
      )
      .join(" ");

    const wordSpans = element.querySelectorAll("span span");

    // Set initial state - words start below and invisible
    gsap.set(wordSpans, {
      y: "100%",
      opacity: 0,
    });

    // Create the scroll trigger animation
    gsap.to(wordSpans, {
      y: "0%",
      opacity: 1,
      duration: animation.duration,
      ease: animation.ease,
      stagger: animation.stagger,
      scrollTrigger: {
        trigger: element,
        start: trigger.start,
        end: trigger.end,
        toggleActions: trigger.toggleActions,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((scrollTrigger) => {
        if (scrollTrigger.trigger === element) {
          scrollTrigger.kill();
        }
      });
    };
  }, [
    elementRef,
    trigger.start,
    trigger.end,
    trigger.toggleActions,
    animation.duration,
    animation.stagger,
    animation.ease,
  ]);
};

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

interface LinkElements {
  linkRef: RefObject<HTMLAnchorElement | null>;
  underlineRef: RefObject<HTMLDivElement | null>;
  arrowRef: RefObject<SVGSVGElement | null>;
}

interface UseGSAPAnimationsProps {
  links: LinkElements[];
}

export const useGSAPAnimations = ({ links }: UseGSAPAnimationsProps) => {
  useEffect(() => {
    const linkElements = links.map(({ linkRef, underlineRef, arrowRef }) => ({
      link: linkRef.current,
      underline: underlineRef.current,
      arrow: arrowRef.current,
    }));

    const allElementsExist = linkElements.every(
      ({ link, underline, arrow }) => link && underline && arrow,
    );

    if (!allElementsExist) return;

    const underlines = linkElements.map(({ underline }) => underline);
    gsap.set(underlines, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const cleanupFunctions = linkElements.map(({ link, underline, arrow }) => {
      const handleEnter = () => {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(arrow, {
          x: 3,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      link!.addEventListener("mouseenter", handleEnter);
      link!.addEventListener("mouseleave", handleLeave);

      return () => {
        link!.removeEventListener("mouseenter", handleEnter);
        link!.removeEventListener("mouseleave", handleLeave);
      };
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [links]);
};

"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };
    createBlocks();

    gsap.set(blocksRef.current, {
      scaleX: 0,
      transformOrigin: "left",
    });

    if (logoRef.current) {
      const path = logoRef.current.querySelector("path");
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
        });
      }
    }

    revealPage();
    const handleClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).href;
      const url = new URL(href).pathname;
      if (url !== pathname && !isTransitioning.current) {
        isTransitioning.current = true;
        coverPage(url);
      }
    };

    const links = document.querySelectorAll("a[href^='/']");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [router, pathname]);

  const coverPage = (url: string) => {
    const tl = gsap.timeline({
      onComplete: () => router.push(url),
    });

    tl.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.6,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "left",
    })
      .set(
        logoOverlayRef.current,
        {
          opacity: 1,
        },
        "-=0.2",
      )
      .set(
        logoRef.current?.querySelector("path") as SVGPathElement,
        {
          strokeDashoffset: logoRef?.current
            ?.querySelector("path")
            ?.getTotalLength(),
          fill: "transparent",
        },
        "-=0.25",
      )
      .to(
        logoRef.current?.querySelector("path") as SVGPathElement,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.5",
      )
      .to(
        logoRef.current?.querySelector("path") as SVGPathElement,
        {
          fill: "#e3e4d8",
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5",
      )
      .to(logoOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });
  };

  const revealPage = () => {
    gsap.set(blocksRef.current, {
      scaleX: 1,
      transformOrigin: "right",
    });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  return (
    <>
      <div ref={overlayRef} className="transition-overlay"></div>
      <div ref={logoOverlayRef} className="logo-overlay">
        <div className="logo-container">
          <Logo ref={logoRef} />
        </div>
      </div>
      {children}
    </>
  );
}

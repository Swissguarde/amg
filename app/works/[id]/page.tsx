"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAPAnimations } from "@/app/hooks/useGSAPAnimations";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function WorkDetailPage() {
  const viewWorkRef = useRef<HTMLAnchorElement>(null);
  const viewWorkUnderlineRef = useRef<HTMLDivElement>(null);
  const viewWorkArrowRef = useRef<SVGSVGElement>(null);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useGSAPAnimations({
    links: [
      {
        linkRef: viewWorkRef,
        underlineRef: viewWorkUnderlineRef,
        arrowRef: viewWorkArrowRef,
      },
    ],
  });
  return (
    <section className="py-32">
      <div className="flex items-start justify-between px-8">
        <div className="rounded-full bg-white p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-gray-400">Client</h2>
          <p>The Ayo Lawal Empowering Foundation</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-gray-400">Services</h2>
          <p>Branding /</p>
          <p>UX/UI Design /</p>
          <p>Social Media</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-gray-400">Date</h2>
          <p>2025</p>
        </div>

        <div>
          <Link
            ref={viewWorkRef}
            href="https://www.ayolawal.com"
            className="relative flex items-center gap-2"
          >
            <span className="font-mono">Live Site</span>

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
        </div>
      </div>

      <div className="mt-40">
        <h2 className="float-end mb-10 max-w-3xl pr-8 text-6xl leading-20 text-gray-700">
          The Ayo Lawal Empowering Foundation
        </h2>

        <Image
          src="/lawal.png"
          alt="Work 1"
          width={0}
          height={0}
          sizes="100vw"
          className="h-screen w-full object-cover"
        />

        <div className="my-20 flex items-start justify-between gap-10 px-8">
          <div className="flex items-center gap-1">
            <span className="text-xl text-gray-400">•</span>
            <p>Project Overview</p>
          </div>

          <p className="max-w-4xl text-5xl text-gray-500">
            The Ayo Lawal Empowering Foundation is a non-profit organization
            that provides education and training to young people in Nigeria.
          </p>
        </div>
        <Carousel setApi={setApi} className="mx-auto mt-10 w-full max-w-[90vw]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-10/12s">
                <div className="p-1">
                  <div>
                    <Image
                      src="/ayo_lawal/slide-1.jpg"
                      alt="Work 1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-[70vh] w-full rounded-sm object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>

        <div className="text-muted-foreground my-4 text-center text-sm">
          Slide <span className="font-bold">{current}</span> of{" "}
          <span className="font-bold">{count}</span>
        </div>
      </div>
    </section>
  );
}

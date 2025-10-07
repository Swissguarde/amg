import Image from "next/image";
import { forwardRef } from "react";
import { ITestimonial } from "../sections/testimonials-section";

const Card = forwardRef(
  (
    {
      id,
      frontSrc,
      frontAlt,
      backText,
    }: {
      id: string;
      frontSrc: string;
      frontAlt: string;
      backText: ITestimonial;
    },
    ref,
  ) => {
    return (
      <div
        id={id}
        className="card"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className="card-wrapper">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Image
                src={frontSrc}
                alt={frontAlt}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flip-card-back">
              <Image
                src={backText.image}
                alt={backText.name}
                width={100}
                height={100}
                className="h-1/2 w-full rounded-2xl object-cover"
              />
              <div className="my-4 flex items-center justify-center gap-2">
                <h2 className="rotate-[1deg] text-sm font-bold text-gray-800">
                  {backText.name}
                </h2>
                <div className="bg-background size-1 animate-pulse rounded-full" />

                <h2 className="rotate-[-3deg] font-mono text-[10px] text-gray-600 underline underline-offset-2">
                  {backText.jobTitle} @ {backText.company}
                </h2>
              </div>
              <p className="text-center text-sm text-gray-600">
                "{backText.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default Card;

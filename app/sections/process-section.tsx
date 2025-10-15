import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between px-4 py-16 lg:flex-row lg:px-8 lg:py-0">
      <div className="order-2 w-full border-t border-[#B9BDAB]/60 lg:order-1 lg:w-auto">
        {process.map((item, index) => (
          <div
            key={index}
            className="my-4 flex items-center gap-4 border-b border-[#B9BDAB]/60 pb-3 lg:my-6 lg:gap-10"
          >
            <div className="flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-[#B9BDAB] text-center text-sm text-white lg:text-base">
              {index + 1}
            </div>
            <h2 className="text-base lg:text-xl">{item}</h2>
          </div>
        ))}
      </div>

      <div className="order-1 max-w-xl lg:order-2">
        <div className="flex items-center gap-2">
          <div className="size-2 animate-pulse rounded-full bg-[#D5C8B0]" />
          <p className="text-sm font-medium tracking-wider text-gray-600 lg:text-base">
            From idea to impact
          </p>
        </div>
        <h2 className="my-4 text-start text-3xl leading-tight font-normal text-gray-700 lg:text-5xl lg:leading-16">
          Designing Experiences That <br className="hidden lg:block" /> Resonate
          and Scale
        </h2>
        <p className="text-sm text-gray-500 lg:text-base">
          Every detail we design, from a color system to a dashboard layout, is
          rooted in user behavior, business goals, and the belief that good
          design should feel effortless. We blend strategy and craft to deliver
          experiences that scale beautifully and work seamlessly across
          platforms.
        </p>

        <Link
          href="/about"
          className="relative mt-8 flex items-center gap-2 underline underline-offset-8 lg:mt-20"
        >
          <span className="font-mono text-sm lg:text-base">
            View our Process
          </span>

          <svg
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
        </Link>
      </div>
    </section>
  );
}

const process = [
  "UX-Driven Led by Strategy",
  "Elegance Meets Innovation",
  "Crafting Exceptional User Experiences",
  "Designing for Impact",
  "Delivering Exceptional Results",
];

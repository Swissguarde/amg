import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="flex h-screen items-center justify-between px-8">
      <div className="border-t border-[#B9BDAB]/60">
        {process.map((item, index) => (
          <div
            key={index}
            className="my-6 flex items-center gap-10 border-b border-[#B9BDAB]/60 pb-3"
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-[#B9BDAB] text-center text-white">
              {index + 1}
            </div>
            <h2 className="text-xl">{item}</h2>
          </div>
        ))}
      </div>

      <div className="max-w-xl">
        <div className="flex items-center gap-2">
          <div className="bg-background size-2 animate-pulse rounded-full" />
          <p className="font-medium tracking-wider text-gray-600">
            From idea to impact
          </p>
        </div>
        <h2 className="my-4 text-start text-5xl leading-16 font-normal text-gray-700">
          Designing Experiences That <br /> Resonate and Scale
        </h2>
        <p className="max-w-md text-gray-500">
          Every detail we design, from a color system to a dashboard layout, is
          rooted in user behavior, business goals, and the belief that good
          design should feel effortless. We blend strategy and craft to deliver
          experiences that scale beautifully and work seamlessly across
          platforms.
        </p>

        <Link
          href="/"
          className="relative mt-20 flex items-center gap-2 underline underline-offset-8"
        >
          <span className="font-mono">View our Process</span>

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

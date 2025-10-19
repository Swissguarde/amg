import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative flex h-[50vh] w-screen items-center justify-between overflow-hidden px-4 md:px-8">
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg-gradient.jpeg"
          alt="background"
          className="size-full object-cover"
        />
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="flex w-full flex-col items-center justify-center space-y-8 text-center md:hidden">
        <h2 className="text-[12vw] leading-[0.9] font-normal text-gray-700">
          Let's bring your
          <br />
          vision to life.
        </h2>
        <p className="max-w-sm text-sm text-gray-600">
          Contact us today to discuss your project and receive a personalized
          quote tailored to your needs.
        </p>
        <div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 underline underline-offset-8"
          >
            <span className="font-mono">Inquire</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 transition-transform group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="relative hidden w-[32%] flex-col justify-between border-r border-white/40 pr-8 md:flex">
        <p className="max-w-xs text-gray-600">
          Contact us today to discuss your project and receive a personalized
          quote tailored to your needs.
        </p>

        <div className="mt-16">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 underline underline-offset-8"
          >
            <span className="font-mono">Inquire</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 transition-transform group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>

        <div className="absolute top-0 right-0 h-full w-px bg-[#151146]/60" />
      </div>

      <div className="hidden flex-1 pl-8 md:block">
        <h2 className="text-right text-[8vw] leading-[0.95] font-normal text-gray-700 lg:text-[7vw]">
          Let's bring your
          <br />
          vision to life.
        </h2>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="sm:grid-wrapper sm:h-screen">
        <div className="sm:grid-background">
          <div className="flex flex-col items-center justify-center gap-10 p-8">
            <h2 className="text-3xl leading-12 font-semibold underline underline-offset-8 sm:text-5xl">
              The Ace Media Group - Who are we?
            </h2>

            <section className="z-10 max-w-4xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">About Us</h3>
                <p className="text-lg">
                  At The Ace Media Group, we are passionate about delivering
                  exceptional tech and creative solutions that empower
                  businesses to thrive in today's digital-first world. We are
                  committed to helping our clients achieve their goals through
                  innovation, strategy, and excellence.
                </p>
                <p>
                  Founded on the principles of trust, collaboration, and
                  results-driven execution, we pride ourselves on building
                  strong, long-lasting partnerships. Our team of skilled
                  professionals works closely with businesses to provide
                  tailored solutions that meet unique needs, ensuring measurable
                  outcomes and a seamless experience.
                </p>
                <p>
                  Whether you're looking to elevate your brand's online
                  presence, streamline your operations, or launch a dynamic
                  website, The Ace Media Group is your trusted partner.
                  Together, let's transform ideas into impact and set your
                  business up for long-term success.
                </p>
              </div>
              <div className="my-14 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="text-lg">
                  To provide top-tier tech and creative services, empowering
                  businesses to thrive in the digital age through innovation,
                  strategy, and excellence.
                </p>
              </div>
              <div className="z-50 my-14 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="text-lg">
                  To be the go-to partner for businesses seeking seamless tech
                  and creative solutions, recognized for delivering results and
                  fostering enduring client relationships.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="grid-wrapper h-[185vh] sm:h-[80vh]">
        <div className="grid-background-second relative z-50 bg-gradient-to-br from-slate-50 to-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-8">
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-5xl font-bold text-gray-900">
                Our Core Values
              </h3>
              <div className="mx-auto h-1 w-24 rounded-full bg-[#151146]"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-[#151146]"></div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#151146]/10 transition-colors duration-300 group-hover:bg-[#151146]/20">
                  <span className="text-2xl font-bold text-[#151146]">A</span>
                </div>
                <h4 className="mb-3 text-center text-2xl font-bold text-gray-900">
                  Adaptability
                </h4>
                <p className="text-center leading-relaxed text-gray-600">
                  Customizing services to meet unique client needs and evolving
                  market demands
                </p>
              </div>

              <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-[#151146]"></div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#151146]/10 transition-colors duration-300 group-hover:bg-[#151146]/20">
                  <span className="text-2xl font-bold text-[#151146]">C</span>
                </div>
                <h4 className="mb-3 text-center text-2xl font-bold text-gray-900">
                  Collaboration
                </h4>
                <p className="text-center leading-relaxed text-gray-600">
                  Building long-term relationships with partners & clients based
                  on trust and mutual success
                </p>
              </div>

              <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-[#151146]"></div>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#151146]/10 transition-colors duration-300 group-hover:bg-[#151146]/20">
                  <span className="text-2xl font-bold text-[#151146]">E</span>
                </div>
                <h4 className="mb-3 text-center text-2xl font-bold text-gray-900">
                  Excellence
                </h4>
                <p className="text-center leading-relaxed text-gray-600">
                  Delivering exceptional results in every service with
                  unwavering commitment to quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

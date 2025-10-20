import Image from "next/image";

export default function PaymentSuccessPage({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-gradient.jpeg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="rounded-lg bg-white/95 p-8 text-center shadow-2xl backdrop-blur-sm">
            <div className="mb-8">
              {/* Success Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-[#151146]">
                Payment Successful!
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                Payment of{" "}
                <span className="font-semibold text-[#151146]">${amount}</span>{" "}
                has been processed successfully
              </p>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="font-medium text-green-800">
                  Thank you for your payment. You will receive a confirmation
                  email shortly.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex items-center rounded-lg bg-[#151146] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#151146]/90"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

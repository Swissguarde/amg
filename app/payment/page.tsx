"use client";

import CheckoutPage from "@/app/components/checkout-page";
import convertToSubcurrency from "@/lib/convert-to-subcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Image from "next/image";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Payment | The Ace Media Group",
  description: "Pay for your invoice",
};

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentPage() {
  const [amount, setAmount] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setAmount(value);
    }
  };

  const handleContinue = () => {
    if (amount > 0) {
      setShowCheckout(true);
    }
  };

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
          {!showCheckout ? (
            <div className="rounded-lg bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
              <div className="mb-8 text-center">
                <h1 className="mb-4 text-4xl font-bold text-[#151146]">
                  Payment Request
                </h1>
                <p className="text-lg text-gray-600">
                  Enter the amount on your invoice
                </p>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="amount"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-8 text-lg focus:border-[#151146] focus:ring-2 focus:ring-[#151146]/20 focus:outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <button
                onClick={handleContinue}
                disabled={amount <= 0}
                className="w-full rounded-lg bg-[#151146] py-3 text-lg font-semibold text-white transition-colors hover:bg-[#151146]/90 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                Continue to Payment
              </button>
            </div>
          ) : (
            <div className="rounded-lg bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
              <div className="mb-6 text-center">
                <h1 className="mb-2 text-3xl font-bold text-[#151146]">
                  Complete Payment
                </h1>
                <p className="text-lg text-gray-600">
                  Pay <span className="font-semibold">${amount}</span>
                </p>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="mt-2 text-sm text-[#151146] underline hover:no-underline"
                >
                  Change amount
                </button>
              </div>

              <Elements
                stripe={stripePromise}
                options={{
                  mode: "payment",
                  amount: convertToSubcurrency(amount),
                  currency: "usd",
                }}
              >
                <CheckoutPage amount={amount} />
              </Elements>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

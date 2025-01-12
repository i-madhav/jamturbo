"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

interface Order {
  amount: number;
  currency: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id: string;
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
}

const Page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const paymentHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const order: Order = {
      amount: 500,
      currency: "INR",
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create order");
      }

      const options: RazorpayOptions = {
        key: process.env.RAZORPAY_API_KEY_ID!,
        amount: data.response.amount,
        currency: "INR",
        name: "Jam",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.response.id,
        handler: async function (response) {
          const body = { ...response };
         const responseJson = await fetch("/api/validate-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),

          });

          const data = await responseJson.json()
          console.log(data);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      //@ts-ignore
      if (typeof window !== "undefined" && window.Razorpay) {
        //@ts-ignore
        const rzp1 = new window.Razorpay(options);
        //@ts-ignore
        rzp1.on("payment.failed", function (response) {
          console.error("Payment failed:", response);
        });
        rzp1.open();
      } else {
        console.error("Razorpay SDK not loaded.");
      }
    } catch (error: any) {
      console.error("Error while creating order:", error.message);
    }
  };

  const handleCross = () =>{
    router.push("/dashboard");
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
      <div id="root" className="min-h-screen bg-black">
        {isOpen && (
          <section
            id="PopupOverlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-md p-8 overflow-hidden text-left bg-zinc-900 border border-zinc-800 rounded-2xl">
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => handleCross}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Room Limit Reached
                </h3>
                <p className="text-zinc-400 mb-6">
                  You've reached the maximum number of rooms in your free plan.
                  Upgrade to create unlimited rooms and unlock premium features.
                </p>

                <div className="space-y-3 w-full">
                  <button
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    onClick={paymentHandler}
                  >
                    Upgrade to Premium
                  </button>
                  <button
                    onClick={handleCross}
                    className="w-full py-3 px-4 border border-zinc-700 text-zinc-400 font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Page;

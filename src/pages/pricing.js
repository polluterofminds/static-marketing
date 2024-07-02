import React, { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import editor from "../images/Editor.png";
import { CheckIcon } from "@heroicons/react/20/solid";

const Pricing = () => {
  const [annualPricing, setAnnualPricing] = useState(false);
  const tiers = [
    {
      name: "Free Trial",
      id: "tier-trial",
      href: "https://tally.so/r/mK0zWz",
      priceMonthly: "$0",
      description: "",
      features: [
        "All features free for 60 days",
        "No credit card required",
        "Unsplash images",
        "Proofreader",
        "Cloud Sync",
      ],
    },
    {
      name: annualPricing ? "Annual Plan" : "Monthly Plan",
      id: "tier-paid",
      href: "https://tally.so/r/mK0zWz",
      priceMonthly: annualPricing ? "$49.99" : "$4.99",
      description: "",
      features: [
        "Charged automatically when trial ends",
        "No additional usage fees",
        "Unsplash images",
        "Proofreader",
        "Cloud Sync",
      ],
    },
  ];
  return (
    <div>
      <Nav />
      <div className="relative overflow-hidden bg-white py-16 sm:w-1/2 w-3/4 m-auto">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1 className="block text-center text-lg font-semibold">
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Simple and affordable pricing
              </span>
            </h1>

            <div className="mt-8 mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-black"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      {tier.id !== "tier-trial" && (
                        <span className="text-base font-semibold leading-7 text-gray-600">
                          /month
                        </span>
                      )}
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-black"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-gray-900 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Get started today
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;

export const Head = () => {
  return (
    <>
      <title>Static | About</title>
      <meta property="og:title" content="About Static" />
      <meta
        property="og:description"
        content="Static is a beautiful CMS for your static site."
      />
      <meta property="og:image" content={editor} />
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <noscript>
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerpolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
};

import React from "react";
import { CheckCircle, Home, CreditCard, Search, Handshake, Key } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    icon: <Home size={28} />,
    title: "Step 1: Define Your Needs",
    description:
      "Determine the type of property you want, your budget, preferred locations, and your timeline.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Step 2: Secure Financing",
    description:
      "Explore mortgage options, get pre-approval, and understand your financial limits.",
  },
  {
    icon: <Search size={28} />,
    title: "Step 3: Property Search",
    description:
      "Browse listings, visit properties, and evaluate options with our expert guidance.",
  },
  {
    icon: <Handshake size={28} />,
    title: "Step 4: Make an Offer",
    description:
      "Negotiate and submit an offer that reflects market value and your budget.",
  },
  {
    icon: <Key size={28} />,
    title: "Step 5: Closing & Handover",
    description:
      "Complete paperwork, inspections, and receive keys to your new property.",
  },
];

const faqs = [
  {
    question: "Do I need a pre-approved mortgage before looking?",
    answer:
      "It is highly recommended as it helps you understand your budget and strengthens your offer.",
  },
  {
    question: "How long does the buying process usually take?",
    answer:
      "Typically between 30-90 days, depending on financing, property inspections, and negotiations.",
  },
  {
    question: "Can Keystone assist with legal documentation?",
    answer:
      "Yes! We provide guidance on contracts, property transfer, and legal compliance.",
  },
];

const mortgageTips = [
  "Check your credit score before applying for a mortgage.",
  "Compare multiple lenders to get the best interest rates.",
  "Save for down payments and additional fees.",
  "Consider long-term affordability, not just initial costs.",
];

const BuyersPage = () => {
  return (
    <section className="bg-white text-slate-900 py-20 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero / Introduction */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">Buyers Guide</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Follow our step-by-step guide, explore mortgage tips, and get answers to common buyer questions.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl text-center">Step-by-Step Guide</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {steps.map((step, index) => (
              <div
                key={index}
                className="min-w-[250px] rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-full bg-customBlue p-4 text-white">{step.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mortgage Tips */}
        <div className="mb-20">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-center">Mortgage Tips</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mortgageTips.map((tip, index) => (
              <div
                key={index}
                className="rounded-2xl bg-customBlue p-4 text-white shadow-md transition hover:scale-105"
              >
                <CheckCircle className="mb-2" />
                <p className="text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-center">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:shadow-lg"
              >
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-slate-600">
            Speak with our real estate experts to find your dream property today.
          </p>

          {/* <Link to={"/contact"}> */}
          <a href="mailto:info@keystonerealestatepartners.co">
          <button className="rounded-2xl bg-customBlue px-8 py-4 text-white font-semibold transition hover:scale-105">
            Schedule Consultation
          </button>
          </a>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
};

export default BuyersPage;

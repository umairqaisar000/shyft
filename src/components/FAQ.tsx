"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does SHYFT actually do?",
    answer:
      "SHYFT builds, designs, and scales digital products for ambitious teams. We help businesses move from idea to real impact through product strategy, engineering, design, branding, AI, and growth execution.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "We work with startups, scaleups, and established companies that are serious about building high quality digital products. Our clients value long term partnerships and thoughtful execution over quick fixes.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our services include web and mobile app development, digital product design, branding, communications and PR, artificial intelligence solutions, and product and growth strategy. We support projects from early concept to scale.",
  },
  {
    question: "Do you work as a project based team or long term partner?",
    answer:
      "Both. Some clients engage us for specific projects, while others partner with us long term to support continuous product development and growth. We are structured to support both models effectively.",
  },
  {
    question: "What makes SHYFT different from other agencies?",
    answer:
      "SHYFT started as a cohort of builders who experimented, delivered, and learned together. That foundation shaped how we work today. We think like product owners, not vendors. We focus on outcomes, not just deliverables.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Our team works across industries and geographies. Because we are product focused, we adapt quickly to new domains. We bring structured thinking, strong execution, and strategic clarity to every industry we enter.",
  },
  {
    question: "How involved will we be during the process?",
    answer:
      "We believe in close collaboration. You will be involved in key decisions, strategy discussions, and milestone reviews. We keep communication clear and consistent so you always know where things stand.",
  },
  {
    question: "How do we get started with SHYFT?",
    answer:
      "Getting started is simple. Reach out to us with your idea or challenge. We will schedule a discovery conversation to understand your goals and recommend the right approach to move forward.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-left font-heading text-3xl sm:text-4xl lg:text-5xl font-extralight text-white mb-8">
              FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-800 bg-transparent overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-white transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-extralight pt-1 px-5 pb-5 sm:px-6 sm:pb-6 text-neutral-200 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

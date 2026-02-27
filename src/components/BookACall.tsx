"use client";

import Image from "next/image";

export default function BookACall() {
  return (
    <section
      id="book-call"
      className="relative py-20 sm:py-24 lg:py-32 bg-black overflow-hidden mx-6 sm:mx-8 md:mx-6 lg:mx-10 xl:mx-36 rounded-3xl mb-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(34, 68, 143, 0.3), rgba(9, 63, 88, 0.3)), url('/images/hero-image-3.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extralight text-white mb-6">
        Transform your business with 
        cutting-edge solutions
        </h2>
        <p className="text-white text-xl mb-10">
          Book a call today and start automating
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="shadow-xl inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-neutral-950 px-4 py-2">
            <span className="shimmer-text text-sm font-medium">
              Smart Integration
            </span>
          </div>

          <div className="shadow-xl inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-neutral-950 px-4 py-2">
            <span className="shimmer-text text-sm font-medium">
              Workflow Automation
            </span>
          </div>

          <div className="shadow-xl inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-neutral-950 px-4 py-2">
            <span className="shimmer-text text-sm font-medium">
              AI Development
            </span>
          </div>
        </div>

        <button className="shadow-xl inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full text-sm font-medium transition-colors" 
        onClick={() => {
          window.open("https://calendly.com/umair_qaisar/discovery-and-strategy-call", "_blank");
        }}
        >
          <span>Book a call</span>
          <span aria-hidden="true" className="inline-flex items-center justify-center">
            ↗
          </span>
        </button>
      </div>
    </section>
  );
}

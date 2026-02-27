import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero image@4x.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none dotted-texture text-neutral-800"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 z-[2] pointer-events-none bg-gradient-to-t from-black to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-neutral-950 px-4 py-2 mb-8">
          <svg
              className="h-4 w-4 flex-shrink-0 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <span className="shimmer-text text-sm font-medium">
              Unlock the power of technology
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight tracking-tight">
            We build, design, and scale <br />  digital products for ambitious teams.
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://calendly.com/umair_qaisar/discovery-and-strategy-call"
              target="_blank"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-white px-6 py-3.5 rounded-full font-semibold transition-colors"
            >
              Book a call
            </Link>
            <Link
              href="#how-we-work"
              className="inline-flex items-center justify-center border border-zinc-600 hover:border-zinc-500 text-white px-6 py-3.5 rounded-full font-semibold transition-colors"
            >
              How we work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Web, App & Digital Products",
    image: "/images/card-4.jpg"
  },
  {
    title: "Comms, PR & Branding",
        image: "/images/card-2.jpg"
  },
  {
    title: "Artificial Intelligence",
        image: "/images/card-3.jpg"
  },
  {
    title: "Product & Growth",
        image: "/images/card-1.jpg"
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;
      // Progress 0 when section top is at viewport top, 1 when we've scrolled 200vh into section
      const scrollDistance = 2 * windowHeight; // 200vh
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / scrollDistance)
      );
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCardTranslateY = (index: number) => {
    const step = 1 / services.length; // 0.25 per card
    const rangeStart = index * step;
    const rangeEnd = (index + 1) * step;
    if (scrollProgress <= rangeStart) return 0;
    if (scrollProgress >= rangeEnd) return -100;
    const cardProgress = (scrollProgress - rangeStart) / step;
    return -100 * cardProgress;
  };

  // Fade out "Our services" text as user scrolls down, with delay before fade starts
  const headingFadeDelay = 0.8; // stay full opacity for first 20% of scroll
  const headingOpacity =
    scrollProgress <= headingFadeDelay
      ? 1
      : Math.max(0, 1 - (scrollProgress - headingFadeDelay) / (1 - headingFadeDelay));

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-black"
      style={{ minHeight: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: headingOpacity }}
          aria-hidden
        >
          <Image
            src="/images/Light-effects@4x.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Our services heading */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none transition-opacity duration-300" style={{ opacity: headingOpacity }}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-9xl font-extralight text-white text-center mb-8">
            Our services
          </h2>
        </div>
        {/* Stacked cards - first on top with rotation, each moves up on scroll */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 h-[320px] sm:h-[380px] md:h-[420px]">
          {services.map((service, i) => {
            const translateY = getCardTranslateY(i);
            const rotation = -6 + i * 4;
            return (
              <div
                key={service.title}
                className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out"
                style={{
                  zIndex: services.length - i,
                  transform: `translateY(${translateY}%) rotate(${rotation}deg)`,
                }}
              >
                <div className="relative w-full max-w-xs h-[320px] sm:h-[380px] rounded-2xl bg-dark-800 p-6 sm:p-8 shadow-2xl flex flex-col justify-end overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 320px, 380px"
                    />
                  </div>
                  <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-blue-600 pointer-events-none" aria-hidden />
                  <h3 className="relative z-[2] text-4xl font-extralight text-white pt-2">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

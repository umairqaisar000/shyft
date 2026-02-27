import Image from "next/image";

const steps = [
  {
    title: "Problem First",
    description:
      "We focus on real business pain points before proposing solutions.",
    image: "/images/Image one@4x.png",
  },
  {
    title: "Lean & Modular",
    description:
      "Teams are assembled based on project needs - no bloat, no fluff.",
    image: "/images/Image two@4x.png",
  },
  {
    title: "Built to Scale",
    description:
      "Everything we deliver is designed to grow with your business.",
    image: "/images/Image three@4x.png",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white text-left mb-4">
          How we work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="group bg-black rounded-2xl overflow-hidden border border-dark-600 hover:border-accent/40 transition-colors"
            >
              <div className="aspect-[1] p-6 sm:p-8 bg-black">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-4xl font-extralight text-white text-center mb-3">{step.title}</h3>
                <p className="text-white text-sm sm:text-base leading-relaxed font-extralight text-center">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

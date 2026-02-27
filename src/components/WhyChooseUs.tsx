import Image from "next/image";

const cards = [
  {
    title: "Built by Practitioners",
    description:
      "We are not just consultants. We actively build products. Every decision is informed by hands-on experience in design, engineering, and delivery.",
    image: "/images/BG@4x.png",
    imageAlt: "Expertise",
  },
  {
    title: "Flexible, Senior-Led Teams",
    description:
      "You work directly with skilled professionals tailored to your problem, ensuring speed, accountability, and high-quality outcomes.",
    image: "/images/graphics@4x.png",
    imageAlt: "Partnership",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extralight text-white text-left mb-12 lg:mb-16">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-dark-600 overflow-hidden hover:border-accent/40 transition-colors flex flex-col"
            >
              <div className="p-6 sm:p-8 flex-1">
                <h3 className="font-heading text-xl sm:text-2xl font-extralight text-white text-left mb-4">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed text-left">
                  {card.description}
                </p>
              </div>
              <div className="p-6 sm:p-">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

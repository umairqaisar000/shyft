import Image from "next/image";

const members = [
  {
    name: "Ather Zaman",
    role: "Business consultant",
    description:
      "A digital transformation consultant who works with businesses to solve complex challenges through technology. Has partnered with institutions across healthcare, tourism, fashion, recruitment, talent management, and education to drive meaningful, scalable outcomes.",
    image: "/images/ather.jpeg",
  },
  {
    name: "Talha Asghar",
    role: "Software Engineer",
    description:
      "Talha builds scalable web and mobile ecosystems where high-fidelity design meets complex real-time infrastructure. He specializes in transforming intricate visions into polished, production-ready reality, ensuring every architectural decision supports a seamless user experience. Currently, he drives the technical roadmap at qlu.world, bridging the gap between engineering execution and strategic business goals.",
    image: "/images/talha.png",
  },
  {
    name: "M Umair Qaisar",
    role: "Software Engineer",
    description:
      "With a strong background in full-stack and mobile development, Umair plays a key role in building scalable, high-performance systems. He combines deep technical expertise with hands-on leadership to deliver reliable products across web and mobile platforms. His experience spans cloud infrastructure, real-time systems, and modern development frameworks. Driven by quality and impact, he consistently bridges technical execution with business goals.",
    image: "/images/umair.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extralight text-white mb-8">
          Meet Our team
        </h2>
      


        <div className="flex flex-col gap-10 lg:gap-12">
          {members.map((member) => (
            <article
              key={member.name}
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-10 text-left group"
            >
              <div className="relative w-full sm:w-80 md:w-96 sm:flex-shrink-0 aspect-square rounded-2xl overflow-hidden border border-dark-600 group-hover:border-accent/50 transition-colors">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 24rem, 26rem"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <h3 className="font-heading text-xl font-extralight text-white">{member.name}</h3>
                <p className="text-blue-500 text-sm font-medium mt-1">{member.role}</p>
                <p className="mt-4 text-white text-sm sm:text-base leading-relaxed">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

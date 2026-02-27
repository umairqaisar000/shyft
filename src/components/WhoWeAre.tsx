import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden bg-black"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/line-shapes@4x.png"
          alt="Line shapes"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:ml-auto lg:w-1/2 lg:max-w-[50%] text-left">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extralight text-white mb-5">
            Who We Are <br />
            <span className="text-blue-500">
              Our Story
            </span>
          </h2>
          <div className="space-y-4 text-white text-xl sm:text-2xl leading-relaxed max-w-xl">
            <p>
              SHYFT started as a cohort - a trusted group of builders
              experimenting, delivering, and learning together. Today, we operate
              as a consultancy designed for serious work, long-term partnerships,
              and high-impact outcomes.
            </p>
            <p>
              Our team includes product managers, engineers, creatives,
              multi-artists, and strategists working across industries and
              geographies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

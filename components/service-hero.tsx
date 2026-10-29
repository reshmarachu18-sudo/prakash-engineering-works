
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function ServiceHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061633] px-6 py-20 md:py-28">
      {/* Subtle orange accent */}
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        {/* Left: Image */}
        <Reveal>
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/photo15.png"
                alt="Custom metal fabrication project"
                width={800}
                height={600}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105 md:h-120"
                priority
              />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-xl bg-orange-500 px-6 py-4 text-white shadow-xl sm:left-8">
              <p className="text-2xl font-extrabold">Our Services</p>
              <p className="text-sm">Quality & Precision</p>
            </div>

            <div className="pointer-events-none absolute -right-3 -top-3 -z-10 h-full w-full rounded-2xl border-2 border-orange-500 md:-right-5 md:-top-5" />
          </div>
        </Reveal>

        {/* Right: Content */}
        <Reveal delay={200}>
          <div className="pt-5 md:pt-0">
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              <span className="h-0.5 w-10 bg-orange-500" />
              What We Offer
            </p>

            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Reliable Engineering
              <span className="mt-2 block text-orange-400">
                & Fabrication Solutions
              </span>
            </h1>

            <p className="mb-6 text-base leading-8 text-gray-300">
              At Prakash Engineering Works, we provide practical metal
              fabrication and engineering solutions built around quality,
              strength and durability. Every project receives careful
              attention to detail and workmanship.
            </p>

            <ul className="mb-9 space-y-4 text-gray-100">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
                  ✓
                </span>
                Custom Gates and Railings
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
                  ✓
                </span>
                Structural Roofing and Steel Trusses
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
                  ✓
                </span>
                Custom Metal Fabrication
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Request a Quote
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

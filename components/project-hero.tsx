
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#140633] px-6 py-20 md:py-28">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Centered heading */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              <span className="h-0.5 w-8 bg-orange-500" />
              Our Portfolio
              <span className="h-0.5 w-8 bg-orange-500" />
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Crafted with Skill.
              <span className="mt-2 block text-orange-400">
                Built to Last.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Discover our engineering and fabrication projects,
              where practical design meets precision workmanship.
              Every project is built with a focus on strength,
              durability and quality.
            </p>
          </div>
        </Reveal>

        {/* Featured project image */}
        <Reveal delay={150}>
          <div className="group relative">
            <div className="relative h-75 overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-100 md:h-125">
              <Image
                src="/photo14.png"
                alt="Featured metal staircase project by Prakash Engineering Works"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#140633]/95 via-[#140633]/20 to-transparent" />

              {/* Text on image */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-14">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                  Featured Work
                </p>

                <h2 className="max-w-2xl text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                  Engineering That Makes an Impact
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-gray-200">
                  From custom metal structures to detailed fabrication,
                  explore the workmanship behind our projects.
                </p>
              </div>

              {/* Orange corner accent */}
              <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 border-r-4 border-t-4 border-orange-500 sm:h-28 sm:w-28" />
            </div>
          </div>
        </Reveal>

        {/* Project highlights */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Custom Fabrication",
              description: "Metalwork tailored to your requirements.",
            },
            {
              number: "02",
              title: "Structural Projects",
              description: "Strong, practical engineering solutions.",
            },
            {
              number: "03",
              title: "Gates & Railings",
              description: "Functional designs with a quality finish.",
            },
          ].map((item, index) => (
            <Reveal key={item.number} delay={index * 150}>
              <div className="flex h-full gap-4 rounded-xl border border-white/10 bg-white/4 p-5 transition duration-300 hover:border-orange-500/60 hover:bg-white/[0.07] sm:p-6">
                <span className="text-2xl font-extrabold text-orange-400">
                  {item.number}
                </span>

                <div>
                  <h3 className="mb-2 font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to action */}
        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <Link
              href="/projects#project-gallery"
              className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore All Projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

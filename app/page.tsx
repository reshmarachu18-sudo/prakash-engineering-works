import Hero from "@/components/hero";

import Link from "next/link";

import Reveal from "@/components/reveal";
import AboutHero from "@/components/about-hero";
import ServiceHero from "@/components/service-hero";
import ProjectsHero from "@/components/project-hero";
export default function Home() {
  return (
    <main>
      <Hero />
        
        <AboutHero/>
        
        <ProjectsHero/>
      {/* Meet Our Team Section */}
      <section className="relative overflow-hidden bg-[#061633] px-6 py-24 sm:py-28">

        {/* Decorative background circles */}
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Heading */}
          <Reveal className="animate-team-heading mb-16 text-center">
           <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
  <span className="h-0.5 w-10 bg-orange-500" />
  About Our Team
</p>

            <h2 className="text-4xl font-extrabold tracking-tight text-white-950 sm:text-5xl lg:text-6xl">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>

            <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white-600 sm:text-lg">
              Behind every successful project is a dedicated team.
              We bring skill, precision and commitment to every job
              we undertake.
            </p>
          </Reveal>

          {/* Team Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Owner */}
            <Reveal delay={0}>
            <article className="animate-team-card group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/photo13.png"
                  alt="Owner of Prakash Engineering Works"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-blue-950/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <span className="absolute bottom-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Leadership
                </span>
              </div>

              <div className="relative p-7">
                <div className="absolute left-7 top-0 h-1 w-12 -translate-y-1/2 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

                <h3 className="text-2xl font-bold text-blue-950 transition-colors group-hover:text-orange-600">
                  Owner Name
                </h3>

                <p className="mt-2 font-semibold text-orange-500">
                  Owner
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Guiding every project with a focus on quality,
                  reliability and customer satisfaction.
                </p>
              </div>
            </article></Reveal>

            {/* Workers */}
            <Reveal delay={150}>
            <article className="animate-team-card group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl [animation-delay:150ms]">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/photo11.png"
                  alt="Our engineering team"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-blue-950/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <span className="absolute bottom-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Skilled Team
                </span>
              </div>

              <div className="relative p-7">
                <div className="absolute left-7 top-0 h-1 w-12 -translate-y-1/2 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

                <h3 className="text-2xl font-bold text-blue-950 transition-colors group-hover:text-orange-600">
                  Our Team
                </h3>

                <p className="mt-2 font-semibold text-orange-500">
                  Skilled Workers
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Dedicated professionals working together to deliver
                  dependable engineering and fabrication work.
                </p>
              </div>
            </article></Reveal>

            {/* Workshop */}
            <Reveal delay={300}>
            <article className="animate-team-card group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl [animation-delay:300ms]">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/photo1.png"
                  alt="Prakash Engineering Works workshop"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-blue-950/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <span className="absolute bottom-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Our Workplace
                </span>
              </div>

              <div className="relative p-7">
                <div className="absolute left-7 top-0 h-1 w-12 -translate-y-1/2 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

                <h3 className="text-2xl font-bold text-blue-950 transition-colors group-hover:text-orange-600">
                  Our Workshop
                </h3>

                <p className="mt-2 font-semibold text-orange-500">
                  Engineering & Fabrication
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Our workspace is where craftsmanship, careful
                  workmanship and practical solutions come together.
                </p>
              </div>
            </article></Reveal>

          </div>

          {/* View Photos Button */}
          <Reveal delay={150} className="animate-team-heading mt-16 text-center">
            <Link
              href="/photos"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-950 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            >
              View All Photos
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </Reveal>

        </div>
      </section>
    </main>
  );
}

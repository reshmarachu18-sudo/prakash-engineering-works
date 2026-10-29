"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#330610]  px-6 py-20 md:py-28">
      {/* Subtle orange glow */}
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        {/* Left: Image */}
        <Reveal>
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/comp.png"
                alt="Engineering and metal fabrication work"
                width={800}
                height={600}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105 md:h-120"
                priority
              />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-xl bg-orange-500 px-6 py-4 text-white shadow-xl sm:left-8">
              <p className="text-2xl font-extrabold">Quality</p>
              <p className="text-sm">You Can Trust</p>
            </div>

            <div className="pointer-events-none absolute -right-3 -top-3 -z-10 h-full w-full rounded-2xl border-2 border-orange-500 md:-right-5 md:-top-5" />
          </div>
        </Reveal>

        {/* Right: About content */}
        <Reveal delay={200}>
          <div className="pt-5 md:pt-0">
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              <span className="h-0.5 w-10 bg-orange-500" />
              About Our Company
            </p>

            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Building Strength
              <span className="mt-2 block text-orange-400">
                Creating Trust
              </span>
            </h1>

            <p className="mb-5 text-base leading-8 text-gray-300">
              Welcome to Prakash Engineering Works. We are dedicated to
              delivering quality engineering and metal fabrication
              solutions with a focus on strength, precision and durability.
            </p>

            <p className="mb-8 text-base leading-8 text-gray-300">
              Every project reflects our commitment to careful workmanship,
              reliable service and customer satisfaction. Our goal is to
              turn your requirements into strong, practical solutions.
            </p>

            <div className="mb-9 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-lg font-bold text-orange-400">
                  Quality First
                </p>
                <p className="text-sm leading-6 text-gray-300">
                  Careful work and attention to detail.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-1 text-lg font-bold text-orange-400">
                  Built to Last
                </p>
                <p className="text-sm leading-6 text-gray-300">
                  Durable solutions for your needs.
                </p>
              </div>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore Our Projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

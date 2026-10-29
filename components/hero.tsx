
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-150 items-center overflow-hidden bg-blue-950 sm:min-h-175">

      {/* Background Welding Photo */}
      <img
        src="/photo12.png"
        alt="Welding work at Prakash Engineering Works"
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/95 via-blue-950/70 to-transparent" />

      {/* Details on Top of Photo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-orange-400 animate-hero-fade">
            Prakash Engineering Works
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl animate-hero-up">
            Engineering Excellence,
            <span className="mt-2 block text-orange-400">
              Built to Last.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg animate-hero-up-delay">
            Delivering quality engineering, fabrication, and
            welding workmanship with strength, precision,
            and reliability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-hero-up-later">
            <Link
              href="/contact"
              className="rounded-lg bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Contact Us →
            </Link>

            <Link
              href="/projects"
              className="rounded-lg border border-white/50 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-blue-950"
            >
              View Our Projects
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white animate-hero-fade-later">
            <span>✓ Quality Workmanship</span>
            <span>✓ Reliable Service</span>
            <span>✓ Customer Satisfaction</span>
          </div>

        </div>
      </div>
    </section>
  );
}

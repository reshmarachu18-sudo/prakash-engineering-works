import Link from "next/link";
import Reveal from "@/components/reveal";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white" > <Reveal delay={300}>
         
      
        

        <p className="mb-3 font-semibold uppercase tracking-[3px] text-orange-400">
          Who We Are
        </p>

        <h1 className="text-4xl font-extrabold md:text-5xl">
          About Us
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
          Welcome to Prakash Engineering Works, where quality,
          precision, and dedication come together.
        </p></Reveal>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <Reveal delay={300}>
        <div>
          <p className="mb-3 font-bold uppercase tracking-widest text-orange-500">
            Prakash Engineering Works
          </p>

          <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
            Building Quality with Every Project
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            At Prakash Engineering Works, we are committed to
            delivering reliable engineering solutions with a focus
            on quality workmanship, attention to detail, and
            customer satisfaction.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            We believe every project deserves careful planning,
            durable materials, and professional execution. Our
            goal is to build lasting relationships with our
            customers through dependable service.
          </p>
        </div></Reveal>

        {/* Image placeholder */}
        <Reveal className="flex min-h-72 items-center justify-center rounded-2xl bg-gray-100 p-8">
          <div className="text-center">
            <Link href="/" className="flex shrink-0 items-center gap-3">
             <img
             src="/logo-new.png"
             alt="Prakash Engineering Works Logo"
             className="mx-auto h-32 w-32 object-contain"
             /></Link>
            <p className="mt-4 text-lg font-semibold text-blue-950">
              Prakash Engineering Works
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Quality • Reliability • Commitment
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-6 py-16">
        <Reveal delay={300} className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-blue-950">
            Why Choose Us?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Quality Work
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                We focus on quality workmanship and attention
                to every detail.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Reliable Service
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                We aim to provide dependable service and
                practical engineering solutions.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Customer Satisfaction
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                We work to understand customer needs and
                deliver results they can trust.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
import Link from "next/link";
import Reveal from "@/components/reveal";
const services = [
  {
    number: "01",
    icon: "⚙️",
    title: "Engineering Works",
    description:
      "Practical engineering solutions designed around your project requirements, with a focus on quality and reliability.",
  },
  {
    number: "02",
    icon: "🔩",
    title: "Metal Fabrication",
    description:
      "Custom metalwork and fabrication solutions made with careful measurements and attention to detail.",
  },
  {
    number: "03",
    icon: "🏗️",
    title: "Structural Works",
    description:
      "Fabrication and installation support for suitable metal structures and project components.",
  },
  {
    number: "04",
    icon: "🛠️",
    title: "Repair & Maintenance",
    description:
      "Repair and maintenance assistance to help keep equipment and metal components in working condition.",
  },
  {
    number: "05",
    icon: "📐",
    title: "Custom Projects",
    description:
      "Made-to-order solutions based on your dimensions, drawings, design ideas, and project needs.",
  },
  {
    number: "06",
    icon: "🤝",
    title: "Project Support",
    description:
      "Friendly communication and practical support from the initial discussion through project completion.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page heading */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white"><Reveal>
        <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-orange-400">
          What We Do
        </p>

        <h1 className="text-4xl font-extrabold md:text-5xl">
          Our Services
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
          Reliable engineering solutions with a commitment to
          quality workmanship, precision, and customer satisfaction.
        </p></Reveal>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-950">
            How We Can Help You
          </h2>
          <p className="mt-4 text-gray-600">
            Solutions tailored to your project requirements.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              <Reveal className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-3xl transition group-hover:bg-orange-500">
                  {service.icon}
                </div>

                <span className="text-3xl font-extrabold text-gray-100">
                  {service.number}
                </span>
              </Reveal>

             <Reveal> <h3 className="mt-7 text-xl font-bold text-blue-950">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
              >
                Enquire Now <span aria-hidden="true">→</span>
              </Link></Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gray-50 px-6 py-16">
        <Reveal className="mx-auto max-w-4xl rounded-3xl bg-blue-950 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-extrabold">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            Tell us what you need. We would be happy to discuss
            your requirements and explore a suitable solution.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
          >
            Contact Us Today →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
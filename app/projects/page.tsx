
"use client";

import Reveal from "@/components/reveal";
import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Metal Staircase Fabrication",
    title: "Custom Metal Staircases",
    description:
      "Strong, durable and beautifully finished metal staircases designed to suit residential and commercial spaces. We focus on quality fabrication, safety and long-lasting performance.",
    image: "/photo14.png",
  },
  {
    number: "02",
    category: "Structural Roofing & Truss Work",
    title: "Structural Roofing & Steel Trusses",
    description:
      "Reliable steel roofing structures and trusses fabricated with attention to strength, stability and precision. Suitable for workshops, commercial buildings and other structural applications.",
    image: "/comp.png",
  },
  {
    number: "03",
    category: "Designer Gates & Railings",
    title: "Designer Gates & Railings",
    description:
      "Custom-fabricated gates and railings combining attractive designs with strength and security. Choose a style that suits your property and requirements.",
    image: "/photo15.png",
  },
  {
    number: "04",
    category: "Polycarbonate Roofing & Canopies",
    title: "Polycarbonate Roofs & Canopies",
    description:
      "Practical roofing and canopy solutions designed to provide shelter while allowing natural light. Suitable for entrances, parking spaces, balconies and outdoor areas.",
    image: "/photo16.png",
  },
  {
    number: "05",
    category: "Heavy-Duty Water Tank Stands",
    title: "Heavy-Duty Steel Tank Stands",
    description:
      "Sturdy steel tank stands fabricated for dependable support. Each project is planned around the required dimensions, load requirements and installation space.",
    image: "/photo17.png",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Projects Hero */}
      <section
        className="relative isolate overflow-hidden bg-cover bg-center px-6 py-20 text-white md:py-28"
        style={{ backgroundImage: "url('/photo21.png')" }}
      >
        <div className="absolute inset-0 -z-10 bg-blue-950/65" />

        <Reveal className="relative mx-auto max-w-7xl" delay={100}>
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-orange-400">
            Prakash Engineering Works
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Our Projects
            <span className="mt-2 block text-orange-400">
              Built with Strength and Precision
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
            Explore our metal fabrication and engineering projects,
            created with a focus on quality, durability and practical design.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
          >
            Discuss Your Project <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      {/* Full Background Projects Gallery */}
      <section
        className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-16 md:py-24"
        
      >
        {/* Dark overlay behind the entire gallery */}
        <div className="absolute inset-0 -z-10 bg-blue-950/80" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mb-10" delay={100}>
            <p className="mb-3 font-semibold uppercase tracking-widest text-orange-400">
              What We Have Built
            </p>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Our Recent Work
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-200">
              Select any project to view its details and learn more about
              our fabrication services.
            </p>
          </Reveal>

          {/* Project Cards */}
          <div className="grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal
                key={project.number}
                delay={index * 100}
                className="h-full"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                  className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/20 bg-white text-left shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-400"
                >
                  <div className="relative h-56 shrink-0 overflow-hidden bg-blue-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <span className="absolute left-4 top-4 rounded-md bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-md">
                      {project.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-sm font-semibold text-orange-600">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-bold text-blue-950 transition group-hover:text-orange-600">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>

                    <p className="mt-5 font-semibold text-blue-950">
                      View Project Details
                      <span className="ml-2 inline-block text-orange-500 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative isolate overflow-hidden bg-cover bg-center px-6 py-16"
      >
       

        <Reveal className="relative mx-auto max-w-4xl rounded-3xl border bg-[#172554]/90 border-orange-400/40 px-7 py-12 text-center text-white shadow-xl sm:px-1">
          <p className="mb-3 font-semibold uppercase tracking-widest text-orange-400">
            Let's Build Together
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-200">
            Contact Prakash Engineering Works to discuss your requirements
            and find the right fabrication solution.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
          >
            Contact Us <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      {/* Project Details Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-popup-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-3xl leading-none text-gray-900 shadow-md transition hover:bg-orange-500 hover:text-white"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-56 w-full bg-gray-100 object-cover sm:h-72"
            />

            <div className="p-6 sm:p-9">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-600">
                Project {selectedProject.number} · {selectedProject.category}
              </p>

              <h2
                id="project-popup-title"
                className="text-2xl font-bold text-blue-950 sm:text-3xl"
              >
                {selectedProject.title}
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                {selectedProject.description}
              </p>

              <div className="mt-7 rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Project Number</p>
                <p className="mt-1 font-bold text-blue-950">
                  {selectedProject.number}
                </p>
              </div>

              <Link
                href="/contact"
                onClick={() => setSelectedProject(null)}
                className="mt-7 inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Enquire About This Project →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

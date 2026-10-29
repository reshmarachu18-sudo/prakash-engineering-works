
"use client";

import Reveal from "@/components/reveal";
import { useEffect, useState } from "react";
import Link from "next/link";

const photos = [
  { title: "WE", category: "Our Team", image: "/photo10.png" },
  { title: "Curved Iron Grill Work", category: "Workshop Photos", image: "/photo1.png" },
  { title: "Full Building Structural Work", category: "Completed Projects", image: "/comp.png" },
  { title: "Yard", category: "Machines and Equipment", image: "/photo3.png" },
  { title: "Modern Designer Gate", category: "Gates and Railings", image: "/photo8.png" },
  { title: "Roof Pergola", category: "Completed Projects", image: "/photo9.png" },
  { title: "Roof Frame", category: "Workshop Photos", image: "/photo6.png" },
  { title: "Metal Main Gate", category: "Gates and Railings", image: "/photo7.png" },
];

const categories = [
  "All",
  "Completed Projects",
  "Workshop Photos",
  "Gates and Railings",
  "Machines and Equipment",
  "Our Team",
];

export default function PhotosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const selectedPhoto =
    selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  const closePopup = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + 1) % filteredPhotos.length
    );
  };

  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, filteredPhotos.length]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-linear-to-br from-blue-950 to-blue-800 px-6 py-20 text-center text-white">
        <Reveal delay={200}>
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-orange-400">
            Our Gallery
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Our Photos</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Explore our projects, workshop activities, gates, railings,
            and engineering equipment.
          </p>
        </Reveal>
      </section>

      {/* Category Filters and Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal delay={300}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-500 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPhotos.map((photo, index) => (
              <article
                key={photo.image}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="block w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500"
                  aria-label={`View ${photo.title} photo`}
                >
                  <div className="relative h-60 overflow-hidden bg-gray-200">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-950/0 transition group-hover:bg-blue-950/35">
                      <span className="translate-y-3 rounded-full bg-orange-500 px-5 py-3 font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                        View Photo ↗
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-500">
                      {photo.category}
                    </p>
                    <h2 className="text-lg font-bold text-blue-950">
                      {photo.title}
                    </h2>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Contact Banner */}
        <section className="mt-16 rounded-2xl bg-blue-950 px-6 py-10 text-center text-white md:px-12">
          <Reveal delay={200}>
            <h2 className="text-2xl font-bold md:text-3xl">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-blue-100">
              Contact Prakash Engineering Works to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Contact Us →
            </Link>
          </Reveal>
        </section>
      </section>

      {/* Image Popup */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closePopup}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-orange-500"
            aria-label="Close photo"
          >
            ×
          </button>

          {/* Previous */}
          {filteredPhotos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-orange-500 sm:left-6"
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          {/* Selected image and caption */}
          <div
            className="flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl"
            />

            <div className="mt-5 text-center">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {selectedPhoto.title}
              </h2>
              <p className="mt-1 text-sm text-orange-400">
                {selectedPhoto.category}
              </p>
              <p className="mt-2 text-sm text-gray-300">
                {(selectedIndex ?? 0) + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {filteredPhotos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-orange-500 sm:right-6"
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </main>
  );
}

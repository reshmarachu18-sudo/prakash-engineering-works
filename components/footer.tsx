
"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-blue-950 text-white"style={{ backgroundImage: "url('/photo12.png')" }}
      >
        {/* Dark overlay behind the entire gallery */}
        <div className="absolute inset-0 -z-10 bg-blue-950/80" />
      
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">

        {/* Company Information */}
        
        <div>
          
          <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-new.png"
            alt="Prakash Engineering Works"
            width={45}
            height={45}
            priority
            className="h-10 w-10 object-contain"
          /></Link>
          <h2 className="text-2xl font-bold">
            PRAKASH
            <span className="text-orange-500"> ENGINEERING</span>
            <span className="block text-sm tracking-widest text-gray-300">
              WORKS
            </span>
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-gray-300">
            Quality Engineering and Fabrication.
            Dedicated to reliable workmanship and customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-orange-500">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="transition hover:text-orange-400">Home</Link></li>
            <li><Link href="/about" className="transition hover:text-orange-400">About Us</Link></li>
            <li><Link href="/services" className="transition hover:text-orange-400">Services</Link></li>
            <li><Link href="/projects" className="transition hover:text-orange-400">Projects</Link></li>
            <li><Link href="/contact" className="transition hover:text-orange-400">Contact Us</Link></li>
          </ul>
        </div>

       
{/* Contact Information */}
<div>
  <h3 className="mb-4 text-lg font-bold text-orange-500">
    Contact Us
  </h3>

  <ul className="space-y-4 text-gray-300">
    {/* Google Maps */}
    <li className="flex items-start gap-2">
      <span>📍</span>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Prakash+Engineering+Works+Palakkal+Thrissur"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-orange-400"
      >
        Prakash Engineering Works, Palakkal, Thrissur
      </a>
    </li>

    {/* Phone call */}
    <li className="flex items-start gap-2">
      <span>📞</span>
      <a
        href="tel:+911234567890"
        className="transition hover:text-orange-400"
      >
        1234567890
      </a>
    </li>

    {/* Email */}
    <li className="flex items-start gap-2">
      <span>✉️</span>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=prakashengineeringworks@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="break-all transition hover:text-orange-400"
      >
        prakashengineeringworks@gmail.com
      </a>
    </li>
  </ul>

  <Link
    href="/contact"
    className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
  >
    Get in Touch
  </Link>
</div>

      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 px-6 py-5 text-center text-sm text-gray-300">
        © {year ?? 2026} Prakash Engineering Works.
        All rights reserved.
      </div>
    </footer>
  );
}

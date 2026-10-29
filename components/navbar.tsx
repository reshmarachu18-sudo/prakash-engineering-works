import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-new.png"
            alt="Prakash Engineering Works"
            width={45}
            height={45}
            priority
            className="h-10 w-10 object-contain"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-wide text-blue-950">
              PRAKASH
            </span>
            <span className="text-[10px] font-bold tracking-[2px] text-orange-500">
              ENGINEERING WORKS
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-semibold text-gray-700 transition hover:text-orange-500">
            Home
          </Link>

          <Link href="/about" className="text-sm font-semibold text-gray-700 transition hover:text-orange-500">
            About Us
          </Link>

          <Link href="/services" className="text-sm font-semibold text-gray-700 transition hover:text-orange-500">
            Services
          </Link>

          <Link href="/photos" className="text-sm font-semibold text-gray-700 transition hover:text-orange-500">
            Photos
          </Link>

          <Link href="/projects" className="text-sm font-semibold text-gray-700 transition hover:text-orange-500">
            Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}
import Reveal from "@/components/reveal";
import Link from "next/link";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-linear-to-br from-blue-950 to-blue-800 px-6 py-20 text-center text-white"><Reveal delay={200}>
        <h1 className="text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Get in touch with Prakash Engineering Works.
          We are happy to help with your requirements.
        </p></Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <Reveal delay={200}>
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Let's Talk
          </h2>

          <p className="mb-8 leading-7 text-gray-600">
            Have a question or want to discuss a project?
            Contact us using the details below.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-blue-900">
                📍 Address
              </h3>
              <p className="mt-1 text-gray-600">
                Prakash Engineering Works,Palakkal,Thrissur
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">
                📞 Phone
              </h3>
              <p className="mt-1 text-gray-600">
                1234567890
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900">
                ✉️ Email
              </h3>
              <p className="mt-1 text-gray-600">
                prakashengineeringworks@gmail.com
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Back to Home
          </Link>
        </Reveal>

        <Reveal delay={200} className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your requirements"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-700"
                required
              />
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  { title: "GST Registration", desc: "Fast, compliant GST registrations for all business types." },
  { title: "GST Returns", desc: "Accurate return preparation, reconciliation and filing." },
  { title: "Company Incorporation", desc: "End-to-end company setup and statutory registrations." },
  { title: "ROC Compliance", desc: "Timely ROC filings, annual returns and board support." },
  { title: "Tax Advisory", desc: "Strategic tax planning and dispute resolution support." },
  { title: "Annual Filings", desc: "Complete annual compliance and audit readiness services." },
];

const testimonials = [
  {
    quote:
      "Renu and her team made our GST transition effortless — expert, timely and reliable.",
    name: "Amit K., Founder",
    company: "TechWorks",
  },
  {
    quote:
      "Professional guidance and prompt filings. Highly recommended for SMEs.",
    name: "Priya S., CFO",
    company: "GreenFoods Pvt Ltd",
  },
  {
    quote: "Accurate compliance and excellent advisory. Our go-to firm for tax.",
    name: "Rohan M., CEO",
    company: "BuildRight",
  },
];

function useAutoAnimate() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".animate-on-view").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const containerRef = useAutoAnimate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen font-sans">
      <main className="px-6 py-12" ref={containerRef}>
        {/* Hero: image LEFT, copy RIGHT */}
        <section className="relative mb-12 flex flex-col-reverse gap-8 sm:flex-row sm:items-center">
          <div className="mt-6 w-full sm:mt-0 sm:w-1/2 flex justify-center sm:justify-start">
              <div className="animate-on-view opacity-0 translate-y-6 transition-all duration-700">
              <div className=" bg-white p-6 ">
                <div className="flex items-center">
                  <Image
                    src="/renu.png"
                    alt="Renu"
                    width={320}
                    height={320}
                    className=" object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 rounded-lg bg-emerald-800 p-8 shadow-lg">
            <div className="animate-on-view opacity-0 translate-y-6 transition-all duration-700 sm:pl-8">
              <h1 className="text-4xl font-extrabold leading-tight text-white">
                Simplifying GST & Corporate Compliance with Precision
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white">
                Trusted, timely and practical compliance solutions — tailored for SMEs and
                growing enterprises. We protect your obligations so you can focus on growth.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:brightness-95"
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => (window.location = "tel:+911234567890")}
                  className="inline-flex items-center gap-2 rounded-md border border-emerald-600 bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:brightness-95"
                >
                  Talk to an Expert
                </button>
              </div>

              <div className="mt-6 rounded-lg bg-emerald-800 p-3">
                <div className="text-3xl font-extrabold text-white">Renu Sehgal</div>
                <div className="mt-1 text-base text-white">Senior GST Practitioner & Compliance Advisor</div>
                <div className="mt-3 text-sm text-white">5+ years experience • Trusted by 100+ clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-emerald-800">Our Services</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="animate-on-view opacity-0 translate-y-6 transition-all duration-700 rounded-xl border border-emerald-800 bg-emerald-800 p-6 shadow-md"
              >
                <h4 className="mb-2 text-lg font-semibold text-white">{s.title}</h4>
                <p className="text-sm text-white">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credibility */}
        <section className="mb-12">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-emerald-800 bg-emerald-800 p-6 shadow-sm sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
                <div className="text-3xl font-extrabold text-white">5+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
            <div className="text-center sm:text-left">
                <div className="text-3xl font-extrabold text-white">100+</div>
              <div className="text-sm text-white">Clients Trusted</div>
            </div>
            <div className="text-center sm:text-left">
                <div className="text-3xl font-extrabold text-white">99.9%</div>
              <div className="text-sm text-white">Timely Compliance Assurance</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-emerald-800">What Clients Say</h3>
          <div className="relative">
            <div className="rounded-xl border border-emerald-800 bg-emerald-800 p-6 shadow-md">
              <div className="min-h-[120px]">
                <p className="mb-4 text-lg text-white">"{testimonials[index].quote}"</p>
                <div className="text-sm text-white  ">— {testimonials[index].name}, {testimonials[index].company}</div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="rounded-full bg-gray-100 p-2 shadow">
                ‹
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full ${i === index ? "bg-teal-500" : "bg-teal-300"}`}></button>
                ))}
              </div>
              <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)} className="rounded-full bg-teal-500 p-2 shadow">
                ›
              </button>
            </div>
          </div>
        </section>

        {/* Contact quick section */}
        <section id="contact" className="mb-12 rounded-xl border border-emerald-800 bg-emerald-800 p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-white">Ready to simplify compliance?</h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="mailto:contact@renusehgalco.com" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:brightness-95">Book Consultation</a>
            <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-md border border-emerald-600 bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-md hover:brightness-95  ">Talk to an Expert</a>
            <div className="ml-auto text-sm text-white">Or email us at <a className="text-white" href="mailto:contact@renusehgalco.com">contact@renusehgalco.com</a></div>
          </div>
        </section>

        {/* Footer rendered by RootLayout */}
      </main>
    </div>
  );
}

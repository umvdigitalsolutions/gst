import Image from "next/image";

const services = [
  {
    title: "GST Registration",
    summary: "Fast, compliant GST registrations for proprietors, partnerships, LLPs and companies.",
    details:
      "We handle the entire registration lifecycle: document checklist, application filing, ARN tracking and post-registration guidance (returns, invoicing and compliance calendar). Typical turnaround: 3–7 working days depending on document readiness.",
    bullets: [
      "UIN/ARN tracking & support",
      "GSTIN setup & provisional guidance",
      "Registration for e-commerce sellers"
    ],
  },
  {
    title: "GST Returns & Reconciliation",
    summary: "Accurate monthly/quarterly return preparation and filing with reconciliations.",
    details:
      "We prepare returns (GSTR-1, GSTR-3B, CMP-08, etc.), reconcile sales/purchase ledgers, highlight tax liabilities, and file on your behalf. We also manage adjustments, revisions and correspondence with tax authorities.",
    bullets: ["Sales/purchase reconciliation", "Input tax credit (ITC) review", "Amendments & rectifications"],
  },
  {
    title: "Company Incorporation & ROC Compliance",
    summary: "End-to-end company setup with statutory filings and annual compliance.",
    details:
      "From company incorporation (SPICe filings) to DIN/DSC assistance, registered office setup and ongoing ROC filings (annual returns, board resolutions), we keep your corporate housekeeping up-to-date.",
    bullets: ["Incorporation package", "Annual ROC/AGM support", "Director records & registers"],
  },
  {
    title: "Tax Advisory & Dispute Support",
    summary: "Strategic tax planning and representation during notices and audits.",
    details:
      "We provide practical advisory on GST and corporate tax exposure, prepare responses to notices, assist during audits and support resolution steps to minimize assessments and penalties.",
    bullets: ["Notice & show-cause response", "Audit representation", "Tax-efficient structuring"],
  },
  {
    title: "Annual Filings & Audit Readiness",
    summary: "Complete annual compliance and support for statutory audits.",
    details:
      "We prepare financial filings required for tax and ROC, ensure books are audit-ready, coordinate with auditors and provide a compliance checklist to remove surprises at year-end.",
    bullets: ["Annual filing calendar", "Pre-audit checklist", "Support during statutory audits"],
  },
];

export default function ServicesPage() {
  return (
    <div className="font-sans">
        {/* Hero */}
        <section className="mb-12">
          <div className="rounded-2xl border border-emerald-800 bg-emerald-800 p-8 shadow-lg">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h1 className="text-3xl font-extrabold text-white">Our Services — GST & Compliance</h1>
                <p className="mt-3 text-white ">
                  Practical, timely and compliant tax and corporate services for SMEs and
                  growing enterprises. Choose the service you need below or contact us for a
                  custom engagement.
                </p>

                <div className="mt-6 flex gap-3">
                  <a href="/" className="inline-flex items-center gap-2 rounded-md bg-white/50 px-4 py-2 text-sm font-medium hover:bg-gray-100">Back to Home</a>
                  <a href="mailto:contact@renusehgalco.com" className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white">Contact Us</a>
                </div>
              </div>

              <div className="sm:w-1/2 flex justify-center sm:justify-end">
                <div className="w-48">
                  <Image src="/renu.png" alt="Renu" width={192} height={192} className="rounded-xl object-contain" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section id="services-list" className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Detailed Services</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-black">{s.title}</h3>
                <p className="mt-2 text-gray-700">{s.summary}</p>
                <p className="mt-3 text-sm text-gray-700">{s.details}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-emerald-200">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xs">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-12 rounded-xl border border-gray-100 bg-white p-6">
          <h3 className="mb-4 text-xl font-semibold">How we work</h3>
          <div className="grid gap-4 sm:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-black">1</div>
              <div className="text-sm font-medium text-black">Assess</div>
              <div className="text-xs text-gray-700">Discuss scope & docs</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-black">2</div>
              <div className="text-sm font-medium text-black">Plan</div>
              <div className="text-xs text-gray-700">Timeline & fees</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-black">3</div>
              <div className="text-sm font-medium text-black">Execute</div>
              <div className="text-xs text-gray-700">Prepare, reconcile, file</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-black">4</div>
              <div className="text-sm font-medium text-black">Support</div>
              <div className="text-xs text-gray-700">Ongoing advice & help</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h3 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h3>
          <div className="space-y-4">
              <div className="rounded-lg border border-gray-100 bg-white p-4">
                <div className="font-medium">How long does GST registration take?</div>
                <div className="mt-2 text-sm text-gray-700">Typically 3–7 working days after documents are submitted and verified. Complex cases may take longer.</div>
              </div>

              <div className="rounded-lg border border-gray-100 bg-white p-4">
                <div className="font-medium">Can you handle audits and notices?</div>
                <div className="mt-2 text-sm text-gray-700">Yes — we prepare responses, represent clients during audits and help negotiate settlements where appropriate.</div>
              </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="rounded-lg border border-emerald-900/20 bg-gradient-to-r from-emerald-700 via-teal-600 to-teal-500 p-6 text-center">
            <h4 className="text-lg font-semibold text-emerald-100">Ready to simplify compliance?</h4>
            <p className="mt-2 text-emerald-200">Get a clear quote and timeline — we’ll guide you through every step.</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a href="mailto:contact@renusehgalco.com" className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 text-sm font-medium text-emerald-900">Request a Quote</a>
              <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-md border border-emerald-900/20 px-4 py-2 text-sm font-medium text-emerald-100">Call Now</a>
            </div>
          </div>
        </section>
    </div>
  );
}

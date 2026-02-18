export const metadata = {
  title: 'Contact — Renu Sehgal & Co.',
  description: 'Get in touch with Renu Sehgal & Co. for GST, company compliance and tax services.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center">
      <section className="max-w-4xl mx-auto px-6 py-24 w-full">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-emerald-400 opacity-95"></div>
          <div className="relative z-10 p-8 md:p-12 text-white">
            <div className="flex items-start gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 rounded-full flex items-center justify-center">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 16.5V21a1 1 0 0 1-1.1 1 19 19 0 0 1-8.9-3.1 19 19 0 0 1-6.4-6.4A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.5a1 1 0 0 1 1 .8c.2 1 .6 2.2 1.3 3.4a1 1 0 0 1-.2 1l-2 2a16 16 0 0 0 6.4 6.4l2-2a1 1 0 0 1 1-.2c1.2.7 2.4 1.1 3.4 1.3a1 1 0 0 1 .8 1V21z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-extrabold">Need help fast?</h1>
                <p className="mt-2 text-white/90">Call our team for immediate assistance with GST, compliance, or tax queries.</p>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="tel:+911234567890"
                    className="inline-flex items-center gap-3 bg-white text-indigo-700 font-semibold px-5 py-3 rounded-full text-lg shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M21 16.5V21a1 1 0 0 1-1.1 1 19 19 0 0 1-8.9-3.1A19 19 0 0 1 2 12.5 19 19 0 0 1 5.9 4.6 1 1 0 0 1 6.8 4h4.7a1 1 0 0 1 1 .8c.2 1 .6 2.2 1.3 3.4a1 1 0 0 1-.2 1l-2 2a16 16 0 0 0 6.4 6.4l2-2a1 1 0 0 1 1-.2c1.2.7 2.4 1.1 3.4 1.3a1 1 0 0 1 .8 1V21z" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Call Now
                  </a>

                  <span className="text-white/90">or</span>

                  <a href="mailto:contact@renusehgalco.com" className="text-white/90 underline">Email us</a>
                </div>

                <div className="mt-6 text-sm text-white/80">
                  <div>Mon — Fri: 9:30 AM — 6:30 PM</div>
                  <div className="mt-1">Response time: Typically within 1 business day</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-white/6 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>
    </main>
  );
}

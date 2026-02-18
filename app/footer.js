"use client";

export default function Footer() {
  return (
    <footer className="bg-indigo-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <div>
          <div className="text-lg font-semibold">Renu Sehgal & Co.</div>
          <div className="text-sm text-emerald-200">GST • Company Compliance • Tax Advisory</div>
        </div>

        <div className="space-y-1 text-sm text-emerald-200 text-right">
          <div>
            Email: <a className="underline" href="mailto:contact@renusehgalco.com">contact@renusehgalco.com</a>
          </div>
          <div>
            Phone: <a className="underline" href="tel:+911234567890">+91 12345 67890</a>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-900/20"> 
      </div>
    </footer>
  );
}

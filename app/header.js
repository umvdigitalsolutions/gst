import Link from "next/link";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-emerald-800 text-emerald-100 fixed w-full z-50 ">
      <div className="flex items-center justify-between gap-6 px-6 py-5 mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
          <div className="rounded-md bg-emerald-900/20 p-2">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.08" />
              <path d="M6 16L10 8L14 16" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold">Renu Sehgal & Co.</div>
            <div className="text-xs text-emerald-200">GST • Company Compliance • Tax</div>
          </div>
        </div>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.label === "Contact" ? (
                  <Link href={item.href} className="rounded-md bg-emerald-400 px-3 py-1 text-sm font-medium text-emerald-900 hover:brightness-95">
                    {item.label}
                  </Link>
                ) : (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+911234567890" className="hidden items-center gap-2 rounded-md bg-emerald-900/20 px-3 py-1 text-sm sm:inline-flex hover:bg-emerald-900/30">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19 19 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a2 2 0 0 1 2 1.72c.12 1.05.36 2.08.72 3.03a2 2 0 0 1-.45 2.11L9.91 12.91a16 16 0 0 0 6.18 6.18l1.98-1.43a2 2 0 0 1 2.11-.45c.95.36 1.98.6 3.03.72a2 2 0 0 1 1.72 2z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            +91 12345 67890
          </a>

          <a href="mailto:contact@renusehgalco.com" className="rounded-md bg-emerald-400 px-3 py-1 text-sm font-medium text-emerald-900 hover:brightness-95">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

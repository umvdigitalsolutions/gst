import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Renu Sehgal & Co. — GST & Compliance",
  description:
    "GST practice, company compliances and tax compliance services for small and medium businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-100 via-white-300 to-slate-100">
          <Header />

          <main className="flex-1">
            <div className="mx-auto max-w-6xl mt-[64px] px-6 py-10 with-watermark text-black rounded-2xl">
              {children}
              </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

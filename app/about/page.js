
import Image from 'next/image';

export const metadata = {
	title: 'About — Renu Sehgal & Co.',
	description: 'About Renu Sehgal & Co. — GST, Company Compliance and Tax services with trusted advisors and high-performance solutions.',
};

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-white/50 via-white/40 to-white/30 text-indigo-900">
			<section className="max-w-7xl mx-auto px-6 py-3 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<h1 className="text-3xl md:text-4xl font-extrabold leading-tight">About Renu Sehgal & Co.</h1>
						<p className="mt-4 text-lg text-slate-700 max-w-xl">
							We provide expert GST, company compliance and tax advisory services to small and medium businesses.
							Our team focuses on clear communication, timely filings and pragmatic tax planning to help your
							company stay compliant and grow.
						</p>

						<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
							<div className="p-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg">
								<div className="text-2xl font-semibold">5+</div>
								<div className="text-sm text-slate-600">Years Experience</div>
							</div>
							<div className="p-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg">
								<div className="text-2xl font-semibold">Secure</div>
								<div className="text-sm text-slate-600">Confidential Service</div>
							</div>
							<div className="p-4 bg-white/60 backdrop-blur-sm border border-white/20 rounded-lg">
								<div className="text-2xl font-semibold">Trusted</div>
								<div className="text-sm text-slate-600">Local & Accessible</div>
							</div>
						</div>

						<div className="mt-8 flex gap-4">
							<a
								href="/contact"
								className="inline-flex items-center justify-center rounded-md bg-indigo-700 text-white px-4 py-2 font-medium shadow hover:brightness-95 transition"
							>
								Contact Us
							</a>
							<a
								href="/services"
								className="inline-flex items-center justify-center rounded-md border border-indigo-700 text-indigo-700 px-4 py-2 font-medium hover:bg-indigo-50 transition"
							>
								Our Services
							</a>
						</div>
					</div>

					<div className="order-first md:order-last">
						<div className="w-full">
							<div className="bg-gradient-to-br from-indigo-50 to-emerald-50 p-0">
								<div className="w-full h-96 md:h-[32rem] bg-gradient-to-r from-indigo-200 to-emerald-200 flex items-start justify-center">
									<div className="relative w-full h-full">
										<Image
											src="/office.png"
											alt="Office"
											fill
											className="object-cover object-top"
											priority
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					<article className="p-6 bg-white/50 backdrop-blur-sm border border-white/10 rounded-lg">
						<h3 className="font-semibold text-lg">Our Approach</h3>
						<p className="mt-2 text-sm text-slate-700">Practical compliance, transparent pricing and proactive support tailored to your business.</p>
					</article>

					<article className="p-6 bg-white/50 backdrop-blur-sm border border-white/10 rounded-lg">
						<h3 className="font-semibold text-lg">Technology</h3>
						<p className="mt-2 text-sm text-slate-700">We use modern tooling for secure file transfer and timely filings to reduce friction.</p>
					</article>

					<article className="p-6 bg-white/50 backdrop-blur-sm border border-white/10 rounded-lg">
						<h3 className="font-semibold text-lg">Customer Focus</h3>
						<p className="mt-2 text-sm text-slate-700">Dedicated point of contact and clear timelines for each engagement.</p>
					</article>
				</section>
			</section>
		</main>
	);
}

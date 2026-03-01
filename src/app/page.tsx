import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans selection:bg-[var(--color-primary)] selection:text-white">
      {/* Navigation Bar */}
      <nav aria-label="Main Navigation" className="border-b border-[var(--color-surface-dark)] sticky top-0 bg-[var(--color-background-dark)]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter uppercase italic text-white flex items-center" aria-label="Mr. X Steroid Logo">
              Mr. X <span className="text-[var(--color-primary)] ml-2 border-l-2 border-[var(--color-primary)] pl-2">Steroid</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-[var(--color-text-secondary)] font-medium">
            <Link href="#inside" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">What's Inside</Link>
            <Link href="#schedules" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">Elite Schedules</Link>
            <Link href="#plans" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">Choose Plan</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" aria-label="Access Client Portal">Client Access</Button>
            </Link>
            <Link href="#plans">
              <Button variant="primary" aria-label="Purchase the Book">Get the Book</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[var(--color-primary)] to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#1a2632] to-transparent blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-dark)] border border-[var(--color-text-secondary)]/20 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              <span className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-widest">Scientific Bodybuilding Encyclopedia</span>
            </div>
            <h1 id="hero-title" className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] uppercase italic">
              Unlock the secrets of the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-red-600">
                Muscle Giants.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-12 font-medium">
              Discover the ultimate muscle-building guide and hormonal cycle book: a comprehensive, scientifically-backed roadmap designed with detailed tables and simple charts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" className="text-xl px-10 py-5" aria-label="Access the Digital Protocol">Access Digital Protocol</Button>
              <Button variant="secondary" className="text-xl px-10 py-5" aria-label="Purchase the Tactical Bundle Hardcover">Tactical Bundle (Hardcover)</Button>
            </div>

            {/* Visual Teaser */}
            <div className="mt-20 max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(217,35,35,0.2)] border border-white/5 group">
              <Image
                src="/screens/home-mobile-protocol-discovery-hub.png"
                alt="Iron & Grit Protocol Discovery Hub - Advanced Scientific Database View"
                width={1200}
                height={675}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-dark)] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section id="inside" aria-labelledby="inside-title" className="py-24 bg-[#0a1017]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="inside-title" className="text-4xl font-black uppercase italic mb-4">What's Inside This Book?</h2>
              <div className="h-1 w-24 bg-[var(--color-primary)] mx-auto" aria-hidden="true"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Comprehensive Hormonal Outlines",
                  desc: "Detailed breakdowns of every major compound, half-lives, and expected results.",
                  icon: "science"
                },
                {
                  title: "The Art of 'Safe Exit': Strict PCT",
                  desc: "Learn how to protect your hormonal system and recover testosterone production.",
                  icon: "health_and_safety"
                },
                {
                  title: "Supplement Bible: Truth Without Marketing",
                  desc: "Save your money. A brutal guide on what actually works and what is junk.",
                  icon: "pill"
                }
              ].map((item, i) => (
                <article key={i} className="p-8 border-t-4 border-t-[var(--color-primary)] hover:translate-y-[-8px] transition-transform duration-300 bg-[var(--color-surface-dark)] rounded-b-xl shadow-lg">
                  <span className="material-symbols-outlined text-4xl text-[var(--color-primary)] mb-6" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Elite Schedules */}
        <section id="schedules" aria-labelledby="schedules-title" className="py-24 border-y border-[var(--color-surface-dark)]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="schedules-title" className="text-5xl font-black uppercase italic mb-8">Elite Schedules</h2>
              <p className="text-xl text-[var(--color-text-secondary)] mb-8">Access world-class protocols designed for champions. From initial saturation to master-level maintenance.</p>

              <div className="space-y-6" role="list">
                <div role="listitem" className="p-6 bg-[var(--color-surface-dark)] border-l-4 border-l-[var(--color-primary)] rounded-r-xl">
                  <h4 className="font-black text-[var(--color-primary)] uppercase tracking-widest text-sm mb-2">The Kickstart</h4>
                  <p className="font-bold text-lg mb-1 italic">Initial Saturation & First Courses</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">Sharp rise in blood androgen levels. Nitrogen retention increases.</p>
                </div>
                <div role="listitem" className="p-6 bg-[var(--color-surface-dark)] rounded-xl border border-white/5">
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">How You Feel</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">High libido, improved mood, constant pumps. Stick to diet 100%.</p>
                </div>
              </div>
            </div>
            <div className="relative group" aria-hidden="true">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-3xl border border-[var(--color-primary)]/30 flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/screens/library-elite-protocol-library-dashboard.png"
                  alt="Elite Protocol Library Dashboard - Professional Cycle Management Interface"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1017] via-transparent to-transparent opacity-60"></div>
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="h-1 w-12 bg-[var(--color-primary)] mb-4"></div>
                  <div className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-[0.2em]">Live Protocol View</div>
                  <div className="text-lg font-black uppercase italic text-white">Elite Schedule Management</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Toolkit */}
        <section aria-labelledby="science-title" className="py-24 bg-[#0a1017]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 id="science-title" className="text-4xl font-black uppercase italic">Scientific Precision</h2>
                <p className="text-lg text-[var(--color-text-secondary)]">Our advanced toolkit goes beyond simple advice. Use high-end analytical models to track your transformation with mathematical certainty.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
                  <div role="listitem" className="p-6 bg-[var(--color-surface-dark)] rounded-2xl border border-white/5 group hover:border-[var(--color-primary)]/50 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-[var(--color-primary)] mb-4" aria-hidden="true">monitoring</span>
                    <h3 className="text-xl font-bold mb-2">3D Morph Tracker</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">Visualize your structural progress with our 3D anatomical morphing engine.</p>
                  </div>
                  <div role="listitem" className="p-6 bg-[var(--color-surface-dark)] rounded-2xl border border-white/5 group hover:border-[var(--color-primary)]/50 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-[var(--color-primary)] mb-4" aria-hidden="true">calculate</span>
                    <h3 className="text-xl font-bold mb-2">Genetic Potential</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">Calculate your scientific limit based on bone structure and hormonal baseline.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative" aria-hidden="true">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(217,35,35,0.15)] border border-white/10 group">
                  <Image
                    src="/screens/progress-3d-anatomical-progress-visualizer.png"
                    alt="3D Anatomical Progress Visualizer"
                    width={1200}
                    height={800}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1017] via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-[var(--color-primary)]/30">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)]">Scientific Visualization</span>
                  </div>
                </div>
                {/* Secondary Asset floating */}
                <div className="absolute -bottom-10 -left-10 w-64 h-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl hidden md:block">
                  <Image
                    src="/screens/tools-scientific-genetic-potential-calculator.png"
                    alt="Genetic Potential Calculator"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing / Choose Your Plan */}
        <section id="plans" aria-labelledby="plans-title" className="py-24 bg-gradient-to-b from-transparent to-[#0a1017]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 id="plans-title" className="text-4xl font-black uppercase italic mb-4">Choose Your Plan</h2>
            <p className="text-[var(--color-text-secondary)] mb-16">A small investment in your knowledge will save you thousands of dollars.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Digital Protocol",
                  type: "Immediate Access",
                  price: "$49",
                  features: ["eBook (PDF/EPUB)", "Instant Delivery", "Basic Cycle Templates"]
                },
                {
                  name: "Tactical Bundle",
                  type: "Maximum Value",
                  price: "$99",
                  features: ["Glossy Paper Book", "Digital Copy Included", "Bonus: Audiobook", "Free Shipping"],
                  featured: true
                },
                {
                  name: "Smart Professional",
                  type: "Full Optimization",
                  price: "$249",
                  features: ["Hardcover Premium Edition", "VIP Community Access", "Priority Email Support"]
                }
              ].map((plan, i) => (
                <article key={i} className={`p-8 rounded-2xl border ${plan.featured ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 scale-105 relative z-10 shadow-2xl shadow-[var(--color-primary)]/10' : 'border-white/5 bg-[var(--color-surface-dark)]'}`}>
                  {plan.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-[10px] font-black uppercase px-4 py-1 rounded-full">Most Popular</div>}
                  <h3 className="text-xl font-black uppercase italic mb-1">{plan.name}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-widest mb-6">{plan.type}</p>
                  <div className="text-5xl font-black mb-8" aria-label={`Price: ${plan.price}`}>{plan.price}</div>
                  <ul className="text-left space-y-4 mb-8 text-sm" aria-label={`Features for ${plan.name}`}>
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[var(--color-primary)] text-lg" aria-hidden="true">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.featured ? 'primary' : 'secondary'} fullWidth aria-label={`Get the ${plan.name} plan`}>Get Started</Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Steroid IQ Challenge */}
        <section aria-labelledby="challenge-title" className="py-24 bg-[var(--color-primary)] text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="material-symbols-outlined text-6xl mb-6" aria-hidden="true">psychology</span>
            <h2 id="challenge-title" className="text-3xl font-black uppercase italic mb-4">Daily Steroid IQ Challenge</h2>
            <p className="mb-8 font-medium">New question every 24h. Answer correctly to unlock an instant discount.</p>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <article className="p-8 bg-white/10 border-white/20 text-white backdrop-blur-md rounded-2xl shadow-2xl">
                  <p className="text-xl font-bold mb-8 italic">"What is the primary difference between Nolvadex and Clomid in PCT?"</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button variant="secondary" className="border-white/40 hover:bg-white/20" aria-label="Answer A: Hypothalamic Effect">Hypothalamic Effect</Button>
                    <Button variant="secondary" className="border-white/40 hover:bg-white/20" aria-label="Answer B: Estrogen Receptivity">Estrogen Receptivity</Button>
                  </div>
                </article>
              </div>
              <div className="lg:w-1/2 relative" aria-hidden="true">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 rotate-2 translate-x-4">
                  <Image
                    src="/screens/challenges-global-transformation-challenges-hub.png"
                    alt="Steroid IQ Challenge Interface"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section aria-labelledby="bio-title" className="py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shrink-0 grayscale shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="George Maurice - Founder of Iron & Grit"
                fill
                className="object-cover"
              />
            </div>
            <article>
              <h2 id="bio-title" className="text-3xl font-black uppercase italic mb-6">George Maurice: The Mastermind Behind "Mr. X"</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                George Maurice is not just an author; he is the navigator venturing into the forbidden zones many fear to tread. Through his controversial book, "Mr. X Steroid," George breaks the silence, fueling a raw passion for the "Iron Game" with the intricate science of longevity and modern medicine.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                He doesn't just offer a book; he hands you the keys to the physique you've always dreamed of, with the eye of an expert and the mind of a scientist. "From knowledge to muscle, build stronger, smarter."
              </p>
            </article>
          </div>
        </section>
      </main>

      {/* Footer / Disclaimer */}
      <footer aria-label="Footer and Legal Information" className="py-12 border-t border-[var(--color-surface-dark)] bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 p-6 bg-red-950/20 border border-red-900/50 rounded-lg" role="alert">
            <h4 className="flex items-center gap-2 text-[var(--color-primary)] font-bold uppercase tracking-widest text-xs mb-3">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">warning</span>
              Legal Disclaimer
            </h4>
            <p className="text-[var(--color-text-secondary)] text-[10px] leading-relaxed">
              Mr. George Maurice provides data regarding Anabolic Androgenic Steroids (AAS), HGH, and related substances. AAS are illegal in most countries without a prescription. They can be dangerous and lead to serious side effects. Consult a qualified physician before use. We do not sell or ship substances.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-xl font-black tracking-tighter uppercase italic text-white flex items-center" aria-label="Mr. X Steroid Logo">
              Mr. X <span className="text-[var(--color-primary)] ml-2 border-l border-[var(--color-primary)] pl-2">Steroid</span>
            </span>
            <div className="text-[var(--color-text-secondary)] text-xs font-medium">
              &copy; {new Date().getFullYear()} Scientific Bodybuilding Encyclopedia. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

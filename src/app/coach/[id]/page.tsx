'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// The coach data would normally come from a database via params.id
// For now, using a rich static data set for demonstration
const COACH_DATA: Record<string, {
    name: string; title: string; specialty: string;
    rating: number; reviews: number; athletes: number; completedCycles: number;
    pricePerMonth: number; availableSpots: number; verified: boolean;
    bio: string; philosophy: string; avatar: string; avatarColor: string;
    tags: string[]; methods: { title: string; detail: string }[];
    clientResults: { name: string; result: string; duration: string }[];
    testimonials: { author: string; text: string; rating: number }[];
    packages: { name: string; price: number; features: string[]; highlight: boolean }[];
}> = {
    'coach-1': {
        name: 'Marcus "The Iron Prophet" Webb',
        title: 'IFBB Pro | Head Contest Prep Coach',
        specialty: 'Bodybuilding & Contest Prep',
        rating: 4.9, reviews: 312, athletes: 48, completedCycles: 890,
        pricePerMonth: 299, availableSpots: 3, verified: true,
        avatar: 'MW', avatarColor: '#e11d48',
        bio: '14 years in the trenches. IFBB Pro card holder, 3x state champion, and the coach behind 60+ stage-ready transformations. My approach is built on science, bloodwork, and nothing left to chance.',
        philosophy: 'Every atom of your protocol should have a reason. Guessing is for amateurs. Show me your bloodwork and I will show you exactly what your body needs.',
        tags: ['Contest Prep', 'Hypertrophy', 'Protocol Design', 'Bloodwork Analysis', 'Water Manipulation'],
        methods: [
            { title: 'Weekly Video Check-ins', detail: 'Mandatory Sunday submissions. I watch your posing, conditioning, and adjust diet macros same day.' },
            { title: 'Bi-Weekly Protocol Updates', detail: 'No static programs. Compounds, dosages, and AI management are reviewed every 2 weeks based on bloodwork trends.' },
            { title: 'Direct Line Access', detail: 'WhatsApp access 7 days/week. Response within 4 hours guaranteed. Crisis situations get immediate priority.' },
            { title: 'Full Bloodwork Review', detail: 'I read every panel you send. Lipids, hormone levels, hematocrit — I catch issues before they become problems.' },
        ],
        clientResults: [
            { name: 'R. Thompson', result: '-18kg body fat, IFBB Masters qualifier', duration: '20 weeks' },
            { name: 'J. Alvarez', result: '+12kg lean mass, DEXA verified', duration: '16 weeks' },
            { name: 'K. Williams', result: 'First competition, top 5 finish', duration: '24 weeks' },
        ],
        testimonials: [
            { author: 'Ryan T.', text: 'Marcus called me on bloodwork results at week 6 that I would have completely missed. That attention to detail is what separates him from every other coach I\'ve had.', rating: 5 },
            { author: 'Alex M.', text: 'Came in at 22% body fat. Stepped on stage at 6.8%. The protocol was perfect — I never felt depleted until the final week. Placed 2nd in my class.', rating: 5 },
            { author: 'Ben S.', text: 'The first coach who actually answered my bloodwork questions with real explanations. Not just adjusting doses blindly. Completely changed how I think about this.', rating: 5 },
        ],
        packages: [
            { name: 'Foundation', price: 149, highlight: false, features: ['Custom training program', 'Nutrition templates', 'Monthly check-in call', 'Email support'] },
            { name: 'Elite', price: 299, highlight: true, features: ['Full bespoke protocol', 'Bloodwork review', 'Weekly video check-ins', 'WhatsApp direct access', 'AI & ancillary management'] },
            { name: 'Contest Prep', price: 499, highlight: false, features: ['Everything in Elite', 'Peak week management', 'Water/sodium manipulation', 'Posing coaching', 'Stage day advisory'] },
        ],
    },
};

const DEFAULT_COACH = COACH_DATA['coach-1'];

export default function CoachProfilePage({ params }: { params: { id: string } }) {
    const coach = COACH_DATA[params.id] ?? DEFAULT_COACH;
    const [activeTab, setActiveTab] = useState<'about' | 'results' | 'packages'>('about');

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">

            {/* Top Nav */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
                        <Link href="/coaches" className="text-white font-bold hover:text-[var(--color-primary)] transition-colors">← All Coaches</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/auth/login"><Button variant="ghost" className="text-sm">Sign In</Button></Link>
                        <Link href="/checkout"><Button variant="primary" className="text-sm">Book Now</Button></Link>
                    </div>
                </div>
            </header>

            {/* Hero Banner */}
            <div className="relative border-b border-white/10 overflow-hidden" style={{ minHeight: 280 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-background-dark)]" />
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: coach.avatarColor }} />
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '16px 16px' }} />

                <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-end gap-8">
                    {/* Avatar */}
                    <div className="w-28 h-28 rounded flex items-center justify-center text-3xl font-black text-white flex-shrink-0 border-2"
                        style={{ backgroundColor: `${coach.avatarColor}22`, borderColor: `${coach.avatarColor}66` }}>
                        {coach.avatar}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                            {coach.verified && (
                                <span className="text-xs bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-0.5 rounded font-bold border border-[var(--color-primary)]/30">✓ VERIFIED</span>
                            )}
                            <span className="text-xs text-[var(--color-text-secondary)] font-bold uppercase tracking-wider">{coach.specialty}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-1">{coach.name}</h1>
                        <p className="text-[var(--color-text-secondary)] text-sm">{coach.title}</p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-6 mt-4">
                            {[
                                { label: 'Rating', value: `★ ${coach.rating}` },
                                { label: 'Reviews', value: coach.reviews },
                                { label: 'Active Athletes', value: coach.athletes },
                                { label: 'Cycles Reviewed', value: `${coach.completedCycles}+` },
                            ].map(s => (
                                <div key={s.label}>
                                    <div className="font-black text-white text-lg leading-tight">{s.value}</div>
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0">
                        <Link href="/checkout">
                            <Button variant="primary" className="px-8 py-3 text-lg font-bold shadow-lg">
                                Work With Me — ${coach.pricePerMonth}/mo
                            </Button>
                        </Link>
                        <p className="text-xs text-[var(--color-text-secondary)] text-center mt-2">
                            {coach.availableSpots} spots remaining
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-white/10 sticky top-16 z-10 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 flex gap-1">
                    {(['about', 'results', 'packages'] as const).map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-5 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-all capitalize ${activeTab === tab
                                    ? 'border-[var(--color-primary)] text-white'
                                    : 'border-transparent text-[var(--color-text-secondary)] hover:text-white'
                                }`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">

                    {/* ABOUT TAB */}
                    {activeTab === 'about' && (
                        <>
                            <section>
                                <h2 className="font-black text-white text-xl mb-4 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">/</span> Background
                                </h2>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">{coach.bio}</p>
                            </section>

                            <section>
                                <h2 className="font-black text-white text-xl mb-4 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">/</span> Philosophy
                                </h2>
                                <Card className="p-5 border-l-4 border-l-[var(--color-primary)]">
                                    <blockquote className="text-[var(--color-text-secondary)] italic text-base leading-relaxed">
                                        "{coach.philosophy}"
                                    </blockquote>
                                </Card>
                            </section>

                            <section>
                                <h2 className="font-black text-white text-xl mb-5 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">/</span> Coaching Methods
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {coach.methods.map(m => (
                                        <Card key={m.title} className="p-5 hover:border-white/20 transition-colors">
                                            <h3 className="font-bold text-white mb-2">{m.title}</h3>
                                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{m.detail}</p>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            {/* Tags */}
                            <section>
                                <h2 className="font-black text-white text-xl mb-4 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">/</span> Specializations
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {coach.tags.map(t => (
                                        <span key={t} className="px-4 py-2 rounded border border-white/10 bg-white/5 text-sm font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {/* RESULTS TAB */}
                    {activeTab === 'results' && (
                        <>
                            <section>
                                <h2 className="font-black text-white text-xl mb-5 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">/</span> Client Transformations
                                </h2>
                                <div className="space-y-4">
                                    {coach.clientResults.map((r, i) => (
                                        <Card key={i} className="p-5 flex items-center gap-5">
                                            <div className="w-10 h-10 rounded bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] font-black">
                                                #{i + 1}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-white">{r.name}</div>
                                                <div className="text-[var(--color-primary)] text-sm font-bold">{r.result}</div>
                                            </div>
                                            <div className="text-right text-xs text-[var(--color-text-secondary)]">
                                                <div className="font-bold text-white">{r.duration}</div>
                                                <div>Protocol</div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="font-black text-white text-xl mb-5 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">/</span> Testimonials
                                </h2>
                                <div className="space-y-4">
                                    {coach.testimonials.map((t, i) => (
                                        <Card key={i} className="p-6">
                                            <div className="flex gap-1 mb-3">
                                                {Array.from({ length: t.rating }).map((_, s) => (
                                                    <span key={s} className="text-amber-400">★</span>
                                                ))}
                                            </div>
                                            <p className="text-[var(--color-text-secondary)] leading-relaxed italic mb-4">"{t.text}"</p>
                                            <div className="font-bold text-white text-sm">— {t.author}</div>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {/* PACKAGES TAB */}
                    {activeTab === 'packages' && (
                        <section>
                            <h2 className="font-black text-white text-xl mb-5 flex items-center gap-2">
                                <span className="text-[var(--color-primary)]">/</span> Coaching Packages
                            </h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {coach.packages.map(pkg => (
                                    <Card key={pkg.name} className={`p-6 flex flex-col ${pkg.highlight ? 'border-[var(--color-primary)]/50 relative overflow-hidden' : ''}`}>
                                        {pkg.highlight && (
                                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]" />
                                        )}
                                        {pkg.highlight && (
                                            <div className="absolute top-3 right-3 text-xs bg-[var(--color-primary)] text-white px-2 py-0.5 rounded font-bold">POPULAR</div>
                                        )}
                                        <div className="font-black text-white text-lg mb-1">{pkg.name}</div>
                                        <div className="text-3xl font-black mb-1">
                                            <span className="text-[var(--color-primary)]">${pkg.price}</span>
                                            <span className="text-sm text-[var(--color-text-secondary)] font-normal">/mo</span>
                                        </div>
                                        <div className="flex-1 space-y-3 my-5">
                                            {pkg.features.map(f => (
                                                <div key={f} className="flex items-start gap-2 text-sm">
                                                    <span className="text-[var(--color-primary)] font-bold mt-0.5 flex-shrink-0">✓</span>
                                                    <span className="text-[var(--color-text-secondary)]">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href="/checkout">
                                            <Button variant={pkg.highlight ? 'primary' : 'secondary'} className="w-full">
                                                Get Started
                                            </Button>
                                        </Link>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sticky Sidebar */}
                <aside className="space-y-5">
                    <Card className="p-6 sticky top-32">
                        <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Starting from</div>
                        <div className="text-3xl font-black text-white mb-0.5">${coach.pricePerMonth}<span className="text-sm font-normal text-[var(--color-text-secondary)]">/mo</span></div>
                        <div className="flex items-center gap-2 text-sm text-green-400 font-bold mb-5">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            {coach.availableSpots} spots open
                        </div>
                        <Link href="/checkout" className="block">
                            <Button variant="primary" className="w-full py-3 text-base font-black mb-3">Secure My Spot</Button>
                        </Link>
                        <Link href="/messages" className="block">
                            <Button variant="secondary" className="w-full text-sm">Message Coach</Button>
                        </Link>
                        <p className="text-xs text-center text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                            Minimum 3-month commitment. Protocol starts within 48h of onboarding.
                        </p>
                    </Card>

                    {/* Quick Stats */}
                    <Card className="p-5">
                        <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">At a Glance</h4>
                        <div className="space-y-3">
                            {[
                                { l: 'Rating', v: `${coach.rating} / 5.0` },
                                { l: 'Total Reviews', v: coach.reviews },
                                { l: 'Active Athletes', v: coach.athletes },
                                { l: 'Protocols Designed', v: `${coach.completedCycles}+` },
                                { l: 'Specialty', v: coach.specialty },
                            ].map(s => (
                                <div key={s.l} className="flex justify-between text-sm border-b border-white/5 pb-2">
                                    <span className="text-[var(--color-text-secondary)]">{s.l}</span>
                                    <span className="font-bold text-white">{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

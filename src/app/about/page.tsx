'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white flex items-center gap-2">
                        Iron<span className="text-[var(--color-primary)]">Grit</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)] font-bold">
                        <Link href="/coaches" className="hover:text-white transition-colors">Coaches</Link>
                        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                        <Link href="/community" className="hover:text-white transition-colors">Community</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative border-b border-white/10 overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface-dark)] to-[var(--color-background-dark)]" />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <span className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-widest block mb-4">Our Philosophy</span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8">
                        The End of <span className="text-[var(--color-primary)]">Bro-Science.</span>
                    </h1>
                    <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
                        Iron & Grit relies on clinical data, peer-reviewed endocrinology, and decades of in-the-trenches coaching experience. We bridge the gap between medical harm-reduction and elite performance enhancement.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20">

                {/* 3 Pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <Card className="p-8 border-t-2 border-t-[var(--color-primary)]">
                        <div className="text-4xl mb-6">🩸</div>
                        <h3 className="font-black text-white text-xl uppercase tracking-wider mb-4">Bloodwork Dictates All</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                            We don't coach by feel. Dosages, AI implementation, and PCT timing are determined strictly by individual blood markers. Health is the prerequisite for performance.
                        </p>
                    </Card>
                    <Card className="p-8 border-t-2 border-t-white">
                        <div className="text-4xl mb-6">🧪</div>
                        <h3 className="font-black text-white text-xl uppercase tracking-wider mb-4">Transparency</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                            No secret sauce. Our protocol library reveals the exact cycles, ancillaries, and timelines used by IFBB Pros and elite powerlifters. Education beats ignorance.
                        </p>
                    </Card>
                    <Card className="p-8 border-t-2 border-t-[var(--color-surface-dark)] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        <div className="text-4xl mb-6">💪</div>
                        <h3 className="font-black text-white text-xl uppercase tracking-wider mb-4">Iron Discipline</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                            Chemicals don't do the work. The barbell does. Our platform requires strict adherence to training, nutrition, and recovery. We don't coach lazy athletes.
                        </p>
                    </Card>
                </div>

                {/* Team / Story */}
                <div className="flex flex-col lg:flex-row gap-16 items-center border-t border-white/10 pt-24">
                    <div className="lg:w-1/2 space-y-8">
                        <span className="text-[var(--color-text-secondary)] text-sm font-bold uppercase tracking-widest block">The Genesis</span>
                        <h2 className="text-4xl font-black uppercase">Built by coaches, for serious athletes.</h2>
                        <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
                            <p>
                                Iron & Grit was founded in 2025 by a collective of prep coaches and clinical endocrinologists who were tired of seeing athletes destroy their health due to forum misinformation.
                            </p>
                            <p>
                                We saw 20-year-olds permanently shutting down their HPTA because they ran terrible PCT protocols. We saw athletes stroking out due to unmanaged hematocrit. We realized the sport needed a centralized, science-backed platform for harm reduction and optimization.
                            </p>
                            <p>
                                What started as a private spreadsheet template for tracking our own clients evolved into the comprehensive platform you see today.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Link href="/coaches">
                                <Button variant="primary" className="px-8 py-4 font-bold">Meet the Coaching Team</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Founder profiles */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                        <Card className="p-6 text-center border-white/5 bg-gradient-to-br from-[var(--color-surface-dark)] to-black relative group overflow-hidden">
                            <div className="w-24 h-24 mx-auto rounded-full bg-[var(--color-primary)]/20 border-2 border-[var(--color-primary)]/50 mb-4 flex items-center justify-center text-2xl font-black">MW</div>
                            <h4 className="font-bold text-white mb-1">Marcus Webb</h4>
                            <p className="text-xs text-[var(--color-primary)] uppercase tracking-wider font-bold mb-3">Founder / Head Coach</p>
                            <p className="text-xs text-[var(--color-text-secondary)]">IFBB Pro & 15-year veteran prep coach.</p>
                        </Card>
                        <Card className="p-6 text-center border-white/5 bg-gradient-to-br from-[var(--color-surface-dark)] to-black relative group overflow-hidden mt-8 md:mt-12">
                            <div className="w-24 h-24 mx-auto rounded-full bg-blue-500/20 border-2 border-blue-500/50 mb-4 flex items-center justify-center text-2xl font-black">DT</div>
                            <h4 className="font-bold text-white mb-1">Dr. David Torres</h4>
                            <p className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-3">Chief Medical Officer</p>
                            <p className="text-xs text-[var(--color-text-secondary)]">Endocrinologist specializing in HRT/TRT.</p>
                        </Card>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-32 text-center p-12 lg:p-20 bg-[var(--color-surface-dark)]/50 border border-[var(--color-primary)]/30 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-primary)]" />
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Ready to get serious?</h2>
                    <p className="text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto text-lg">
                        Stop guessing. Start tracking. Join the fastest-growing evidence-based enhancement community in the world.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/pricing"><Button variant="primary" className="px-8 py-4 text-lg font-bold">View Membership Tiers</Button></Link>
                        <Link href="/auth/register"><Button variant="secondary" className="px-8 py-4 text-lg font-bold">Create Free Account</Button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

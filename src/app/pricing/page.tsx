'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function PricingPage() {
    const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)] font-bold">
                        <Link href="/coaches" className="hover:text-white transition-colors">Coaches</Link>
                        <Link href="/challenges" className="hover:text-white transition-colors">Challenges</Link>
                        <Link href="/about" className="hover:text-white transition-colors">Philosophy</Link>
                    </nav>
                    <Link href="/auth/login"><Button variant="ghost" className="text-sm">Sign In</Button></Link>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                        No BS Pricing.<br /> <span className="text-[var(--color-primary)]">Just Results.</span>
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                        Whether you want access to our science-backed protocol library, or you need elite 1-on-1 coaching to prep for stage day, we have a tier for you. Don't sign up if you aren't ready to work.
                    </p>

                    {/* Billing Toggle */}
                    <div className="mt-10 inline-flex bg-white/5 border border-white/10 rounded-full p-1 relative">
                        <button onClick={() => setBilling('monthly')}
                            className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${billing === 'monthly' ? 'text-white' : 'text-[var(--color-text-secondary)] hover:text-white'}`}>
                            Monthly Billing
                        </button>
                        <button onClick={() => setBilling('annual')}
                            className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2 ${billing === 'annual' ? 'text-white' : 'text-[var(--color-text-secondary)] hover:text-white'}`}>
                            Annual Billing
                            <span className="text-[10px] bg-[var(--color-primary)] text-white px-2 py-0.5 rounded-full font-black uppercase">Save 20%</span>
                        </button>
                        {/* Selector indicator */}
                        <div className={`absolute top-1 bottom-1 w-[50%] bg-[var(--color-surface-dark)] rounded-full transition-transform duration-300 ${billing === 'annual' ? 'translate-x-full pr-1' : ''}`} />
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch pt-4">

                    {/* Bronze / Base */}
                    <Card className="p-8 flex flex-col bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                        <div className="text-[var(--color-text-secondary)] text-sm font-bold uppercase tracking-wider mb-2">Base Access</div>
                        <h2 className="text-2xl font-black text-white mb-4">Iron Library</h2>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-black">${billing === 'monthly' ? '19' : '15'}</span>
                            <span className="text-[var(--color-text-secondary)]">/mo</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Perfect for self-directed athletes needing proven cycles.</p>

                        <div className="flex-1 space-y-4 mb-8">
                            {[
                                'Access to Tier 1 & 2 Protocols',
                                'Genetic Potential Calculator',
                                'Half-Life Simulator (Basic)',
                                'Community Forum Access',
                            ].map(feature => (
                                <div key={feature} className="flex gap-3 text-sm">
                                    <span className="text-green-400 font-bold block mt-0.5">✓</span>
                                    <span className="text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="secondary" className="w-full">Get Base Access</Button>
                    </Card>

                    {/* Silver / Pro (Highlighted) */}
                    <Card className="p-8 flex flex-col bg-[var(--color-surface-dark)] border border-[var(--color-primary)]/50 shadow-[0_0_30px_rgba(217,35,35,0.15)] relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-red-500 rounded-t-xl" />
                        <div className="absolute top-4 right-4 bg-[var(--color-primary)] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded">Most Popular</div>

                        <div className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-2">Pro Membership</div>
                        <h2 className="text-2xl font-black text-white mb-4">Advanced Athlete</h2>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-black">${billing === 'monthly' ? '49' : '39'}</span>
                            <span className="text-[var(--color-text-secondary)]">/mo</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">For serious lifters tracking progress and competing in challenges.</p>

                        <div className="flex-1 space-y-4 mb-8">
                            {[
                                'All Base Access Features',
                                'Full Cycle Library (Tiers 1-4)',
                                'Trainee Analytics Dashboard',
                                'Bloodwork Tracking & Logging',
                                'Half-Life Simulator (Advanced PRO)',
                                'Transformation Challenge Entry',
                            ].map(feature => (
                                <div key={feature} className="flex gap-3 text-sm">
                                    <span className="text-[var(--color-primary)] font-bold block mt-0.5">✓</span>
                                    <span className="text-white">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="primary" className="w-full text-lg shadow-lg">Start Pro Trial</Button>
                    </Card>

                    {/* Gold / Coaching */}
                    <Card className="p-8 flex flex-col bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                        <div className="text-[var(--color-text-secondary)] text-sm font-bold uppercase tracking-wider mb-2">Elite 1-on-1</div>
                        <h2 className="text-2xl font-black text-white mb-4">Pro Coaching</h2>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-xl text-[var(--color-text-secondary)] line-through mr-1 font-bold">From</span>
                            <span className="text-4xl font-black">$199</span>
                            <span className="text-[var(--color-text-secondary)]">/mo</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Fully bespoke protocol and daily management by an Iron & Grit Elite Coach.</p>

                        <div className="flex-1 space-y-4 mb-8">
                            {[
                                'Everything in PRO Membership',
                                'Assigned Dedicated Head Coach',
                                'Bespoke Cycle & PCT Design',
                                'Mandatory Weekly Video Check-ins',
                                'Full Bloodwork Panel Reviews',
                                '24/7 WhatsApp Access',
                            ].map(feature => (
                                <div key={feature} className="flex gap-3 text-sm">
                                    <span className="text-amber-400 font-bold block mt-0.5">✓</span>
                                    <span className="text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/coaches" className="block w-full">
                            <Button variant="secondary" className="w-full">Browse Coaches</Button>
                        </Link>
                    </Card>
                </div>

                <div className="mt-20 text-center">
                    <h3 className="font-bold text-xl mb-4">Enterprise or Team Licensing?</h3>
                    <p className="text-[var(--color-text-secondary)] mb-6">Contact us for commercial gym rollout and multi-coach agency accounts.</p>
                    <Button variant="ghost" className="border border-white/20">Contact Sales</Button>
                </div>
            </div>
        </div>
    );
}

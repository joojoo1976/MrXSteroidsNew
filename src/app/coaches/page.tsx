'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const SPECIALTIES = ['All', 'Powerlifting', 'Bodybuilding', 'Physique', 'Strength & Conditioning', 'Fat Loss'];

const COACHES = [
    {
        id: 'coach-1',
        name: 'Marcus "The Iron Prophet" Webb',
        specialty: 'Bodybuilding',
        rating: 4.9,
        reviews: 312,
        athletes: 48,
        pricePerMonth: 299,
        bio: 'IFBB Pro with 14 years of precision coaching. Specializing in evidence-based hypertrophy and contest prep for all levels.',
        tags: ['Contest Prep', 'Hypertrophy', 'Protocol Design'],
        verified: true,
        avatar: 'MW',
        color: '#e11d48',
    },
    {
        id: 'coach-2',
        name: 'Dr. Sophia Reyes',
        specialty: 'Strength & Conditioning',
        rating: 4.8,
        reviews: 201,
        athletes: 36,
        pricePerMonth: 349,
        bio: 'Sports scientist & NSCA-CSCS certified. Data-driven programming built around bloodwork, recovery, and long-term athlete health.',
        tags: ['Science-Based', 'Bloodwork Analysis', 'Periodization'],
        verified: true,
        avatar: 'SR',
        color: '#7c3aed',
    },
    {
        id: 'coach-3',
        name: 'Ivan "The Bear" Kozlov',
        specialty: 'Powerlifting',
        rating: 4.9,
        reviews: 189,
        athletes: 29,
        pricePerMonth: 249,
        bio: 'World-class powerlifting coach with athletes competing at IPF level. Specializes in peak cycles and real-world strength application.',
        tags: ['Competition', 'Peak Cycles', 'Raw Strength'],
        verified: true,
        avatar: 'IK',
        color: '#0891b2',
    },
    {
        id: 'coach-4',
        name: 'Jordan Steele',
        specialty: 'Physique',
        rating: 4.7,
        reviews: 154,
        athletes: 41,
        pricePerMonth: 199,
        bio: 'Men\'s Physique specialist focused on aesthetic transformation. Expert in water manipulation, posing, and visual impact training.',
        tags: ['Aesthetics', 'Stage Prep', 'Posing'],
        verified: false,
        avatar: 'JS',
        color: '#d97706',
    },
    {
        id: 'coach-5',
        name: 'Elena Vasquez',
        specialty: 'Fat Loss',
        rating: 4.8,
        reviews: 267,
        athletes: 55,
        pricePerMonth: 179,
        bio: 'Certified nutrition coach specializing in sustainable fat loss protocols. Combines metabolic optimization with lifestyle integration.',
        tags: ['Nutrition', 'Metabolic', 'Sustainable'],
        verified: true,
        avatar: 'EV',
        color: '#16a34a',
    },
    {
        id: 'coach-6',
        name: 'Rex "The Architect" Morrison',
        specialty: 'Bodybuilding',
        rating: 4.6,
        reviews: 98,
        athletes: 22,
        pricePerMonth: 229,
        bio: 'Boutique coaching experience. Full protocol architecture from training splits to ancillary drug management for advanced athletes.',
        tags: ['Advanced Protocols', 'Ancillaries', 'Custom Cycles'],
        verified: true,
        avatar: 'RM',
        color: '#be123c',
    },
];

export default function CoachesPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = COACHES.filter(c => {
        const matchesFilter = activeFilter === 'All' || c.specialty === activeFilter;
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
                        <Link href="/coaches" className="text-white font-bold border-b-2 border-[var(--color-primary)] pb-0.5">Coaches</Link>
                        <Link href="/library" className="hover:text-white transition-colors">Cycles Library</Link>
                        <Link href="/tools" className="hover:text-white transition-colors">Science Tools</Link>
                        <Link href="/challenges" className="hover:text-white transition-colors">Challenges</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/auth/login">
                            <Button variant="ghost" className="text-sm">Sign In</Button>
                        </Link>
                        <Link href="/auth/register">
                            <Button variant="primary" className="text-sm">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Banner */}
            <section className="border-b border-white/10 bg-gradient-to-b from-[var(--color-surface-dark)] to-transparent">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest">Elite Network</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Global Coach<br />
                        <span className="text-[var(--color-primary)]">Marketplace</span>
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mb-8">
                        Connect with world-class coaches who specialize in evidence-based protocols. Verified credentials, real results.
                    </p>
                    {/* Stats */}
                    <div className="flex flex-wrap gap-8">
                        {[
                            { label: 'Verified Coaches', value: '140+' },
                            { label: 'Active Athletes', value: '12,000+' },
                            { label: 'Avg. Coach Rating', value: '4.8★' },
                        ].map(s => (
                            <div key={s.label}>
                                <div className="text-2xl font-black text-[var(--color-primary)]">{s.value}</div>
                                <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filters & Search */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    {/* Search */}
                    <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] text-lg">⌕</span>
                        <input
                            type="text"
                            placeholder="Search by name, specialty, or tag..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full bg-[var(--color-surface-dark)] border border-white/10 rounded pl-11 pr-4 py-3 text-white placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        />
                    </div>
                    {/* Specialty Filters */}
                    <div className="flex flex-wrap gap-2">
                        {SPECIALTIES.map(s => (
                            <button
                                key={s}
                                onClick={() => setActiveFilter(s)}
                                className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all ${activeFilter === s
                                        ? 'bg-[var(--color-primary)] text-white'
                                        : 'bg-[var(--color-surface-dark)] text-[var(--color-text-secondary)] hover:text-white border border-white/10'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="text-[var(--color-text-secondary)] text-sm mb-6">
                    Showing <span className="text-white font-bold">{filtered.length}</span> coaches
                </div>

                {/* Coach Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(coach => (
                        <Card key={coach.id} className="p-0 overflow-hidden hover:border-white/20 transition-all group">
                            {/* Top accent */}
                            <div className="h-1" style={{ backgroundColor: coach.color }} />
                            <div className="p-6">
                                {/* Avatar + Name */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div
                                        className="w-14 h-14 rounded flex items-center justify-center text-xl font-black text-white flex-shrink-0"
                                        style={{ backgroundColor: `${coach.color}22`, border: `2px solid ${coach.color}44` }}
                                    >
                                        {coach.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h2 className="font-black text-white text-base leading-tight">{coach.name}</h2>
                                            {coach.verified && (
                                                <span className="text-xs bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-0.5 rounded font-bold">✓ VERIFIED</span>
                                            )}
                                        </div>
                                        <div className="text-xs text-[var(--color-text-secondary)] font-bold uppercase tracking-wider mt-1">
                                            {coach.specialty}
                                        </div>
                                    </div>
                                </div>

                                {/* Rating + Stats */}
                                <div className="flex gap-4 mb-4 text-sm">
                                    <div>
                                        <span className="text-amber-400 font-bold">★ {coach.rating}</span>
                                        <span className="text-[var(--color-text-secondary)] ml-1">({coach.reviews})</span>
                                    </div>
                                    <div className="text-[var(--color-text-secondary)]">
                                        <span className="text-white font-bold">{coach.athletes}</span> active athletes
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">
                                    {coach.bio}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {coach.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-white/5 text-[var(--color-text-secondary)] px-2 py-1 rounded border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Price + CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div>
                                        <span className="text-2xl font-black text-white">${coach.pricePerMonth}</span>
                                        <span className="text-[var(--color-text-secondary)] text-sm ml-1">/mo</span>
                                    </div>
                                    <Link href={`/coach/${coach.id}`}>
                                        <Button variant="primary" className="text-sm group-hover:scale-105 transition-transform">
                                            View Profile
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-4xl mb-4">🔍</div>
                        <p className="text-[var(--color-text-secondary)]">No coaches match your search. Try different filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

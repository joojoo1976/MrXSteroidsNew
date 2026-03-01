'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const CHALLENGES = [
    {
        id: 'c1',
        title: '12-Week Mass Protocol',
        category: 'Transformation',
        status: 'ACTIVE',
        prize: '$5,000',
        entries: 1247,
        daysLeft: 34,
        description: 'Document your 12-week mass-gaining protocol with weekly check-ins, blood work, and body composition scans.',
        difficulty: 'Advanced',
        badge: '🏆',
        color: '#e11d48',
    },
    {
        id: 'c2',
        title: 'Steroid IQ Sprint',
        category: 'Knowledge',
        status: 'ACTIVE',
        prize: 'Elite Badge + 5,000 XP',
        entries: 3891,
        daysLeft: 7,
        description: 'Daily pharmacology questions covering half-lives, esterification, AI protocols, and bloodwork interpretation.',
        difficulty: 'Intermediate',
        badge: '🧠',
        color: '#7c3aed',
    },
    {
        id: 'c3',
        title: 'Natural Genetic Potential',
        category: 'Science',
        status: 'ACTIVE',
        prize: 'Free Coach Month',
        entries: 892,
        daysLeft: 21,
        description: 'Calculate your true natural genetic ceiling using the FFMI formula and compete for closest-to-potential award.',
        difficulty: 'Beginner',
        badge: '🔬',
        color: '#0891b2',
    },
    {
        id: 'c4',
        title: 'Recomp Masters',
        category: 'Transformation',
        status: 'UPCOMING',
        prize: '$2,500',
        entries: 0,
        daysLeft: 60,
        description: 'Simultaneous fat loss and muscle gain challenge. Judged on DEXA scan data and total body composition change.',
        difficulty: 'Advanced',
        badge: '⚡',
        color: '#d97706',
    },
    {
        id: 'c5',
        title: 'Protocol Design Battle',
        category: 'Knowledge',
        status: 'ENDED',
        prize: 'Completed',
        entries: 4512,
        daysLeft: 0,
        description: 'Design the optimal 16-week blast cycle for an advanced athlete. Community-voted winner gets featured in the library.',
        difficulty: 'Expert',
        badge: '📋',
        color: '#64748b',
    },
];

const LEADERBOARD = [
    { rank: 1, name: 'Iron_Colossus', points: 48_200, badge: '🥇', change: 0 },
    { rank: 2, name: 'PharmD_Lifter', points: 44_750, badge: '🥈', change: 2 },
    { rank: 3, name: 'Protocol_King', points: 41_100, badge: '🥉', change: -1 },
    { rank: 4, name: 'BloodworkBull', points: 38_900, badge: '', change: 1 },
    { rank: 5, name: 'Apex_Reyes', points: 36_200, badge: '', change: -2 },
];

const STATUS_COLOR: Record<string, string> = {
    ACTIVE: 'text-green-400 bg-green-400/10 border-green-400/20',
    UPCOMING: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    ENDED: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
};

export default function ChallengesPage() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Transformation', 'Knowledge', 'Science'];

    const filtered = CHALLENGES.filter(c => filter === 'All' || c.category === filter);

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
                        <Link href="/coaches" className="hover:text-white transition-colors">Coaches</Link>
                        <Link href="/library" className="hover:text-white transition-colors">Cycles Library</Link>
                        <Link href="/tools" className="hover:text-white transition-colors">Science Tools</Link>
                        <Link href="/challenges" className="text-white font-bold border-b-2 border-[var(--color-primary)] pb-0.5">Challenges</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/auth/login"><Button variant="ghost" className="text-sm">Sign In</Button></Link>
                        <Link href="/auth/register"><Button variant="primary" className="text-sm">Get Started</Button></Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 py-16 relative">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest">Global Competition</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Transformation<br />
                        <span className="text-[var(--color-primary)]">Challenges Hub</span>
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mb-8">
                        Compete globally, earn elite recognition, and prove your protocol works. Cash prizes and community glory await.
                    </p>
                    <div className="flex flex-wrap gap-8">
                        <div><div className="text-2xl font-black text-[var(--color-primary)]">$12,500+</div><div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Prize Pool</div></div>
                        <div><div className="text-2xl font-black text-[var(--color-primary)]">6,240</div><div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Active Competitors</div></div>
                        <div><div className="text-2xl font-black text-[var(--color-primary)]">3</div><div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Live Challenges</div></div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main — Challenges */}
                <div className="lg:col-span-2">
                    {/* Category Filter */}
                    <div className="flex gap-2 mb-8">
                        {categories.map(c => (
                            <button
                                key={c}
                                onClick={() => setFilter(c)}
                                className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all ${filter === c
                                        ? 'bg-[var(--color-primary)] text-white'
                                        : 'bg-[var(--color-surface-dark)] text-[var(--color-text-secondary)] hover:text-white border border-white/10'
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    {/* Challenge Cards */}
                    <div className="space-y-5">
                        {filtered.map(ch => (
                            <Card key={ch.id} className="p-0 overflow-hidden hover:border-white/20 transition-all">
                                <div className="h-0.5" style={{ backgroundColor: ch.status === 'ENDED' ? '#475569' : ch.color }} />
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="text-3xl">{ch.badge}</div>
                                            <div>
                                                <div className="flex items-center gap-3 flex-wrap mb-1">
                                                    <h2 className="font-black text-white text-lg">{ch.title}</h2>
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${STATUS_COLOR[ch.status]}`}>
                                                        {ch.status}
                                                    </span>
                                                </div>
                                                <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-bold">
                                                    {ch.category} · {ch.difficulty}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <div className="text-lg font-black text-white">{ch.prize}</div>
                                            <div className="text-xs text-[var(--color-text-secondary)]">Prize</div>
                                        </div>
                                    </div>

                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">{ch.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-6 text-sm">
                                            <div>
                                                <span className="text-white font-bold">{ch.entries.toLocaleString()}</span>
                                                <span className="text-[var(--color-text-secondary)] ml-1">entries</span>
                                            </div>
                                            {ch.daysLeft > 0 ? (
                                                <div>
                                                    <span className="text-[var(--color-primary)] font-bold">{ch.daysLeft}</span>
                                                    <span className="text-[var(--color-text-secondary)] ml-1">days left</span>
                                                </div>
                                            ) : (
                                                <div className="text-[var(--color-text-secondary)]">Ended</div>
                                            )}
                                        </div>
                                        {ch.status !== 'ENDED' && (
                                            <Button variant={ch.status === 'ACTIVE' ? 'primary' : 'secondary'} className="text-sm">
                                                {ch.status === 'ACTIVE' ? 'Enter Challenge' : 'Notify Me'}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar — Leaderboard */}
                <aside className="space-y-6">
                    <Card className="p-6">
                        <h3 className="font-black text-white text-lg uppercase tracking-wider mb-5 flex items-center gap-2">
                            <span className="text-[var(--color-primary)]">⊞</span> Global Leaderboard
                        </h3>
                        <div className="space-y-3">
                            {LEADERBOARD.map(entry => (
                                <div key={entry.rank} className={`flex items-center gap-3 p-3 rounded transition-colors ${entry.rank <= 3 ? 'bg-white/5' : ''}`}>
                                    <div className="w-7 text-center font-black text-lg">
                                        {entry.badge || <span className="text-[var(--color-text-secondary)] text-sm">#{entry.rank}</span>}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-white text-sm">{entry.name}</div>
                                        <div className="text-xs text-[var(--color-text-secondary)]">{entry.points.toLocaleString()} XP</div>
                                    </div>
                                    <div className={`text-xs font-bold ${entry.change > 0 ? 'text-green-400' : entry.change < 0 ? 'text-red-400' : 'text-slate-500'}`}>
                                        {entry.change > 0 ? `↑${entry.change}` : entry.change < 0 ? `↓${Math.abs(entry.change)}` : '–'}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5">
                            <Link href="/auth/register">
                                <Button variant="secondary" className="w-full text-sm">Join & Compete</Button>
                            </Link>
                        </div>
                    </Card>

                    {/* XP Info */}
                    <Card className="p-6">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-[var(--color-primary)]">★</span> How XP Works
                        </h3>
                        <div className="space-y-3 text-sm">
                            {[
                                ['Daily IQ Quiz', '+50 XP'],
                                ['Weekly Check-in', '+200 XP'],
                                ['Challenge Entry', '+500 XP'],
                                ['Top 10 Finish', '+2,000 XP'],
                                ['Challenge Win', '+10,000 XP'],
                            ].map(([action, xp]) => (
                                <div key={action} className="flex justify-between">
                                    <span className="text-[var(--color-text-secondary)]">{action}</span>
                                    <span className="text-[var(--color-primary)] font-bold">{xp}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}

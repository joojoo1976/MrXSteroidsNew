'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const CATEGORIES = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

const PROTOCOLS = [
    {
        id: 'p1',
        name: 'Classic Test-E Beginner Blast',
        tier: 'Beginner',
        duration: '12 weeks',
        compounds: ['Testosterone Enanthate 300mg/wk', 'Anastrozole 0.25mg EOD'],
        pct: ['Nolvadex 40/40/20/20', 'Clomid 50/50/25/25'],
        description: 'The gold-standard introductory cycle. Single-compound simplicity with robust AI management and full PCT.',
        tags: ['Testosterone', 'Single Compound', 'PCT Included'],
        locked: false,
        views: 24_800,
        rating: 4.9,
        expertNote: 'Recommended as first cycle by >90% of experienced coaches in the community.',
    },
    {
        id: 'p2',
        name: 'Test + Deca Lean Bulk',
        tier: 'Intermediate',
        duration: '16 weeks',
        compounds: ['Testosterone Cypionate 400mg/wk', 'Nandrolone Decanoate 300mg/wk', 'Cabergoline 0.25mg E3D', 'Anastrozole 0.5mg EOD'],
        pct: ['Nolvadex 40/40/20/20', 'HCG 1500 IU E3D (last 3 wks)'],
        description: 'A classic two-compound cycle optimized for lean tissue gain with minimal water retention and libido management.',
        tags: ['Test + Deca', 'Prolactin Management', 'HCG'],
        locked: false,
        views: 18_200,
        rating: 4.8,
        expertNote: null,
    },
    {
        id: 'p3',
        name: 'Recomp: Test/Mast/Anavar',
        tier: 'Intermediate',
        duration: '12 weeks',
        compounds: ['Testosterone Propionate 100mg EOD', 'Masteron Propionate 100mg EOD', 'Anavar 50mg ED (8 wks)'],
        pct: ['Nolvadex 40/40/20/20'],
        description: 'The definitive recomp stack. Dry, hardening compounds with low aromatization for simultaneous fat loss and muscle retention.',
        tags: ['Recomp', 'Dry', 'Short Esters'],
        locked: true,
        views: 15_400,
        rating: 4.9,
        expertNote: null,
    },
    {
        id: 'p4',
        name: 'Advanced Contest Prep Blend',
        tier: 'Advanced',
        duration: '20 weeks',
        compounds: ['Testosterone Prop 100mg EOD', 'Trenbolone Ace 75mg EOD', 'Winstrol 50mg ED (final 6wks)', 'T3 25-50mcg ED', 'GH 2IU ED'],
        pct: ['HCG Bridge', 'Nolvadex 40/20/20/20'],
        description: 'Competition-grade preparation protocol for advanced athletes. Requires baseline bloodwork and experienced coach supervision.',
        tags: ['Contest Prep', 'Trenbolone', 'GH'],
        locked: true,
        views: 9_800,
        rating: 4.7,
        expertNote: 'This protocol requires bloodwork every 4 weeks minimum.',
    },
    {
        id: 'p5',
        name: 'TRT + Blast Protocol',
        tier: 'Advanced',
        duration: '8 weeks blast / ongoing TRT',
        compounds: ['TRT Base 150mg/wk Test-C', 'Blast: +250mg Test-C/wk', 'Primobolan 400mg/wk', 'HGH Peptides'],
        pct: ['No PCT — cruise back to TRT'],
        description: 'Optimized blast strategy for athletes on hormone replacement therapy. Maintains homeostasis with strategic blast windows.',
        tags: ['TRT', 'Cruise & Blast', 'Peptides'],
        locked: true,
        views: 12_300,
        rating: 4.8,
        expertNote: null,
    },
    {
        id: 'p6',
        name: 'Expert Tissue Manipulation',
        tier: 'Expert',
        duration: '24 weeks',
        compounds: ['Test Undecanoate 1000mg/wk', 'Equipoise 600mg/wk', 'Superdrol ED (kickstart)', 'Telmisartan 40mg ED', 'Cabergoline 0.5mg/wk'],
        pct: ['12-week HCG protocol', 'Clomid + Nolvadex hybrid'],
        description: 'Elite-level off-season mass accumulation reserve for professional-caliber athletes with multiple prior cycles.',
        tags: ['Off-Season', 'Mass', 'Expert Only'],
        locked: true,
        views: 5_400,
        rating: 4.6,
        expertNote: 'Requires pharmaceutical-grade sourcing and on-call medical supervision.',
    },
];

const TIER_COLOR: Record<string, string> = {
    Beginner: '#16a34a',
    Intermediate: '#0891b2',
    Advanced: '#d97706',
    Expert: '#e11d48',
};

export default function LibraryPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filtered = PROTOCOLS.filter(p => activeCategory === 'All' || p.tier === activeCategory);

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
                        <Link href="/library" className="text-white font-bold border-b-2 border-[var(--color-primary)] pb-0.5">Cycles Library</Link>
                        <Link href="/tools" className="hover:text-white transition-colors">Science Tools</Link>
                        <Link href="/challenges" className="hover:text-white transition-colors">Challenges</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/auth/login"><Button variant="ghost" className="text-sm">Sign In</Button></Link>
                        <Link href="/auth/register"><Button variant="primary" className="text-sm">Get Started</Button></Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="border-b border-white/10 bg-gradient-to-b from-[var(--color-surface-dark)] to-transparent">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest">🔒 Gated Knowledge Base</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Cycles<br />
                        <span className="text-[var(--color-primary)]">Protocol Library</span>
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mb-6">
                        Evidence-based steroid cycle blueprints — curated by IFBB pros, MDs, and the Iron & Grit expert council. Premium content requires a subscription.
                    </p>
                    {/* Paywall Notice */}
                    <div className="inline-flex items-center gap-3 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded px-5 py-3">
                        <span className="text-[var(--color-primary)]">🔑</span>
                        <span className="text-sm text-white">Some protocols are locked. <Link href="/checkout" className="text-[var(--color-primary)] font-bold underline">Upgrade to Pro</Link> to unlock all content.</span>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === cat
                                    ? 'bg-[var(--color-primary)] text-white'
                                    : 'bg-[var(--color-surface-dark)] text-[var(--color-text-secondary)] hover:text-white border border-white/10'
                                }`}
                            style={activeCategory !== cat && cat !== 'All' ? { borderColor: `${TIER_COLOR[cat]}33` } : {}}
                        >
                            {cat !== 'All' && <span className="mr-1" style={{ color: TIER_COLOR[cat] }}>●</span>}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Protocol Cards */}
                <div className="space-y-4">
                    {filtered.map(proto => (
                        <Card key={proto.id} className={`overflow-hidden transition-all ${proto.locked ? 'opacity-80' : ''}`}>
                            <div className="h-0.5" style={{ backgroundColor: TIER_COLOR[proto.tier] }} />
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 flex-wrap mb-1">
                                            <h2 className="font-black text-white text-lg">{proto.name}</h2>
                                            {proto.locked && (
                                                <span className="text-xs bg-white/5 text-[var(--color-text-secondary)] border border-white/10 px-2 py-0.5 rounded font-bold">🔒 LOCKED</span>
                                            )}
                                            <span className="text-xs font-bold px-2 py-0.5 rounded border"
                                                style={{ color: TIER_COLOR[proto.tier], backgroundColor: `${TIER_COLOR[proto.tier]}15`, borderColor: `${TIER_COLOR[proto.tier]}30` }}>
                                                {proto.tier.toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                                            <span>⏱ {proto.duration}</span>
                                            <span>★ {proto.rating}</span>
                                            <span>👁 {proto.views.toLocaleString()} views</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant={proto.locked ? 'secondary' : 'ghost'}
                                        className="text-sm flex-shrink-0"
                                        onClick={() => setExpandedId(expandedId === proto.id ? null : proto.id)}
                                    >
                                        {proto.locked ? 'Preview' : expandedId === proto.id ? 'Collapse ▲' : 'View Details ▼'}
                                    </Button>
                                </div>

                                <p className="text-[var(--color-text-secondary)] text-sm mb-3">{proto.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-0">
                                    {proto.tags.map(t => (
                                        <span key={t} className="text-xs bg-white/5 text-[var(--color-text-secondary)] px-2 py-0.5 rounded border border-white/5">{t}</span>
                                    ))}
                                </div>

                                {/* Expanded Detail */}
                                {expandedId === proto.id && !proto.locked && (
                                    <div className="mt-5 pt-5 border-t border-white/5 grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                                                <span className="text-[var(--color-primary)]">⚗</span> Compounds
                                            </h4>
                                            <ul className="space-y-2">
                                                {proto.compounds.map((c, i) => (
                                                    <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                                                        <span className="text-[var(--color-primary)] mt-0.5">—</span> {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                                                <span className="text-[var(--color-primary)]">🔄</span> PCT Protocol
                                            </h4>
                                            <ul className="space-y-2">
                                                {proto.pct.map((p, i) => (
                                                    <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                                                        <span className="text-[var(--color-primary)] mt-0.5">—</span> {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {proto.expertNote && (
                                            <div className="md:col-span-2 bg-amber-400/5 border border-amber-400/20 rounded p-4">
                                                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">⚠ Expert Note: </span>
                                                <span className="text-sm text-[var(--color-text-secondary)]">{proto.expertNote}</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Locked Gate */}
                                {expandedId === proto.id && proto.locked && (
                                    <div className="mt-5 pt-5 border-t border-white/5 text-center py-8 bg-white/2 rounded">
                                        <div className="text-4xl mb-3">🔒</div>
                                        <p className="text-[var(--color-text-secondary)] mb-4">This protocol requires a Pro subscription to view.</p>
                                        <Link href="/checkout">
                                            <Button variant="primary">Unlock Pro — View All Protocols</Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

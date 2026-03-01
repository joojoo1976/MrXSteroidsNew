'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Simulated weekly data for the progress chart
const WEEKLY_DATA = [
    { week: 'W1', weight: 96.2, bf: 18.1, lbm: 78.8, calories: 3200 },
    { week: 'W2', weight: 95.8, bf: 17.9, lbm: 78.7, calories: 3200 },
    { week: 'W3', weight: 95.4, bf: 17.6, lbm: 78.9, calories: 3300 },
    { week: 'W4', weight: 95.0, bf: 17.4, lbm: 78.5, calories: 3300 },
    { week: 'W5', weight: 94.8, bf: 17.2, lbm: 78.5, calories: 3400 },
    { week: 'W6', weight: 94.5, bf: 17.0, lbm: 78.4, calories: 3400 },
    { week: 'W7', weight: 94.3, bf: 16.8, lbm: 78.6, calories: 3500 },
    { week: 'W8', weight: 94.2, bf: 16.7, lbm: 78.4, calories: 3500 },
];

const BLOODWORK = [
    { marker: 'Total Testosterone', value: '1,240 ng/dL', ref: '264–916', status: 'elevated', week: 4 },
    { marker: 'Free Testosterone', value: '38.2 pg/mL', ref: '8.7–25.1', status: 'elevated', week: 4 },
    { marker: 'Estradiol (E2)', value: '28 pg/mL', ref: '7.6–42.6', status: 'normal', week: 4 },
    { marker: 'Hematocrit', value: '49.2%', ref: '<52%', status: 'normal', week: 4 },
    { marker: 'ALT (SGPT)', value: '42 U/L', ref: '7–56', status: 'normal', week: 4 },
    { marker: 'LDL Cholesterol', value: '118 mg/dL', ref: '<100', status: 'watch', week: 4 },
    { marker: 'HDL Cholesterol', value: '38 mg/dL', ref: '>40', status: 'watch', week: 4 },
    { marker: 'PSA', value: '0.9 ng/mL', ref: '<4.0', status: 'normal', week: 4 },
];

const STATUS_STYLE: Record<string, string> = {
    normal: 'text-green-400 bg-green-400/10 border-green-400/20',
    elevated: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    watch: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    critical: 'text-red-400 bg-red-400/10 border-red-400/20',
};

// Inline mini chart
function MiniChart({ data, field, color }: { data: typeof WEEKLY_DATA; field: keyof typeof WEEKLY_DATA[0]; color: string }) {
    const values = data.map(d => d[field] as number);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const H = 48;
    const W = data.length - 1;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-12" preserveAspectRatio="none">
            <defs>
                <linearGradient id={`grad-${field}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <polyline fill={`url(#grad-${field})`} stroke="none"
                points={[
                    ...values.map((v, i) => `${i},${H - ((v - min) / range) * H}`),
                    `${W},${H}`, `0,${H}`,
                ].join(' ')} />
            <polyline fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"
                points={values.map((v, i) => `${i},${H - ((v - min) / range) * H}`).join(' ')} />
        </svg>
    );
}

export default function ProgressPage() {
    const [activeTab, setActiveTab] = useState<'body' | 'bloodwork' | 'photos'>('body');
    const latest = WEEKLY_DATA[WEEKLY_DATA.length - 1];
    const first = WEEKLY_DATA[0];

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
                        <Link href="/dashboard/trainee" className="hover:text-white transition-colors">← Dashboard</Link>
                    </nav>
                    <Button variant="primary" className="text-sm">Submit Check-in</Button>
                </div>
            </header>

            {/* Page Header */}
            <div className="border-b border-white/10 bg-gradient-to-b from-[var(--color-surface-dark)] to-transparent">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest">Week 8 of 16</span>
                    <h1 className="text-3xl font-black uppercase mt-2 mb-1">My <span className="text-[var(--color-primary)]">Progress</span></h1>
                    <p className="text-[var(--color-text-secondary)] text-sm">Mass Protocol · Coach Marcus Webb · Started Jan 1, 2026</p>

                    {/* Top-line metrics */}
                    <div className="flex flex-wrap gap-8 mt-6">
                        {[
                            { label: 'Weight Change', value: `${(latest.weight - first.weight).toFixed(1)} kg`, pos: first.weight > latest.weight },
                            { label: 'Body Fat Change', value: `${(latest.bf - first.bf).toFixed(1)} %`, pos: first.bf > latest.bf },
                            { label: 'LBM Change', value: `+${(latest.lbm - first.lbm).toFixed(1)} kg`, pos: true },
                            { label: 'Weeks Complete', value: `8 / 16`, pos: null },
                        ].map(m => (
                            <div key={m.label}>
                                <div className={`text-2xl font-black ${m.pos === null ? 'text-[var(--color-primary)]' : m.pos ? 'text-green-400' : 'text-green-400'}`}>{m.value}</div>
                                <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-white/10 bg-[var(--color-background-dark)]">
                <div className="max-w-6xl mx-auto px-6 flex gap-1">
                    {(['body', 'bloodwork', 'photos'] as const).map(t => (
                        <button key={t} onClick={() => setActiveTab(t)}
                            className={`px-5 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-all capitalize ${activeTab === t
                                    ? 'border-[var(--color-primary)] text-white'
                                    : 'border-transparent text-[var(--color-text-secondary)] hover:text-white'
                                }`}>
                            {t === 'body' ? 'Body Composition' : t === 'bloodwork' ? 'Bloodwork' : 'Progress Photos'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* ──── BODY COMPOSITION ──── */}
                {activeTab === 'body' && (
                    <div className="space-y-6">
                        {/* Chart Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                { title: 'Body Weight (kg)', field: 'weight' as const, color: '#e11d48', unit: 'kg' },
                                { title: 'Body Fat %', field: 'bf' as const, color: '#d97706', unit: '%' },
                                { title: 'Lean Body Mass (kg)', field: 'lbm' as const, color: '#16a34a', unit: 'kg' },
                            ].map(m => (
                                <Card key={m.field} className="p-5">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">{m.title}</div>
                                    <div className="text-3xl font-black text-white mb-3">
                                        {latest[m.field]}{m.unit}
                                    </div>
                                    <MiniChart data={WEEKLY_DATA} field={m.field} color={m.color} />
                                    <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                                        <span>W1: {first[m.field]}{m.unit}</span>
                                        <span>W8: {latest[m.field]}{m.unit}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Weekly Table */}
                        <Card className="p-6 overflow-auto">
                            <h3 className="font-black text-white text-base mb-4">Weekly Log</h3>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left text-xs text-[var(--color-text-secondary)] uppercase border-b border-white/5">
                                        {['Week', 'Weight', 'Body Fat', 'Lean Mass', 'Calories'].map(h => (
                                            <th key={h} className="pb-3 pr-6">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...WEEKLY_DATA].reverse().map(row => (
                                        <tr key={row.week} className="border-b border-white/5 hover:bg-white/2">
                                            <td className="py-3 pr-6 font-bold text-[var(--color-primary)]">{row.week}</td>
                                            <td className="py-3 pr-6 text-white">{row.weight} kg</td>
                                            <td className="py-3 pr-6 text-white">{row.bf}%</td>
                                            <td className="py-3 pr-6 text-white">{row.lbm} kg</td>
                                            <td className="py-3 pr-6 text-white">{row.calories} kcal</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                )}

                {/* ──── BLOODWORK ──── */}
                {activeTab === 'bloodwork' && (
                    <div className="space-y-6 max-w-3xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-black text-white text-base">Week 4 Panel</h3>
                                <p className="text-xs text-[var(--color-text-secondary)]">Submitted Feb 8, 2026 · Reviewed by Marcus Webb</p>
                            </div>
                            <Button variant="secondary" className="text-sm">Upload New Results</Button>
                        </div>

                        <div className="space-y-3">
                            {BLOODWORK.map(b => (
                                <Card key={b.marker} className="p-4 flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="font-bold text-white text-sm">{b.marker}</div>
                                        <div className="text-xs text-[var(--color-text-secondary)]">Ref: {b.ref}</div>
                                    </div>
                                    <div className="text-white font-black text-base">{b.value}</div>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded border capitalize ${STATUS_STYLE[b.status]}`}>
                                        {b.status}
                                    </span>
                                </Card>
                            ))}
                        </div>

                        <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded">
                            <p className="text-amber-400 font-bold text-sm mb-1">⚠ Coach Note — Week 4</p>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                LDL and HDL need monitoring. Continue fish oil 4g/day. Hematocrit within safe range. Consider donating blood at week 8 if we see further rise. E2 at 28 is perfect — do not adjust AI.
                            </p>
                        </div>
                    </div>
                )}

                {/* ──── PROGRESS PHOTOS ──── */}
                {activeTab === 'photos' && (
                    <div className="max-w-2xl">
                        <div className="text-center py-16">
                            <div className="text-5xl mb-4">📸</div>
                            <h3 className="font-black text-white text-lg mb-2">Progress Photos</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm mb-6">Upload weekly front, back, and side photos. Only your coach can view them.</p>
                            <Button variant="primary">Upload This Week's Photos</Button>
                            <p className="text-xs text-[var(--color-text-secondary)] mt-4">Accepted: JPG, PNG · Max 10MB per photo</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

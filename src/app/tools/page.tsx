'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// ───────────────────────────── Half-Life Simulator ─────────────────────────────
const COMPOUNDS_DB = [
    { name: 'Testosterone Enanthate', halfLife: 4.5, unit: 'days', ester: 'Enanthate' },
    { name: 'Testosterone Cypionate', halfLife: 5, unit: 'days', ester: 'Cypionate' },
    { name: 'Testosterone Propionate', halfLife: 0.8, unit: 'days', ester: 'Propionate' },
    { name: 'Testosterone Undecanoate', halfLife: 21, unit: 'days', ester: 'Undecanoate' },
    { name: 'Nandrolone Decanoate (Deca)', halfLife: 6, unit: 'days', ester: 'Decanoate' },
    { name: 'Trenbolone Acetate', halfLife: 1, unit: 'days', ester: 'Acetate' },
    { name: 'Trenbolone Enanthate', halfLife: 5, unit: 'days', ester: 'Enanthate' },
    { name: 'Boldenone Undecylenate (EQ)', halfLife: 14, unit: 'days', ester: 'Undecylenate' },
    { name: 'Stanozolol (Winstrol)', halfLife: 1.5, unit: 'days', ester: 'N/A (oral)' },
    { name: 'Methandrostenolone (Dbol)', halfLife: 0.25, unit: 'days', ester: 'N/A (oral)' },
];

function computeConcentration(dose: number, halfLife: number, days: number): number[] {
    const points: number[] = [];
    for (let d = 0; d <= days; d++) {
        const conc = dose * Math.pow(0.5, d / halfLife);
        points.push(Math.max(0, parseFloat(conc.toFixed(1))));
    }
    return points;
}

// ───────────────────────────── Genetic Potential ─────────────────────────────
function computeFFMI(weight: number, height: number, bodyFat: number): number {
    const leanMass = weight * (1 - bodyFat / 100);
    const heightM = height / 100;
    return parseFloat((leanMass / (heightM * heightM)).toFixed(1));
}

function natureLimit(height: number): number {
    const heightM = height / 100;
    return parseFloat(((height - 100) * 0.453592 / (heightM * heightM)).toFixed(1));
}

export default function ToolsPage() {
    const [activeTab, setActiveTab] = useState<'halflife' | 'genetic'>('halflife');

    // Half-Life State
    const [selectedCompound, setSelectedCompound] = useState(COMPOUNDS_DB[0]);
    const [dose, setDose] = useState(250);
    const [simDays, setSimDays] = useState(21);
    const concentrations = computeConcentration(dose, selectedCompound.halfLife, simDays);
    const clearDay = concentrations.findIndex(v => v < 5);

    // Genetic Potential State
    const [weight, setWeight] = useState(85);
    const [height, setHeight] = useState(180);
    const [bodyFat, setBodyFat] = useState(15);
    const ffmi = computeFFMI(weight, height, bodyFat);
    const naturalLimit = natureLimit(height);
    const pctOfPotential = Math.min(100, Math.round((ffmi / naturalLimit) * 100));
    const ffmiLabel = ffmi < 18 ? 'Below Average' : ffmi < 20 ? 'Average' : ffmi < 22 ? 'Above Average' : ffmi < 25 ? 'Excellent (Advanced Lifter)' : ffmi < 28 ? 'Elite (Enhanced Likely)' : 'Pro Level (Heavily Enhanced)';

    // Simple inline chart for blood concentration
    const maxConc = Math.max(...concentrations, 1);
    const chartH = 80;

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
                        <Link href="/tools" className="text-white font-bold border-b-2 border-[var(--color-primary)] pb-0.5">Science Tools</Link>
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
                <div className="max-w-5xl mx-auto px-6 py-14">
                    <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest">🔬 Science Lab</span>
                    <h1 className="text-4xl font-black uppercase tracking-tight mt-3 mb-3">
                        Scientific <span className="text-[var(--color-primary)]">Tools</span>
                    </h1>
                    <p className="text-[var(--color-text-secondary)] max-w-lg">
                        Precision pharmacokinetics and physiology calculators for advanced protocol design.
                    </p>
                </div>
            </section>

            {/* Tab Switcher */}
            <div className="max-w-5xl mx-auto px-6 pt-10">
                <div className="flex gap-2 border-b border-white/10 mb-10">
                    {([
                        { key: 'halflife', label: '⏱ Half-Life Blood Simulator' },
                        { key: 'genetic', label: '🧬 Genetic Potential Calculator' },
                    ] as const).map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-5 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${activeTab === tab.key
                                    ? 'border-[var(--color-primary)] text-white'
                                    : 'border-transparent text-[var(--color-text-secondary)] hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ──── HALF-LIFE SIMULATOR ──── */}
                {activeTab === 'halflife' && (
                    <div className="grid md:grid-cols-2 gap-8 pb-16">
                        {/* Controls */}
                        <div className="space-y-6">
                            <Card className="p-6">
                                <h2 className="font-black text-white text-lg mb-5">Compound Settings</h2>
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Compound</label>
                                        <select
                                            value={selectedCompound.name}
                                            onChange={e => setSelectedCompound(COMPOUNDS_DB.find(c => c.name === e.target.value)!)}
                                            className="w-full bg-[var(--color-background-dark)] border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-[var(--color-primary)]"
                                        >
                                            {COMPOUNDS_DB.map(c => (
                                                <option key={c.name} value={c.name}>{c.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                                            Dose (mg): <span className="text-white font-bold">{dose}mg</span>
                                        </label>
                                        <input type="range" min={50} max={1000} step={25} value={dose}
                                            onChange={e => setDose(Number(e.target.value))}
                                            className="w-full accent-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                                            Simulation Days: <span className="text-white font-bold">{simDays} days</span>
                                        </label>
                                        <input type="range" min={7} max={60} step={1} value={simDays}
                                            onChange={e => setSimDays(Number(e.target.value))}
                                            className="w-full accent-[var(--color-primary)]" />
                                    </div>
                                </div>
                            </Card>

                            {/* Result Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-4 border-t-2 border-t-[var(--color-primary)]">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Half-Life</div>
                                    <div className="text-2xl font-black text-white">{selectedCompound.halfLife}d</div>
                                    <div className="text-xs text-[var(--color-text-secondary)]">{selectedCompound.ester} ester</div>
                                </Card>
                                <Card className="p-4 border-t-2 border-t-amber-500">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">≤5mg Clearance</div>
                                    <div className="text-2xl font-black text-amber-400">
                                        {clearDay > 0 ? `Day ${clearDay}` : `>Day ${simDays}`}
                                    </div>
                                    <div className="text-xs text-[var(--color-text-secondary)]">detection window</div>
                                </Card>
                            </div>
                        </div>

                        {/* Chart */}
                        <Card className="p-6">
                            <h2 className="font-black text-white text-lg mb-5">Blood Concentration Curve</h2>
                            <div className="mb-4">
                                <div className="relative" style={{ height: chartH }}>
                                    <svg viewBox={`0 0 ${simDays} ${chartH}`} className="w-full h-full" preserveAspectRatio="none">
                                        {/* Grid lines */}
                                        {[0.25, 0.5, 0.75].map(pct => (
                                            <line key={pct} x1="0" y1={chartH * pct} x2={simDays} y2={chartH * pct}
                                                stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                                        ))}
                                        {/* Area fill */}
                                        <defs>
                                            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#e11d48" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <polyline
                                            fill="url(#areaGrad)"
                                            stroke="none"
                                            points={[
                                                ...concentrations.map((v, i) => `${i},${chartH - (v / maxConc) * chartH}`),
                                                `${simDays},${chartH}`,
                                                `0,${chartH}`,
                                            ].join(' ')}
                                        />
                                        {/* Line */}
                                        <polyline
                                            fill="none"
                                            stroke="#e11d48"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            points={concentrations.map((v, i) => `${i},${chartH - (v / maxConc) * chartH}`).join(' ')}
                                        />
                                    </svg>
                                </div>
                                {/* X-axis */}
                                <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                                    <span>Day 0</span>
                                    <span>Day {Math.floor(simDays / 2)}</span>
                                    <span>Day {simDays}</span>
                                </div>
                            </div>
                            {/* Table */}
                            <div className="overflow-auto max-h-64 mt-4">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-left text-xs text-[var(--color-text-secondary)] uppercase border-b border-white/5">
                                            <th className="pb-2 pr-4">Day</th>
                                            <th className="pb-2 pr-4">Concentration</th>
                                            <th className="pb-2">% Remaining</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {concentrations.filter((_, i) => i % Math.max(1, Math.floor(simDays / 10)) === 0).map((v, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/2">
                                                <td className="py-1.5 pr-4 text-[var(--color-text-secondary)]">
                                                    {idx * Math.max(1, Math.floor(simDays / 10))}
                                                </td>
                                                <td className="py-1.5 pr-4 font-bold text-white">{v}mg</td>
                                                <td className="py-1.5">
                                                    <span className={v / dose > 0.5 ? 'text-red-400' : v / dose > 0.1 ? 'text-amber-400' : 'text-green-400'}>
                                                        {Math.round((v / dose) * 100)}%
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                )}

                {/* ──── GENETIC POTENTIAL ──── */}
                {activeTab === 'genetic' && (
                    <div className="grid md:grid-cols-2 gap-8 pb-16">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <Card className="p-6">
                                <h2 className="font-black text-white text-lg mb-5">Your Measurements</h2>
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                                            Body Weight (kg): <span className="text-white font-bold">{weight}kg</span>
                                        </label>
                                        <input type="range" min={50} max={150} step={1} value={weight}
                                            onChange={e => setWeight(Number(e.target.value))}
                                            className="w-full accent-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                                            Height (cm): <span className="text-white font-bold">{height}cm</span>
                                        </label>
                                        <input type="range" min={150} max={220} step={1} value={height}
                                            onChange={e => setHeight(Number(e.target.value))}
                                            className="w-full accent-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                                            Body Fat %: <span className="text-white font-bold">{bodyFat}%</span>
                                        </label>
                                        <input type="range" min={5} max={40} step={0.5} value={bodyFat}
                                            onChange={e => setBodyFat(Number(e.target.value))}
                                            className="w-full accent-[var(--color-primary)]" />
                                    </div>
                                </div>
                            </Card>

                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-4 border-t-2 border-t-[var(--color-primary)]">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Your FFMI</div>
                                    <div className="text-3xl font-black text-white">{ffmi}</div>
                                </Card>
                                <Card className="p-4 border-t-2 border-t-green-500">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Natural Ceiling</div>
                                    <div className="text-3xl font-black text-green-400">{naturalLimit}</div>
                                </Card>
                            </div>
                        </div>

                        {/* Results */}
                        <Card className="p-6">
                            <h2 className="font-black text-white text-lg mb-5">Genetic Potential Analysis</h2>

                            {/* FFMI gauge */}
                            <div className="mb-6">
                                <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mb-2">
                                    <span>Below Average</span>
                                    <span className="text-white font-bold">{ffmiLabel}</span>
                                    <span>Pro Level</span>
                                </div>
                                <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                    {/* FFMI scale: 14 to 30 */}
                                    <div
                                        className="h-full rounded-full transition-all duration-500"
                                        style={{
                                            width: `${Math.min(100, Math.max(0, ((ffmi - 14) / 16) * 100))}%`,
                                            background: ffmi < 22 ? '#16a34a' : ffmi < 25 ? '#d97706' : '#e11d48',
                                        }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                                    <span>FFMI 14</span>
                                    <span>25 (Natural Limit)</span>
                                    <span>30</span>
                                </div>
                            </div>

                            {/* % of Potential */}
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm text-[var(--color-text-secondary)]">% of Natural Genetic Potential Reached</span>
                                    <span className="font-bold text-white">{pctOfPotential}%</span>
                                </div>
                                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-500 bg-[var(--color-primary)]"
                                        style={{ width: `${pctOfPotential}%` }}
                                    />
                                </div>
                            </div>

                            {/* Key Metrics */}
                            <div className="space-y-3">
                                {[
                                    { label: 'Lean Body Mass', value: `${(weight * (1 - bodyFat / 100)).toFixed(1)} kg` },
                                    { label: 'Fat Mass', value: `${(weight * bodyFat / 100).toFixed(1)} kg` },
                                    { label: 'Estimated Potential LBM', value: `${(naturalLimit * Math.pow(height / 100, 2)).toFixed(1)} kg` },
                                    { label: 'Lean Mass Remaining', value: `${Math.max(0, (naturalLimit * Math.pow(height / 100, 2)) - (weight * (1 - bodyFat / 100))).toFixed(1)} kg` },
                                ].map(m => (
                                    <div key={m.label} className="flex justify-between text-sm py-2 border-b border-white/5">
                                        <span className="text-[var(--color-text-secondary)]">{m.label}</span>
                                        <span className="font-bold text-white">{m.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 p-4 bg-white/2 rounded border border-white/5 text-xs text-[var(--color-text-secondary)]">
                                <strong className="text-white">Note:</strong> Natural FFMI ceiling based on the Casey Butt formula. FFMI above 25 is statistically rare without pharmacological assistance.
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}

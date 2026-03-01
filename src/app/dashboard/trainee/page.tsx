import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const WEEK_TASKS = [
    { done: true, label: 'Submit weekly bodyweight check-in' },
    { done: true, label: 'Log Monday push session' },
    { done: true, label: 'Log Tuesday pull session' },
    { done: false, label: 'Log Wednesday leg session' },
    { done: false, label: 'Submit progress photos' },
    { done: false, label: 'Record compound lift PRs' },
    { done: false, label: 'Send bloods to coach by Friday' },
];

const METRICS = [
    { label: 'Body Weight', value: '94.2 kg', delta: '+0.8kg', positive: true },
    { label: 'Lean Mass (DEXA)', value: '78.4 kg', delta: '+1.1kg', positive: true },
    { label: 'Body Fat', value: '16.7%', delta: '-0.4%', positive: true },
    { label: 'Protocol Week', value: 'Week 8 / 16', delta: '50% complete', positive: null },
];

const LIFTS = [
    { lift: 'Squat', current: 180, baseline: 160, unit: 'kg' },
    { lift: 'Bench Press', current: 130, baseline: 115, unit: 'kg' },
    { lift: 'Deadlift', current: 220, baseline: 195, unit: 'kg' },
    { lift: 'Overhead Press', current: 87.5, baseline: 80, unit: 'kg' },
];

const TIMELINE = [
    { week: 'W1–4', phase: 'Adaptation', status: 'done', note: 'Baseline established. Conservative loading.' },
    { week: 'W5–8', phase: 'Volume Accumulation', status: 'active', note: 'Current phase. High volume, moderate intensity.' },
    { week: 'W9–12', phase: 'Intensification', status: 'upcoming', note: 'Reduce volume, increase intensity.' },
    { week: 'W13–16', phase: 'Peak & Test', status: 'upcoming', note: 'PR attempts + final DEXA scan.' },
];

const STATUS_STYLE: Record<string, string> = {
    done: 'bg-green-400/10 border-green-400/20 text-green-400',
    active: 'bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20 text-[var(--color-primary)]',
    upcoming: 'bg-white/5 border-white/10 text-[var(--color-text-secondary)]',
};

export default function TraineeDashboardPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans flex">

            {/* Sidebar */}
            <aside className="w-60 border-r border-white/10 hidden md:flex flex-col flex-shrink-0">
                <div className="p-5 border-b border-white/10">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {[
                        { href: '/dashboard/trainee', label: 'My Dashboard', icon: '⊞', active: true },
                        { href: '/library', label: 'My Protocol', icon: '📋', active: false },
                        { href: '/tools', label: 'Science Lab', icon: '🔬', active: false },
                        { href: '/challenges', label: 'Challenges', icon: '🏆', active: false },
                        { href: '/messages', label: 'Messages', icon: '✉', active: false, badge: '2' },
                        { href: '/coaches', label: 'Find Coach', icon: '👤', active: false },
                    ].map(item => (
                        <Link key={item.href} href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${item.active
                                    ? 'bg-[var(--color-surface-dark)] text-white font-bold'
                                    : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'
                                }`}>
                            <span>{item.icon}</span>
                            <span className="flex-1">{item.label}</span>
                            {item.badge && (
                                <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
                            )}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-white/10">
                    <Button variant="ghost" className="w-full justify-start text-[var(--color-text-secondary)] hover:text-white text-sm">
                        ← Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 overflow-auto">
                {/* Topbar */}
                <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 sticky top-0 bg-[var(--color-background-dark)]/95 backdrop-blur-sm z-10">
                    <div>
                        <h1 className="font-black text-white text-lg">My Dashboard</h1>
                        <p className="text-xs text-[var(--color-text-secondary)]">Week 8 · Mass Protocol · Coach Marcus Webb</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/messages">
                            <button className="relative text-[var(--color-text-secondary)] hover:text-white transition-colors">
                                <span className="text-xl">✉</span>
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-primary)] rounded-full text-xs flex items-center justify-center font-bold">2</span>
                            </button>
                        </Link>
                        <div className="w-9 h-9 rounded bg-[var(--color-surface-dark)] border border-white/10 flex items-center justify-center font-black text-sm text-[var(--color-primary)]">
                            AJ
                        </div>
                    </div>
                </header>

                <div className="p-6 space-y-8 max-w-6xl">

                    {/* Metrics */}
                    <section>
                        <h2 className="text-[var(--color-text-secondary)] text-xs font-bold uppercase tracking-widest mb-4">Performance Metrics</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {METRICS.map(m => (
                                <Card key={m.label} className="p-4">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{m.label}</div>
                                    <div className="text-2xl font-black text-white mb-1">{m.value}</div>
                                    <div className={`text-xs font-bold ${m.positive === true ? 'text-green-400' : m.positive === false ? 'text-red-400' : 'text-[var(--color-primary)]'}`}>
                                        {m.delta}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Task Checklist */}
                        <div className="lg:col-span-1">
                            <Card className="p-5">
                                <h3 className="font-black text-white text-base mb-4 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">✓</span> Weekly Tasks
                                </h3>
                                <div className="space-y-3">
                                    {WEEK_TASKS.map((t, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border ${t.done ? 'bg-[var(--color-primary)] border-[var(--color-primary)]' : 'border-white/20'}`}>
                                                {t.done && <span className="text-white text-xs font-bold">✓</span>}
                                            </div>
                                            <span className={`text-sm ${t.done ? 'text-[var(--color-text-secondary)] line-through' : 'text-white'}`}>{t.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mb-2">
                                        <span>Progress</span>
                                        <span className="text-white font-bold">{WEEK_TASKS.filter(t => t.done).length}/{WEEK_TASKS.length}</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[var(--color-primary)] rounded-full transition-all"
                                            style={{ width: `${(WEEK_TASKS.filter(t => t.done).length / WEEK_TASKS.length) * 100}%` }} />
                                    </div>
                                </div>
                                <Button variant="primary" className="w-full mt-4 text-sm">Submit Check-in</Button>
                            </Card>
                        </div>

                        {/* Strength Stats */}
                        <div className="lg:col-span-2 space-y-5">
                            <Card className="p-5">
                                <h3 className="font-black text-white text-base mb-4 flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">⚡</span> Strength Progress
                                </h3>
                                <div className="space-y-4">
                                    {LIFTS.map(l => {
                                        const gain = l.current - l.baseline;
                                        const pct = Math.min(100, Math.round((l.current / (l.baseline * 1.3)) * 100));
                                        return (
                                            <div key={l.lift}>
                                                <div className="flex justify-between text-sm mb-1.5">
                                                    <span className="font-bold text-white">{l.lift}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[var(--color-text-secondary)]">Baseline: {l.baseline}{l.unit}</span>
                                                        <span className="font-black text-white">{l.current}{l.unit}</span>
                                                        <span className="text-green-400 font-bold text-xs">+{gain}{l.unit}</span>
                                                    </div>
                                                </div>
                                                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full"
                                                        style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #e11d48, #f97316)' }} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>

                            {/* Coach Message */}
                            <Card className="p-5 border-l-4 border-l-[var(--color-primary)]">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center font-black text-sm text-[var(--color-primary)] flex-shrink-0">
                                        MW
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-sm mb-0.5">Coach Marcus Webb</div>
                                        <div className="text-xs text-[var(--color-text-secondary)] mb-2">2 hours ago</div>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            Great progress this week. Your deadlift is tracking 2 weeks ahead of where I projected. Bump the working sets by one set on squats this week — you're recovered enough. Submit bloodwork before Friday, we'll evaluate AI dosage at week 8.
                                        </p>
                                        <Link href="/messages" className="text-[var(--color-primary)] text-xs font-bold mt-2 inline-block hover:underline">
                                            Reply in Messages →
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Protocol Timeline */}
                    <section>
                        <h2 className="text-[var(--color-text-secondary)] text-xs font-bold uppercase tracking-widest mb-4">Protocol Timeline</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {TIMELINE.map(phase => (
                                <Card key={phase.week} className={`p-4 relative ${phase.status === 'active' ? 'border-[var(--color-primary)]/40' : ''}`}>
                                    {phase.status === 'active' && (
                                        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                                    )}
                                    <div className="text-xs font-bold text-[var(--color-text-secondary)] mb-1">{phase.week}</div>
                                    <div className="font-black text-white text-sm mb-2">{phase.phase}</div>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${STATUS_STYLE[phase.status]}`}>
                                        {phase.status === 'active' ? 'CURRENT' : phase.status === 'done' ? 'COMPLETE' : 'UPCOMING'}
                                    </span>
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-3 leading-relaxed">{phase.note}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}

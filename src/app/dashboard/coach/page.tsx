'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Mock data for the coach dashboard
const COACH_STATS = {
    activeAthletes: 18,
    maxAthletes: 20,
    monthlyRecurring: '$5,082',
    pendingCheckins: 4,
    unreadMessages: 11,
    avgCompliance: '94%',
};

const ROSTER = [
    { id: '1', name: 'Alex Johnson', plan: 'Elite Pro', phase: 'Volume Accumulation', week: '8/16', compliance: 98, status: 'checked-in', lastCheckin: '2 hours ago', avatar: 'AJ' },
    { id: '2', name: 'David Smith', plan: 'Contest Prep', phase: 'Peaking', week: '14/16', compliance: 100, status: 'pending-review', lastCheckin: '5 hours ago', avatar: 'DS' },
    { id: '3', name: 'Michael Chen', plan: 'Foundation', phase: 'Adaptation', week: '2/12', compliance: 85, status: 'checked-in', lastCheckin: 'Yesterday', avatar: 'MC' },
    { id: '4', name: 'James Wilson', plan: 'Elite Pro', phase: 'Deload', week: '6/16', compliance: 92, status: 'pending-review', lastCheckin: 'Today', avatar: 'JW' },
    { id: '5', name: 'Robert Taylor', plan: 'Contest Prep', phase: 'Intensification', week: '10/16', compliance: 78, status: 'missed', lastCheckin: '3 days ago', avatar: 'RT' },
];

const QUICK_ACTIONS = [
    { label: 'Review Check-ins', count: 4, icon: '📋', href: '#', color: 'text-amber-400' },
    { label: 'Unread Messages', count: 11, icon: '💬', href: '/messages', color: 'text-[var(--color-primary)]' },
    { label: 'Update Availability', count: 2, icon: '⚙', href: '#', color: 'text-green-400' },
];

export default function CoachDashboardPage() {
    const [filter, setFilter] = useState<'all' | 'pending' | 'missed'>('all');

    const displayedRoster = ROSTER.filter(athlete => {
        if (filter === 'all') return true;
        if (filter === 'pending') return athlete.status === 'pending-review';
        if (filter === 'missed') return athlete.status === 'missed';
        return true;
    });

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans flex flex-col md:flex-row">

            {/* Coach Sidebar */}
            <aside className="w-full md:w-64 border-r border-white/5 bg-[var(--color-surface-dark)]/50 flex flex-col flex-shrink-0">
                <div className="p-6 border-b border-white/5">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white flex items-center gap-2">
                        Iron<span className="text-[var(--color-primary)]">Grit</span>
                    </Link>
                </div>
                <div className="p-6 flex items-center gap-4 border-b border-white/5">
                    <div className="w-12 h-12 rounded bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 flex items-center justify-center text-lg font-black text-white">MW</div>
                    <div>
                        <div className="font-bold text-sm">Marcus Webb</div>
                        <div className="text-xs text-[var(--color-text-secondary)]">Head Coach</div>
                    </div>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {[
                        { label: 'Dashboard Overview', icon: '📊', active: true },
                        { label: 'Athlete Roster', icon: '👥', active: false },
                        { label: 'Check-in Queue', icon: '📋', active: false },
                        { label: 'Protocols library', icon: '📚', active: false },
                        { label: 'Messages', icon: '💬', active: false },
                        { label: 'Earnings & Billing', icon: '💳', active: false },
                    ].map(item => (
                        <Link key={item.label} href="#"
                            className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-bold transition-all ${item.active
                                ? 'bg-[var(--color-primary)]/10 text-white border border-[var(--color-primary)]/20'
                                : 'text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-white'
                                }`}>
                            <span>{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {/* Topbar */}
                <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-[var(--color-background-dark)]/95 backdrop-blur-sm z-10">
                    <h1 className="font-black text-xl uppercase tracking-wider">Coach Command Center</h1>
                    <div className="flex items-center gap-4">
                        <Link href="/coach/coach-1"><Button variant="ghost" className="text-xs">View Public Profile</Button></Link>
                        <Button variant="primary" className="text-xs">Accepting New Clients</Button>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto space-y-8">

                    {/* Welcome & Quick Actions */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h2 className="text-2xl font-black mb-1">Morning, Marcus.</h2>
                                <p className="text-[var(--color-text-secondary)]">You have {COACH_STATS.pendingCheckins} check-ins to review before 8PM tonight.</p>
                            </div>

                            {/* KPI Metrics */}
                            <div className="grid sm:grid-cols-3 gap-4">
                                <Card className="p-5 border-t-2 border-t-[var(--color-primary)]">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Active Roster</div>
                                    <div className="flex items-end gap-2">
                                        <div className="text-3xl font-black">{COACH_STATS.activeAthletes}</div>
                                        <div className="text-sm text-[var(--color-text-secondary)] mb-1">/ {COACH_STATS.maxAthletes}</div>
                                    </div>
                                    <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-[var(--color-primary)]" style={{ width: `${(COACH_STATS.activeAthletes / COACH_STATS.maxAthletes) * 100}%` }} />
                                    </div>
                                </Card>
                                <Card className="p-5 border-t-2 border-t-green-500">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">MRR</div>
                                    <div className="text-3xl font-black">{COACH_STATS.monthlyRecurring}</div>
                                    <div className="text-xs text-green-400 mt-2 font-bold flex items-center gap-1">↑ 12% vs last month</div>
                                </Card>
                                <Card className="p-5 border-t-2 border-t-blue-500">
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Avg Compliance</div>
                                    <div className="text-3xl font-black">{COACH_STATS.avgCompliance}</div>
                                    <div className="text-xs text-[var(--color-text-secondary)] mt-2">Across all active athletes</div>
                                </Card>
                            </div>
                        </div>

                        {/* Action Center */}
                        <Card className="p-6 bg-[var(--color-surface-dark)]/80">
                            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm flex items-center justify-between">
                                Needs Attention
                                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                            </h3>
                            <div className="space-y-3">
                                {QUICK_ACTIONS.map(action => (
                                    <Link key={action.label} href={action.href} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{action.icon}</span>
                                            <span className="text-sm font-medium text-white">{action.label}</span>
                                        </div>
                                        {action.count > 0 && (
                                            <span className={`text-sm font-black ${action.color}`}>{action.count}</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Athlete Roster Table */}
                    <Card className="overflow-hidden">
                        <div className="p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[var(--color-surface-dark)]/50">
                            <h3 className="font-black text-lg">Athlete Roster</h3>
                            <div className="flex gap-2">
                                {(['all', 'pending', 'missed'] as const).map(f => (
                                    <button key={f} onClick={() => setFilter(f)}
                                        className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all capitalize ${filter === f
                                            ? 'bg-white text-black'
                                            : 'bg-white/5 text-[var(--color-text-secondary)] hover:bg-white/10'
                                            }`}>
                                        {f === 'pending' ? 'Needs Review' : f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-xs text-[var(--color-text-secondary)] uppercase bg-white/5 border-b border-white/10">
                                        <th className="px-5 py-3 font-medium">Athlete</th>
                                        <th className="px-5 py-3 font-medium">Plan & Phase</th>
                                        <th className="px-5 py-3 font-medium">Compliance</th>
                                        <th className="px-5 py-3 font-medium">Status</th>
                                        <th className="px-5 py-3 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedRoster.map(athlete => (
                                        <tr key={athlete.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold">{athlete.avatar}</div>
                                                    <div className="font-bold text-white">{athlete.name}</div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="text-white">{athlete.phase}</div>
                                                <div className="text-xs text-[var(--color-text-secondary)]">{athlete.plan} · Wk {athlete.week}</div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className={`font-bold ${athlete.compliance >= 90 ? 'text-green-400' : athlete.compliance >= 80 ? 'text-amber-400' : 'text-[var(--color-primary)]'}`}>
                                                        {athlete.compliance}%
                                                    </div>
                                                    <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden hidden sm:block">
                                                        <div className={`h-full ${athlete.compliance >= 90 ? 'bg-green-400' : athlete.compliance >= 80 ? 'bg-amber-400' : 'bg-[var(--color-primary)]'}`} style={{ width: `${athlete.compliance}%` }} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                {athlete.status === 'pending-review' && <span className="inline-block px-2 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-bold rounded">NEEDS REVIEW</span>}
                                                {athlete.status === 'checked-in' && <span className="inline-block px-2 py-1 bg-green-400/10 text-green-400 border border-green-400/20 text-xs font-bold rounded">ON TRACK</span>}
                                                {athlete.status === 'missed' && <span className="inline-block px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 text-xs font-bold rounded">MISSED CHECK-IN</span>}
                                                <div className="text-[10px] text-[var(--color-text-secondary)] mt-1 uppercase">{athlete.lastCheckin}</div>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <Button variant="secondary" className="text-xs py-1.5 px-3">
                                                    {athlete.status === 'pending-review' ? 'Review Now' : 'Manage'}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                </div>
            </main>
        </div>
    );
}

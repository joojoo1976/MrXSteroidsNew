import Link from 'next/link';
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata = {
    title: "Dashboard | Iron & Grit",
    description: "Iron & Grit - Dashboard | Iron & Grit"
};


export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans flex">

            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-[var(--color-surface-dark)] hidden md:flex flex-col">
                <div className="p-6 border-b border-[var(--color-surface-dark)]">
                    <span className="text-2xl font-black tracking-tighter uppercase italic text-white flex items-center">
                        Iron <span className="text-[var(--color-primary)] ml-2">Grit</span>
                    </span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded bg-[var(--color-surface-dark)] text-white font-bold">
                        <span className="text-[var(--color-primary)]">⊞</span> Overview
                    </Link>
                    <Link href="/dashboard/clients" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-white transition-colors">
                        <span>👥</span> Clients
                    </Link>
                    <Link href="/dashboard/workouts" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-white transition-colors">
                        <span>⚡</span> Workouts
                    </Link>
                    <Link href="/messages" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-white transition-colors">
                        <span>✉</span> Messages
                        <span className="ml-auto bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-[var(--color-surface-dark)]">
                    <Button variant="ghost" className="w-full justify-start text-[var(--color-text-secondary)] hover:text-white">
                        Log Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="h-20 border-b border-[var(--color-surface-dark)] flex items-center justify-between px-8">
                    <h1 className="text-xl font-bold">Coach Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-[var(--color-text-secondary)]">Alex Mercer</span>
                        <div className="w-10 h-10 rounded bg-[var(--color-surface-dark)] border border-white/10 overflow-hidden">
                            <img src="/screens/coach-avatar-placeholder.png" alt="Profile" className="w-full h-full object-cover grayscale" />
                        </div>
                    </div>
                </header>

                <div className="p-8 space-y-8">

                    {/* Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6 border-t-4 border-t-[var(--color-primary)]">
                            <div className="text-[var(--color-text-secondary)] text-sm font-bold uppercase tracking-wider mb-2">Active Athletes</div>
                            <div className="text-4xl font-black">24</div>
                        </Card>
                        <Card className="p-6">
                            <div className="text-[var(--color-text-secondary)] text-sm font-bold uppercase tracking-wider mb-2">Pending Check-ins</div>
                            <div className="text-4xl font-black text-amber-500">7</div>
                        </Card>
                        <Card className="p-6">
                            <div className="text-[var(--color-text-secondary)] text-sm font-bold uppercase tracking-wider mb-2">Monthly MRR</div>
                            <div className="text-4xl font-black text-green-500">$3,600</div>
                        </Card>
                    </div>

                    {/* Action Required */}
                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-[var(--color-primary)]">/</span> Action Required
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <Card key={i} className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-white/20 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center font-bold text-xl text-[var(--color-primary)]">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Athlete {String.fromCharCode(64 + i)}</h4>
                                            <p className="text-sm text-[var(--color-text-secondary)]">Submitted weekly check-in 2 hours ago</p>
                                        </div>
                                    </div>
                                    <Button variant="secondary" className="whitespace-nowrap">Review</Button>
                                </Card>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

        </div>
    );
}

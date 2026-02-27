import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function TraineeDashboardPage() {
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
                    <a href="/dashboard/trainee" className="flex items-center gap-3 px-4 py-3 rounded bg-[var(--color-surface-dark)] text-white font-bold">
                        <span className="text-[var(--color-primary)]">⊞</span> Overview
                    </a>
                    <a href="/dashboard/trainee/program" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-white transition-colors">
                        <span>⚡</span> Active Program
                    </a>
                    <a href="/dashboard/trainee/checkins" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-white transition-colors">
                        <span>📹</span> Check-ins
                    </a>
                    <a href="/messages" className="flex items-center gap-3 px-4 py-3 rounded hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-white transition-colors">
                        <span>✉</span> Coach Chat
                        <span className="ml-auto bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-0.5 rounded-full">1</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="h-20 border-b border-[var(--color-surface-dark)] flex items-center justify-between px-8">
                    <h1 className="text-xl font-bold">Athlete Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="text-sm">Log Out</Button>
                    </div>
                </header>

                <div className="p-8 space-y-8 max-w-5xl">

                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-black mb-1">Week 4 / 12</h2>
                            <p className="text-[var(--color-text-secondary)]">Hypertrophy Block A</p>
                        </div>
                        <Button variant="primary" className="font-bold">Log Workout</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Today's Workout */}
                        <Card className="p-6 border-t-4 border-t-[var(--color-primary)]">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-lg font-bold">Today's Session</h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm">Legs & Core</p>
                                </div>
                                <span className="px-2 py-1 bg-white/10 text-xs font-bold rounded">Day 3</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm py-2 border-b border-[var(--color-surface-dark)]">
                                    <span>Squats</span>
                                    <span className="text-[var(--color-text-secondary)]">4 x 8-10 @ RPE 8</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-[var(--color-surface-dark)]">
                                    <span>Romanian Deadlifts</span>
                                    <span className="text-[var(--color-text-secondary)]">3 x 10 @ RPE 7</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-[var(--color-surface-dark)]">
                                    <span>Leg Press</span>
                                    <span className="text-[var(--color-text-secondary)]">3 x 15 @ RPE 9</span>
                                </div>
                            </div>

                            <Button variant="secondary" className="w-full mt-6">Start Session</Button>
                        </Card>

                        {/* Next Check-in */}
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                <span className="text-amber-500">⚠</span> Next Check-in
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                                Your weekly analysis is due this Sunday. Required: Squat top set video and morning weight average.
                            </p>

                            <div className="bg-[#0a1017] rounded p-4 border border-[var(--color-surface-dark)]">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold">Coach Alex Mercer</span>
                                    <span className="text-xs text-[var(--color-text-secondary)]">2 days ago</span>
                                </div>
                                <p className="text-sm italic text-[var(--color-text-secondary)] border-l-2 border-[var(--color-primary)] pl-3">
                                    "Watch your depth on the squats this week. Let's see if we can add 5lbs to the bar while maintaining form."
                                </p>
                            </div>

                            <Button variant="ghost" className="w-full mt-6 border border-[var(--color-surface-dark)]">
                                Upload Check-in
                            </Button>
                        </Card>

                    </div>

                </div>
            </main>

        </div>
    );
}

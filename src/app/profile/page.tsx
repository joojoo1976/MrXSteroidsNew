'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

type Tab = 'profile' | 'subscription' | 'notifications' | 'security';

const NOTIFICATION_SETTINGS = [
    { key: 'coach_msg', label: 'New message from coach', enabled: true },
    { key: 'checkin_reminder', label: 'Weekly check-in reminder', enabled: true },
    { key: 'protocol_update', label: 'Protocol updated by coach', enabled: true },
    { key: 'challenge_activity', label: 'Challenge activity & results', enabled: false },
    { key: 'community_posts', label: 'Community posts & mentions', enabled: false },
    { key: 'marketing', label: 'Promotions & news', enabled: false },
];

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<Tab>('profile');
    const [notifications, setNotifications] = useState(
        Object.fromEntries(NOTIFICATION_SETTINGS.map(n => [n.key, n.enabled]))
    );
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                    <Link href="/dashboard/trainee">
                        <Button variant="ghost" className="text-sm text-[var(--color-text-secondary)]">← Dashboard</Button>
                    </Link>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* Profile Header */}
                <div className="flex items-center gap-6 mb-10 pb-8 border-b border-white/10">
                    <div className="w-20 h-20 rounded bg-[var(--color-primary)]/15 border-2 border-[var(--color-primary)]/30 flex items-center justify-center text-2xl font-black text-[var(--color-primary)]">
                        AJ
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-white">Alex Johnson</h1>
                        <p className="text-[var(--color-text-secondary)] text-sm">Member since March 2025 · Elite Subscriber</p>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs bg-[var(--color-primary)]/15 text-[var(--color-primary)] border border-[var(--color-primary)]/25 px-2 py-0.5 rounded font-bold">PRO</span>
                            <span className="text-xs text-[var(--color-text-secondary)]">Coach: Marcus Webb</span>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 border-b border-white/10 mb-8">
                    {([
                        { key: 'profile', label: 'Profile' },
                        { key: 'subscription', label: 'Subscription' },
                        { key: 'notifications', label: 'Notifications' },
                        { key: 'security', label: 'Security' },
                    ] as { key: Tab; label: string }[]).map(t => (
                        <button key={t.key} onClick={() => setActiveTab(t.key)}
                            className={`px-5 py-3.5 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${activeTab === t.key
                                    ? 'border-[var(--color-primary)] text-white'
                                    : 'border-transparent text-[var(--color-text-secondary)] hover:text-white'
                                }`}>
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* ──── PROFILE TAB ──── */}
                {activeTab === 'profile' && (
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 space-y-5">
                            <h2 className="font-black text-white text-lg">Personal Information</h2>
                            {[
                                { label: 'First Name', value: 'Alex', type: 'text' },
                                { label: 'Last Name', value: 'Johnson', type: 'text' },
                                { label: 'Email', value: 'alex.johnson@email.com', type: 'email' },
                                { label: 'Country', value: 'Saudi Arabia', type: 'text' },
                            ].map(f => (
                                <div key={f.label}>
                                    <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{f.label}</label>
                                    <input type={f.type} defaultValue={f.value}
                                        className="w-full bg-[var(--color-background-dark)] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                                </div>
                            ))}
                            <Button variant="primary" onClick={handleSave} className="w-full">
                                {saved ? '✓ Saved!' : 'Save Changes'}
                            </Button>
                        </Card>

                        <Card className="p-6 space-y-5">
                            <h2 className="font-black text-white text-lg">Athletic Profile</h2>
                            {[
                                { label: 'Training Goal', value: 'Lean Bulk', type: 'text' },
                                { label: 'Experience Level', value: 'Advanced (6+ years)', type: 'text' },
                                { label: 'Current Body Weight (kg)', value: '94.2', type: 'number' },
                                { label: 'Years Training', value: '8', type: 'number' },
                            ].map(f => (
                                <div key={f.label}>
                                    <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{f.label}</label>
                                    <input type={f.type} defaultValue={f.value}
                                        className="w-full bg-[var(--color-background-dark)] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                                </div>
                            ))}
                            <div>
                                <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Bio / Notes to Coach</label>
                                <textarea rows={3} defaultValue="Looking to compete at amateur level within 18 months. Currently running first coaching protocol with Marcus."
                                    className="w-full bg-[var(--color-background-dark)] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none" />
                            </div>
                            <Button variant="primary" onClick={handleSave} className="w-full">
                                {saved ? '✓ Saved!' : 'Update Profile'}
                            </Button>
                        </Card>
                    </div>
                )}

                {/* ──── SUBSCRIPTION TAB ──── */}
                {activeTab === 'subscription' && (
                    <div className="max-w-2xl space-y-6">
                        <Card className="p-6 border-t-2 border-t-[var(--color-primary)]">
                            <div className="flex justify-between items-start mb-5">
                                <div>
                                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Current Plan</div>
                                    <div className="text-2xl font-black text-white">Elite Pro</div>
                                    <div className="text-[var(--color-text-secondary)] text-sm">Billed monthly · Renews March 31, 2026</div>
                                </div>
                                <span className="text-xs bg-green-400/10 text-green-400 border border-green-400/20 px-2 py-0.5 rounded font-bold">ACTIVE</span>
                            </div>
                            <div className="h-px bg-white/10 mb-5" />
                            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                                {[
                                    { l: 'Monthly Cost', v: '$299' },
                                    { l: 'Next Billing', v: 'Mar 31, 2026' },
                                    { l: 'Payment Method', v: 'SpaceRemit ****1234' },
                                    { l: 'Active Since', v: 'March 1, 2025' },
                                ].map(s => (
                                    <div key={s.l}>
                                        <div className="text-[var(--color-text-secondary)]">{s.l}</div>
                                        <div className="font-bold text-white">{s.v}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <Link href="/checkout"><Button variant="secondary" className="text-sm">Change Plan</Button></Link>
                                <Button variant="ghost" className="text-sm text-red-400 hover:text-red-300">Cancel Subscription</Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="font-bold text-white mb-4">Billing History</h3>
                            <div className="space-y-3">
                                {[
                                    { date: 'Mar 1, 2026', amount: '$299', status: 'Paid' },
                                    { date: 'Feb 1, 2026', amount: '$299', status: 'Paid' },
                                    { date: 'Jan 1, 2026', amount: '$299', status: 'Paid' },
                                ].map((inv, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                                        <span className="text-[var(--color-text-secondary)]">{inv.date}</span>
                                        <span className="font-bold text-white">{inv.amount}</span>
                                        <span className="text-green-400 font-bold text-xs">{inv.status}</span>
                                        <button className="text-[var(--color-primary)] text-xs hover:underline">Receipt</button>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                )}

                {/* ──── NOTIFICATIONS TAB ──── */}
                {activeTab === 'notifications' && (
                    <div className="max-w-xl space-y-3">
                        <p className="text-[var(--color-text-secondary)] text-sm mb-6">Control which notifications you receive via email and in-app.</p>
                        {NOTIFICATION_SETTINGS.map(n => (
                            <div key={n.key} className="flex items-center justify-between py-4 border-b border-white/5">
                                <span className="text-sm text-white">{n.label}</span>
                                <button
                                    onClick={() => setNotifications(prev => ({ ...prev, [n.key]: !prev[n.key] }))}
                                    className={`relative w-11 h-6 rounded-full transition-colors ${notifications[n.key] ? 'bg-[var(--color-primary)]' : 'bg-white/10'}`}>
                                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${notifications[n.key] ? 'left-6' : 'left-1'}`} />
                                </button>
                            </div>
                        ))}
                        <div className="pt-5">
                            <Button variant="primary" onClick={handleSave}>
                                {saved ? '✓ Saved!' : 'Save Preferences'}
                            </Button>
                        </div>
                    </div>
                )}

                {/* ──── SECURITY TAB ──── */}
                {activeTab === 'security' && (
                    <div className="max-w-md space-y-6">
                        <Card className="p-6 space-y-5">
                            <h2 className="font-black text-white text-lg">Change Password</h2>
                            {['Current Password', 'New Password', 'Confirm New Password'].map(f => (
                                <div key={f}>
                                    <label className="block text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{f}</label>
                                    <input type="password" placeholder="••••••••"
                                        className="w-full bg-[var(--color-background-dark)] border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                                </div>
                            ))}
                            <Button variant="primary" onClick={handleSave} className="w-full">
                                {saved ? '✓ Updated!' : 'Update Password'}
                            </Button>
                        </Card>

                        <Card className="p-6">
                            <h3 className="font-bold text-white mb-2">Account Actions</h3>
                            <p className="text-[var(--color-text-secondary)] text-sm mb-4">Permanent actions that affect your account.</p>
                            <div className="flex gap-3">
                                <Button variant="ghost" className="text-sm text-[var(--color-text-secondary)]">Export My Data</Button>
                                <Button variant="ghost" className="text-sm text-red-400 hover:text-red-300">Delete Account</Button>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
}

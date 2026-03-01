'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

type Notification = {
    id: string;
    type: 'coach' | 'challenge' | 'system' | 'protocol';
    title: string;
    body: string;
    time: string;
    read: boolean;
    action?: { label: string; href: string };
};

const INITIAL_NOTIFICATIONS: Notification[] = [
    {
        id: 'n1', type: 'coach', read: false,
        title: 'New message from Coach Marcus Webb',
        body: 'Great progress this week. Your deadlift is tracking 2 weeks ahead of where I projected...',
        time: '2 hours ago',
        action: { label: 'Reply', href: '/messages' },
    },
    {
        id: 'n2', type: 'protocol', read: false,
        title: 'Protocol updated — Week 9 adjustments',
        body: 'Marcus Webb has updated your training protocol for weeks 9–12. Review the new compound adjustments.',
        time: '5 hours ago',
        action: { label: 'View Protocol', href: '/library' },
    },
    {
        id: 'n3', type: 'challenge', read: false,
        title: 'Steroid IQ Sprint — 7 days remaining',
        body: 'You\'re ranked #142 globally. Complete today\'s quiz to climb the leaderboard.',
        time: 'Yesterday',
        action: { label: 'Take Quiz', href: '/challenges' },
    },
    {
        id: 'n4', type: 'system', read: true,
        title: 'Weekly check-in reminder',
        body: 'Your Sunday check-in is due in 2 days. Submit your weight, photos, and session logs.',
        time: '2 days ago',
        action: { label: 'Submit Check-in', href: '/progress' },
    },
    {
        id: 'n5', type: 'coach', read: true,
        title: 'Bloodwork review completed',
        body: 'Marcus has reviewed your Week 4 bloodwork results. LDL flagged — see coach note in your progress tracker.',
        time: '3 days ago',
        action: { label: 'View Results', href: '/progress' },
    },
    {
        id: 'n6', type: 'system', read: true,
        title: 'Subscription renewed',
        body: 'Your Elite Pro plan has been renewed for $299. Next billing: April 1, 2026.',
        time: '4 days ago',
        action: { label: 'View Billing', href: '/profile' },
    },
    {
        id: 'n7', type: 'challenge', read: true,
        title: 'Challenge result: Protocol Design Battle',
        body: 'The Protocol Design Battle has ended. Your submission ranked #38 out of 4,512 entries.',
        time: '1 week ago',
        action: { label: 'View Results', href: '/challenges' },
    },
];

const TYPE_ICON: Record<Notification['type'], string> = {
    coach: '👤',
    challenge: '🏆',
    system: '⚙',
    protocol: '📋',
};

const TYPE_COLOR: Record<Notification['type'], string> = {
    coach: '#e11d48',
    challenge: '#d97706',
    system: '#0891b2',
    protocol: '#7c3aed',
};

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    const markRead = (id: string) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));

    const unreadCount = notifications.filter(n => !n.read).length;
    const displayed = filter === 'unread' ? notifications.filter(n => !n.read) : notifications;

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">
                        Iron<span className="text-[var(--color-primary)] ml-1">Grit</span>
                    </Link>
                    <Link href="/dashboard/trainee">
                        <Button variant="ghost" className="text-sm text-[var(--color-text-secondary)]">← Dashboard</Button>
                    </Link>
                </div>
            </header>

            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Page Title */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-black text-white flex items-center gap-3">
                            Notifications
                            {unreadCount > 0 && (
                                <span className="text-sm bg-[var(--color-primary)] text-white font-black px-2 py-0.5 rounded-full">{unreadCount}</span>
                            )}
                        </h1>
                        <p className="text-[var(--color-text-secondary)] text-sm mt-1">{unreadCount} unread</p>
                    </div>
                    {unreadCount > 0 && (
                        <button onClick={markAllRead} className="text-sm text-[var(--color-primary)] hover:underline font-bold">
                            Mark all as read
                        </button>
                    )}
                </div>

                {/* Filter */}
                <div className="flex gap-2 mb-6">
                    {(['all', 'unread'] as const).map(f => (
                        <button key={f} onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all capitalize ${filter === f
                                    ? 'bg-[var(--color-primary)] text-white'
                                    : 'bg-[var(--color-surface-dark)] text-[var(--color-text-secondary)] hover:text-white border border-white/10'
                                }`}>
                            {f}
                        </button>
                    ))}
                </div>

                {/* Notification List */}
                <div className="space-y-3">
                    {displayed.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-4xl mb-4">🔔</div>
                            <p className="text-[var(--color-text-secondary)]">No unread notifications.</p>
                        </div>
                    ) : (
                        displayed.map(n => (
                            <div key={n.id} onClick={() => markRead(n.id)}
                                className={`relative rounded border transition-all cursor-pointer ${!n.read
                                        ? 'bg-[var(--color-surface-dark)] border-white/15 hover:border-white/25'
                                        : 'bg-transparent border-white/5 hover:border-white/10 opacity-70'
                                    }`}>
                                {/* Unread indicator */}
                                {!n.read && (
                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full"
                                        style={{ backgroundColor: TYPE_COLOR[n.type] }} />
                                )}

                                <div className="flex gap-4 p-5">
                                    {/* Icon */}
                                    <div className="w-10 h-10 rounded flex items-center justify-center text-lg flex-shrink-0"
                                        style={{ backgroundColor: `${TYPE_COLOR[n.type]}15`, border: `1px solid ${TYPE_COLOR[n.type]}25` }}>
                                        {TYPE_ICON[n.type]}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="font-bold text-white text-sm mb-1">{n.title}</div>
                                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-3 line-clamp-2">{n.body}</p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-[var(--color-text-secondary)]">{n.time}</span>
                                            {n.action && (
                                                <Link href={n.action.href}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-xs font-bold text-[var(--color-primary)] hover:underline">
                                                    {n.action.label} →
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

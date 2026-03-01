'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Mock data for community feed
const POSTS = [
    {
        id: '1',
        author: { name: 'Jake_Lifter', avatar: 'JL', badge: 'Verified Protocol' },
        time: '2 hours ago',
        category: 'Transformation',
        title: 'Week 12 of Mass Accumulation - DEXA results inside',
        content: 'Just finished my 12-week bulk under @CoachMarcus. Started at 82kg (14% BF). Currently 91kg (14.5% BF). The food volume was insane but the strength progression didn\'t stall once.',
        likes: 124, comments: 28,
        tags: ['Gaining Phase', 'DEXA', 'Progress'],
    },
    {
        id: '2',
        author: { name: 'Dr. Mike T.', avatar: 'MT', badge: 'Medical Staff' },
        time: '5 hours ago',
        category: 'Expert Q&A',
        title: 'Understanding Hematocrit Management on TRT vs Blasts',
        content: 'Seeing a lot of confusion on bloodwork posts. HCT creeping up is normal, but the interventions differ drastically if you are on 150mg vs 750mg total androgen load. Breakdown of the clinical limits below...',
        likes: 342, comments: 84,
        tags: ['Bloodwork', 'Health', 'Science'],
        pinned: true,
    },
    {
        id: '3',
        author: { name: 'Anon_Swole', avatar: 'AS' },
        time: '12 hours ago',
        category: 'Cycle Log',
        title: 'First time adding Masteron - joint pain?',
        content: 'Running Test E at 500mg/wk and added Mast E at 200mg/wk two weeks ago. My E2 was previously stable around 35pg/mL. Noticed dry joints recently. Should I drop the AI entirely since Mast acts as an SERM/weak AI in some tissues?',
        likes: 45, comments: 16,
        tags: ['Side Effects', 'Compounds', 'Troubleshooting'],
    },
    {
        id: '4',
        author: { name: 'Sarah_Strong', avatar: 'SS', badge: 'Elite Athlete' },
        time: 'Yesterday',
        category: 'Training',
        title: 'Form Check: Deficit Deadlifts (225x5)',
        content: 'Working on off-the-floor speed. Coach added these in on my secondary pull day. Is my hip starting position too high? Video attached.',
        likes: 89, comments: 22,
        tags: ['Form Check', 'Powerlifting', 'Deadlift'],
    }
];

const CATEGORIES = ['All', 'Transformation', 'Cycle Log', 'Bloodwork', 'Training', 'Nutrition', 'Expert Q&A'];

export default function CommunityPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? POSTS
        : POSTS.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">

            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 z-20 bg-[var(--color-background-dark)]/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white flex items-center gap-2">
                        Iron<span className="text-[var(--color-primary)]">Grit</span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded uppercase tracking-wider text-white border border-white/20">Community</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)] font-bold">
                        <Link href="/dashboard/trainee" className="hover:text-white transition-colors">Dashboard</Link>
                        <Link href="/challenges" className="hover:text-white transition-colors">Challenges</Link>
                        <Link href="/library" className="hover:text-white transition-colors">Protocols</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-bold border border-white/20">AJ</div>
                        <Button variant="primary" className="text-sm px-4 py-2 hidden sm:block">Create Post</Button>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">

                {/* Main Feed */}
                <div className="flex-1 space-y-6">
                    {/* Filter Bar */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-4 hide-scrollbar">
                        {CATEGORIES.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                        ? 'bg-white text-black'
                                        : 'bg-white/5 text-[var(--color-text-secondary)] hover:bg-white/10 hover:text-white'
                                    }`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Posts */}
                    <div className="space-y-4">
                        {filteredPosts.map(post => (
                            <Card key={post.id} className={`p-0 overflow-hidden ${post.pinned ? 'border border-[var(--color-primary)]/40 shadow-[0_0_15px_rgba(217,35,35,0.1)]' : ''}`}>
                                {post.pinned && (
                                    <div className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-6 py-2 border-b border-[var(--color-primary)]/20 flex items-center gap-2">
                                        📌 Pinned by Admins
                                    </div>
                                )}
                                <div className="p-6">
                                    {/* Post Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-sm font-bold border border-white/20">
                                                {post.author.avatar}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-white">{post.author.name}</span>
                                                    {post.author.badge && (
                                                        <span className="text-[10px] bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-1.5 py-0.5 rounded font-bold border border-[var(--color-primary)]/30">
                                                            {post.author.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-xs text-[var(--color-text-secondary)]">
                                                    {post.time} · <span className="text-[var(--color-primary)]">{post.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="text-[var(--color-text-secondary)] hover:text-white">•••</button>
                                    </div>

                                    {/* Post Body */}
                                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                                        {post.content}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-surface-dark)] px-2.5 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Post Footer Actions */}
                                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                                        <button className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-bold">
                                            <span>▲</span> {post.likes}
                                        </button>
                                        <button className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm font-bold">
                                            <span>💬</span> {post.comments} Comments
                                        </button>
                                        <button className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm font-bold ml-auto">
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center pt-4">
                        <Button variant="ghost" className="text-sm">Load More Activity</Button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-80 space-y-6 flex-shrink-0">
                    {/* Create Post CTA */}
                    <Card className="p-6 bg-gradient-to-br from-[var(--color-surface-dark)] to-black border-white/10">
                        <h3 className="font-black text-lg mb-2">Share Your Journey</h3>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                            Ask questions, post bloodwork for review, or share your transformation with the Iron & Grit community.
                        </p>
                        <Button variant="primary" className="w-full font-bold shadow-[0_0_15px_rgba(217,35,35,0.2)]">
                            Create New Post
                        </Button>
                    </Card>

                    {/* Trending Topics */}
                    <Card className="p-6">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--color-text-secondary)] mb-4 flex items-center gap-2">
                            <span>🔥</span> Trending Topics
                        </h3>
                        <div className="space-y-3">
                            {[
                                { tag: 'Bloodwork', posts: 142 },
                                { tag: 'PCT', posts: 89 },
                                { tag: 'Anavar', posts: 76 },
                                { tag: 'FormCheck', posts: 54 },
                                { tag: 'MealPrep', posts: 41 },
                            ].map((topic, i) => (
                                <div key={topic.tag} className="flex items-center justify-between">
                                    <a href="#" className="text-sm text-white font-bold hover:text-[var(--color-primary)] transition-colors">#{topic.tag}</a>
                                    <span className="text-xs text-[var(--color-text-secondary)]">{topic.posts} posts</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Community Rules */}
                    <Card className="p-6">
                        <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
                            Community Rules
                        </h3>
                        <ul className="text-sm text-[var(--color-text-secondary)] space-y-3 list-disc pl-4 marker:text-[var(--color-primary)]">
                            <li>No sourcing or mentioning UGL brand names.</li>
                            <li>Post full bloodwork panels, not single markers.</li>
                            <li>Medical advice is from peers, not doctors.</li>
                            <li>Keep form checks respectful and constructive.</li>
                        </ul>
                    </Card>
                </aside>

            </div>
        </div>
    );
}

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const metadata = {
    title: "Messages | Iron & Grit",
    description: "Iron & Grit - Messages | Iron & Grit"
};


export default function MessagesPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans flex flex-col md:flex-row h-screen overflow-hidden">

            {/* Sidebar - Contact List */}
            <aside className="w-full md:w-80 border-r border-[var(--color-surface-dark)] flex flex-col h-full bg-[#0a1017]">
                <div className="p-6 border-b border-[var(--color-surface-dark)] flex justify-between items-center shrink-0">
                    <h2 className="text-xl font-black tracking-tight">Messages</h2>
                    <Button variant="ghost" className="p-2 h-auto text-[var(--color-text-secondary)] hover:text-white">
                        +
                    </Button>
                </div>

                <div className="p-4 border-b border-[var(--color-surface-dark)] shrink-0">
                    <Input placeholder="Search messages..." className="bg-[var(--color-surface-dark)] text-sm py-2" />
                </div>

                <div className="flex-1 overflow-y-auto space-y-1 p-2">
                    {/* Active Chat */}
                    <div className="flex items-center gap-3 p-3 rounded bg-[var(--color-surface-dark)] border-l-2 border-l-[var(--color-primary)] cursor-pointer">
                        <div className="w-10 h-10 rounded bg-[#1a2632] flex shrink-0 items-center justify-center font-bold">
                            AM
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-sm truncate">Alex Mercer</h4>
                                <span className="text-xs text-[var(--color-text-secondary)]">2m</span>
                            </div>
                            <p className="text-xs text-[var(--color-text-secondary)] truncate">Don't forget the check-in.</p>
                        </div>
                    </div>

                    {/* Other Chats */}
                    <div className="flex items-center gap-3 p-3 rounded hover:bg-white/5 cursor-pointer transition-colors">
                        <div className="w-10 h-10 rounded bg-[#1a2632] flex shrink-0 items-center justify-center font-bold">
                            SD
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="font-bold text-sm truncate text-[var(--color-text-secondary)]">Support Desk</h4>
                                <span className="text-xs text-[var(--color-text-secondary)]">Yesterday</span>
                            </div>
                            <p className="text-xs text-[var(--color-text-secondary)] truncate">Your payout has been processed.</p>
                        </div>
                    </div>

                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col h-full bg-[var(--color-background-dark)]">
                {/* Chat Header */}
                <header className="h-20 border-b border-[var(--color-surface-dark)] flex items-center justify-between p-6 shrink-0 bg-[#0a1017]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-[#1a2632] flex items-center justify-center font-bold overflow-hidden">
                            <img src="/screens/coach-avatar-placeholder.png" alt="Coach Avatar" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Alex Mercer</h3>
                            <span className="text-xs text-green-500 font-medium tracking-wide">● ONLINE</span>
                        </div>
                    </div>
                    <Button variant="ghost" className="text-[var(--color-text-secondary)]">⋮</Button>
                </header>

                {/* Chat History */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
                    {/* Date Divider */}
                    <div className="flex items-center justify-center">
                        <span className="px-3 py-1 bg-[var(--color-surface-dark)] rounded text-xs text-[var(--color-text-secondary)]">Today</span>
                    </div>

                    {/* Received Message */}
                    <div className="flex gap-4 max-w-2xl">
                        <div className="w-8 h-8 rounded shrink-0 bg-[#1a2632] overflow-hidden mt-1 text-xs">
                            <img src="/screens/coach-avatar-placeholder.png" alt="Coach Avatar" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                            <Card className="p-4 bg-[var(--color-surface-dark)] border-none text-sm leading-relaxed rounded-tl-none">
                                Checking in. How did the squats go yesterday? The video looked solid but I noticed some pelvic wink at the bottom.
                            </Card>
                            <span className="text-xs text-[var(--color-text-secondary)] mt-1 ml-1 block">10:42 AM</span>
                        </div>
                    </div>

                    {/* Sent Message */}
                    <div className="flex gap-4 max-w-2xl self-end flex-row-reverse">
                        <div className="w-8 h-8 rounded shrink-0 bg-[var(--color-primary)] font-bold flex items-center justify-center mt-1 text-xs">
                            YOU
                        </div>
                        <div>
                            <Card className="p-4 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-sm leading-relaxed rounded-tr-none text-white">
                                They felt heavy, not going to lie. I'm focusing on bracing harder before descent. I'll upload the latest form video tonight.
                            </Card>
                            <div className="flex items-center justify-end gap-1 mt-1 mr-1">
                                <span className="text-xs text-[var(--color-text-secondary)]">10:45 AM</span>
                                <span className="text-xs text-[var(--color-primary)]">✓✓</span>
                            </div>
                        </div>
                    </div>

                    {/* Received Message */}
                    <div className="flex gap-4 max-w-2xl">
                        <div className="w-8 h-8 rounded shrink-0 bg-[#1a2632] overflow-hidden mt-1 text-xs">
                            <img src="/screens/coach-avatar-placeholder.png" alt="Coach Avatar" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                            <Card className="p-4 bg-[var(--color-surface-dark)] border-none text-sm leading-relaxed rounded-tl-none">
                                Don't forget the check-in.
                            </Card>
                            <span className="text-xs text-[var(--color-text-secondary)] mt-1 ml-1 block">Just now</span>
                        </div>
                    </div>
                </div>

                {/* Message Input Container */}
                <div className="p-4 border-t border-[var(--color-surface-dark)] bg-[#0a1017] shrink-0">
                    <div className="max-w-4xl mx-auto flex gap-2">
                        <Button variant="ghost" className="px-3 shrink-0 text-[var(--color-text-secondary)] font-bold text-xl">+</Button>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 bg-[var(--color-surface-dark)] border border-white/5 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
                        />
                        <Button variant="primary" className="px-6 shrink-0 font-bold uppercase tracking-wider">Send</Button>
                    </div>
                </div>
            </main>

        </div>
    );
}

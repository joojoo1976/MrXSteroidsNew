import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function CoachProfilePage({ params }: { params: { id: string } }) {
    // Placeholder data for the coach
    const coach = {
        name: "Alex 'The Anvil' Mercer",
        title: "Elite Powerlifting Coach",
        bio: "I don't do feelings. I do physics. If you want to move heavy iron, you're in the right place. Former IFBB Pro and 3x National Champion.",
        specialties: ["Powerlifting", "Strength Conditioning", "Hypertrophy"],
        rate: "$150/month",
        availableSpots: 3,
        imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" // Placeholder image
    };

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans">

            {/* Cover Image & Header */}
            <div className="h-64 md:h-96 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src={coach.imageUrl}
                    alt={coach.name}
                    className="w-full h-full object-cover object-center grayscale opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 pt-32 bg-gradient-to-t from-[var(--color-background-dark)] to-transparent">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-end justify-between gap-6">
                        <div>
                            <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-3">
                                {coach.title}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight">{coach.name}</h1>
                        </div>

                        <a href="/checkout">
                            <Button variant="primary" className="text-lg px-8 py-4 whitespace-nowrap shadow-[0_0_20px_rgba(217,35,35,0.4)]">
                                Train with Alex
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-[var(--color-primary)]">/</span> The Philosophy
                        </h2>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                            {coach.bio}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-[var(--color-primary)]">/</span> Specialties
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {coach.specialties.map(spec => (
                                <span key={spec} className="px-4 py-2 border border-[var(--color-surface-dark)] bg-white/5 rounded text-sm font-medium">
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-[var(--color-primary)]">/</span> Client Methods
                        </h2>
                        <div className="space-y-4">
                            <Card className="p-6 border-l-4 border-l-[var(--color-primary)]">
                                <h3 className="font-bold text-lg mb-2">Weekly Check-ins</h3>
                                <p className="text-[var(--color-text-secondary)] text-sm">Mandatory video check-ins every Sunday. Missing a check-in means you do 100 burpees.</p>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-bold text-lg mb-2">Custom Programming</h3>
                                <p className="text-[var(--color-text-secondary)] text-sm">Programs updated bi-weekly based on RPE and video analysis of your main lifts.</p>
                            </Card>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card className="p-6 sticky top-24">
                        <h3 className="text-xl font-black uppercase tracking-wider mb-6 border-b border-[var(--color-surface-dark)] pb-4">
                            Mentorship Details
                        </h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center">
                                <span className="text-[var(--color-text-secondary)]">Rate</span>
                                <span className="font-bold text-xl">{coach.rate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[var(--color-text-secondary)]">Status</span>
                                <span className="text-green-500 font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    {coach.availableSpots} Spots Open
                                </span>
                            </div>
                        </div>

                        <a href="/checkout" className="block w-full">
                            <Button variant="primary" className="w-full py-4 text-lg font-bold">Secure Your Spot</Button>
                        </a>
                        <p className="text-xs text-center text-[var(--color-text-secondary)] mt-4">
                            Commitment is minimum 3 months. No refunds.
                        </p>
                    </Card>
                </div>

            </div>
        </div>
    );
}

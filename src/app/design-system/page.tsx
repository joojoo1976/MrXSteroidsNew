import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export const metadata = {
  title: "Design-system | Iron & Grit",
  description: "Iron & Grit - Design-system | Iron & Grit"
};


export default function DesignSystemPreview() {
    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] text-white p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">

                <div className="border-b border-[var(--color-surface-dark)] pb-4">
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Iron & Grit</h1>
                    <p className="text-[var(--color-text-secondary)]">Design System Preview</p>
                </div>

                {/* Buttons Section */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-[var(--color-primary)]">#</span> Buttons
                    </h2>
                    <Card className="flex flex-wrap gap-6 items-end p-8">
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--color-text-secondary)] block">Primary</label>
                            <Button variant="primary">Add to Workout</Button>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--color-text-secondary)] block">Secondary</label>
                            <Button variant="secondary">View Details</Button>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--color-text-secondary)] block">Ghost</label>
                            <Button variant="ghost">Cancel</Button>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--color-text-secondary)] block">Disabled Primary</label>
                            <Button variant="primary" disabled>Wait for Reset</Button>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-[var(--color-text-secondary)] block">Icon Button</label>
                            <Button variant="primary" icon="bolt">Quick Start</Button>
                        </div>
                    </Card>
                </section>

                {/* Input Forms Section */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-[var(--color-primary)]">#</span> Form Controls
                    </h2>
                    <Card className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Standard Input"
                                placeholder="Enter some weight..."
                            />
                            <Input
                                label="Input with Error"
                                placeholder="Invalid value..."
                                error="Weight must be a positive number"
                                defaultValue="-10"
                            />
                            <Select
                                label="Select Option"
                                options={[
                                    { value: 'chest', label: 'Chest Day' },
                                    { value: 'back', label: 'Back Day' },
                                    { value: 'legs', label: 'Leg Day' }
                                ]}
                            />
                            <Select
                                label="Select with Error"
                                error="Please select a valid workout"
                                options={[
                                    { value: '', label: 'Choose...' },
                                    { value: 'invalid', label: 'Invalid Option' }
                                ]}
                            />
                        </div>
                    </Card>
                </section>

                {/* Cards Section */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-[var(--color-primary)]">#</span> Cards & Surfaces
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6">
                            <h3 className="text-lg font-bold mb-2">Standard Card</h3>
                            <p className="text-[var(--color-text-secondary)] mb-4">
                                Used for content grouping, metrics, and standard layout sections. Uses the dark surface background color.
                            </p>
                            <Button variant="ghost" className="p-0 h-auto font-bold">Read more →</Button>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-[var(--color-primary)]">
                            <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)]">Accent Card</h3>
                            <p className="text-[var(--color-text-secondary)]">
                                Cards can be styled with primary color accents to draw attention to specific metrics or important alerts.
                            </p>
                        </Card>
                    </div>
                </section>

            </div>
        </div>
    );
}

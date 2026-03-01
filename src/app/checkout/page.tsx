import React from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: "Checkout | Iron & Grit",
  description: "Iron & Grit - Checkout | Iron & Grit"
};


export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] flex items-center justify-center p-6 text-white font-sans py-12">

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Order Summary */}
                <div className="space-y-6 md:order-last">
                    <Card className="p-8 sticky top-6 bg-[#0a1017]">
                        <h2 className="text-xl font-black uppercase tracking-wider mb-6 pb-4 border-b border-[var(--color-surface-dark)]">
                            Order Summary
                        </h2>

                        <div className="flex gap-4 mb-8">
                            <div className="w-16 h-16 rounded bg-[#1a2632] overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">Elite Mentorship</h3>
                                <p className="text-[var(--color-text-secondary)] text-sm">Coach Alex Mercer</p>
                                <span className="inline-block mt-1 px-2 py-0.5 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-bold rounded">Monthly Recurring</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-sm text-[var(--color-text-secondary)] mb-8">
                            <div className="flex justify-between">
                                <span>Base Plan</span>
                                <span className="text-white font-bold">$150.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sign-up Fee</span>
                                <span className="text-white font-bold">$0.00</span>
                            </div>
                            <div className="flex justify-between pt-4 border-t border-[var(--color-surface-dark)] text-white text-lg font-black">
                                <span>Total Due Today</span>
                                <span>$150.00</span>
                            </div>
                        </div>

                        <div className="p-4 rounded border border-[var(--color-surface-dark)] bg-[var(--color-surface-dark)]/50 text-xs text-[var(--color-text-secondary)] flex gap-3 items-start">
                            <span className="text-[var(--color-primary)] text-lg leading-none">⚠</span>
                            <p>Your subscription will automatically renew every 30 days. You can cancel anytime from your dashboard settings.</p>
                        </div>
                    </Card>
                </div>

                {/* Payment Details */}
                <div className="space-y-8">
                    <div>
                        <span className="text-2xl font-black tracking-tighter uppercase italic text-white flex items-center mb-8">
                            Iron <span className="text-[var(--color-primary)] ml-2">Grit</span>
                        </span>
                        <h1 className="text-3xl font-black tracking-tight mb-2">Secure Checkout</h1>
                        <p className="text-[var(--color-text-secondary)]">Powered by SpaceRemit</p>
                    </div>

                    <Card className="p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black italic text-4xl pointer-events-none">
                            SPACE<br />REMIT
                        </div>

                        <h3 className="font-bold text-lg mb-6 relative z-10 flex items-center gap-2">
                            <span className="text-[var(--color-primary)]">#</span> Payment Information
                        </h3>

                        <div className="space-y-6 relative z-10">
                            <Input
                                label="Cardholder Name"
                                placeholder="JOHN DOE"
                                defaultValue="JOHN DOE"
                            />

                            <div>
                                <Input
                                    label="Card Number"
                                    placeholder="0000 0000 0000 0000"
                                    className="font-mono"
                                />
                                <div className="flex items-center gap-2 mt-2 px-1">
                                    <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                                    <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                                    <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <Input
                                    label="Expiry (MM/YY)"
                                    placeholder="MM/YY"
                                    className="font-mono"
                                />
                                <Input
                                    label="CVC"
                                    placeholder="123"
                                    type="password"
                                    className="font-mono"
                                />
                            </div>

                            <Input
                                label="Billing Zip/Postal Code"
                                placeholder="10001"
                            />

                            <Button variant="primary" className="w-full py-4 text-xl mt-4 font-black tracking-wider shadow-[0_4px_20px_rgba(217,35,35,0.4)] transition-all hover:-translate-y-1">
                                Pay $150.00
                            </Button>

                            <p className="text-center text-xs text-[var(--color-text-secondary)] flex items-center justify-center gap-1 mt-4">
                                <span className="inline-block w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></span>
                                End-to-end encrypted integration
                            </p>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
}

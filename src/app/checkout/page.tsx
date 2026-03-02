'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { PaymentService } from '@/services/payment.service';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleSuccess = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            console.log('Payment success event received', detail);
            setSuccess(true);
            setLoading(false);
            // Redirect to success page or dashboard after a short delay
            setTimeout(() => {
                router.push('/dashboard/trainee');
            }, 2000);
        };

        const handleGlobalSuccess = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            console.log('Global payment success received', detail);
            setSuccess(true);
            setLoading(false);
            setTimeout(() => {
                router.push('/dashboard/trainee');
            }, 2000);
        };

        const handleError = (e: Event) => {
            const detail = (e as CustomEvent).detail;
            setError(detail?.message || 'Payment failed. Please try again.');
            setLoading(false);
        };

        window.addEventListener('payment_success', handleSuccess);
        window.addEventListener('payment_success_global', handleGlobalSuccess);
        window.addEventListener('payment_error', handleError);
        window.addEventListener('payment_cancelled', () => setLoading(false));

        return () => {
            window.removeEventListener('payment_success', handleSuccess);
            window.removeEventListener('payment_success_global', handleGlobalSuccess);
            window.removeEventListener('payment_error', handleError);
            window.removeEventListener('payment_cancelled', () => setLoading(false));
        };
    }, [router]);

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const paymentService = PaymentService.getInstance();
            await paymentService.initiatePayment(150, 'USD', {
                plan: 'Elite Mentorship',
                coach: 'Alex Mercer'
            });
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Could not initiate payment';
            setError(message);
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-[var(--color-background-dark)] flex items-center justify-center p-6 text-white text-center">
                <Card className="p-12 space-y-6 max-w-md border-[var(--color-primary)]">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-green-500/50">
                        ✓
                    </div>
                    <h1 className="text-3xl font-black uppercase tracking-tight">Payment Successful</h1>
                    <p className="text-[var(--color-text-secondary)]">
                        Welcome to the Elite Mentorship program. Redirecting you to your dashboard...
                    </p>
                </Card>
            </div>
        );
    }

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
                            <div className="w-16 h-16 rounded bg-[#1a2632] overflow-hidden shrink-0 relative">
                                <Image src="/screens/coach-avatar-placeholder.png" alt="Coach Avatar" fill className="object-cover grayscale" />
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

                        <form onSubmit={handlePayment} className="space-y-6 relative z-10">
                            {error && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded text-center">
                                    {error}
                                </div>
                            )}

                            <Input
                                label="Cardholder Name"
                                placeholder="JOHN DOE"
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

                            <Button
                                variant="primary"
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 text-xl mt-4 font-black tracking-wider shadow-[0_4px_20px_rgba(217,35,35,0.4)] transition-all hover:-translate-y-1"
                            >
                                {loading ? 'Processing...' : 'Pay $150.00'}
                            </Button>

                            <p className="text-center text-xs text-[var(--color-text-secondary)] flex items-center justify-center gap-1 mt-4">
                                <span className="inline-block w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></span>
                                End-to-end encrypted integration
                            </p>
                        </form>
                    </Card>
                </div>

            </div>
        </div>
    );
}


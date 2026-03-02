'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) throw authError;

            router.push('/dashboard/trainee');
            router.refresh();
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'An error occurred during login';
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--color-background-dark)] flex items-center justify-center p-6 text-white font-sans">

            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <span className="text-3xl font-black tracking-tighter uppercase italic text-white flex items-center justify-center">
                        Iron <span className="text-[var(--color-primary)] ml-2">Grit</span>
                    </span>
                    <p className="text-[var(--color-text-secondary)] mt-2">Welcome back. Enter the crucible.</p>
                </div>

                <Card className="p-8 space-y-6 shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded text-center">
                                {error}
                            </div>
                        )}
                        <Input
                            label="Email Address"
                            placeholder="athlete@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            label="Password"
                            placeholder="••••••••"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2 cursor-pointer text-[var(--color-text-secondary)] hover:text-white transition-colors">
                                <input type="checkbox" className="accent-[var(--color-primary)]" />
                                <span>Remember me</span>
                            </label>
                            <Link href="#" className="text-[var(--color-primary)] hover:text-white transition-colors">
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-full py-3 text-lg mt-4"
                            disabled={loading}
                        >
                            {loading ? 'Entering...' : 'Log In'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-[var(--color-text-secondary)] pt-6 border-t border-[var(--color-surface-dark)]">
                        Don&apos;t have an account?{' '}
                        <Link href="/auth/register" className="text-white hover:text-[var(--color-primary)] font-bold transition-colors">
                            Sign up here
                        </Link>
                    </div>
                </Card>
            </div>

        </div>
    );
}


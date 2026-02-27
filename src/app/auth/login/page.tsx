import React from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
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
                    <Input
                        label="Email Address"
                        placeholder="athlete@example.com"
                        type="email"
                    />
                    <Input
                        label="Password"
                        placeholder="••••••••"
                        type="password"
                    />

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-[var(--color-text-secondary)] hover:text-white transition-colors">
                            <input type="checkbox" className="accent-[var(--color-primary)]" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-[var(--color-primary)] hover:text-white transition-colors">
                            Forgot Password?
                        </a>
                    </div>

                    <Button variant="primary" className="w-full py-3 text-lg mt-4">Log In</Button>

                    <div className="mt-6 text-center text-sm text-[var(--color-text-secondary)] pt-6 border-t border-[var(--color-surface-dark)]">
                        Don't have an account?{' '}
                        <a href="/auth/register" className="text-white hover:text-[var(--color-primary)] font-bold transition-colors">
                            Sign up here
                        </a>
                    </div>
                </Card>
            </div>

        </div>
    );
}

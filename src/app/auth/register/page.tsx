import React from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-dark)] flex items-center justify-center p-6 text-white font-sans py-12">

      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <span className="text-3xl font-black tracking-tighter uppercase italic text-white flex items-center justify-center">
            Iron <span className="text-[var(--color-primary)] ml-2">Grit</span>
          </span>
          <p className="text-[var(--color-text-secondary)] mt-2">Join the ranks of the elite.</p>
        </div>

        <Card className="p-8 space-y-6 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" />
            <Input label="Last Name" placeholder="Doe" />
          </div>

          <Input
            label="Email Address"
            placeholder="athlete@example.com"
            type="email"
          />

          <Select
            label="I want to join as a..."
            options={[
              { value: 'trainee', label: 'Trainee (Find a Coach)' },
              { value: 'coach', label: 'Coach (Train Athletes)' }
            ]}
          />

          <Input
            label="Create Password"
            placeholder="••••••••"
            type="password"
          />

          <Button variant="primary" className="w-full py-4 text-lg mt-2 font-bold uppercase tracking-wider">
            Create Account
          </Button>

          <p className="text-xs text-center text-[var(--color-text-secondary)] mt-4">
            By creating an account, you agree to our Terms of Service and Privacy Policy. There are no refunds for lack of grit.
          </p>

          <div className="mt-6 text-center text-sm text-[var(--color-text-secondary)] pt-6 border-t border-[var(--color-surface-dark)]">
            Already have an account?{' '}
            <a href="/auth/login" className="text-white hover:text-[var(--color-primary)] font-bold transition-colors">
              Log in here
            </a>
          </div>
        </Card>
      </div>

    </div>
  );
}

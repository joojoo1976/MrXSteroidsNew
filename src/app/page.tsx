import React from 'react';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background-dark)] text-white font-sans selection:bg-[var(--color-primary)] selection:text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-[var(--color-surface-dark)] sticky top-0 bg-[var(--color-background-dark)]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter uppercase italic text-white flex items-center">
              Iron <span className="text-[var(--color-primary)] ml-2">Grit</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-[var(--color-text-secondary)] font-medium">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#coaches" className="hover:text-white transition-colors">Find a Coach</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex gap-4">
            <a href="/auth/login">
              <Button variant="ghost">Log In</Button>
            </a>
            <a href="/auth/register">
              <Button variant="primary">Get Started</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0">
          {/* Background gradient/pattern placeholder */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#1a2632] to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-dark)] border border-[var(--color-text-secondary)]/20 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)]"></span>
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">The Ultimate Coaching Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Forge Your Best Self.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-red-600">
              No Excuses.
            </span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12">
            Connect with elite coaches, track your progress with pixel-perfect precision, and achieve the grit required to win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auth/register">
              <Button variant="primary" className="text-lg px-8 py-4">Start Your Journey</Button>
            </a>
            <a href="#coaches">
              <Button variant="secondary" className="text-lg px-8 py-4">Browse Coaches</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-[var(--color-surface-dark)]/50 bg-[#0a1017]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-[var(--color-text-secondary)] tracking-widest uppercase mb-8">
            Trusted by elite athletes worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos Placeholders */}
            <div className="text-2xl font-bold">GYMSHARK</div>
            <div className="text-2xl font-bold">ROGUE</div>
            <div className="text-2xl font-bold">ELEIKO</div>
            <div className="text-2xl font-bold">CROSSFIT</div>
          </div>
        </div>
      </section>

      {/* Bottom Padding */}
      <div className="h-32"></div>
    </div>
  );
}

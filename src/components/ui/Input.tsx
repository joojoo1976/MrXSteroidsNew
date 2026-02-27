import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({
    className = '',
    label,
    error,
    id,
    ...props
}: InputProps) {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-text-secondary">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`bg-background-dark border ${error ? 'border-primary' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full`}
                {...props}
            />
            {error && <span className="text-xs text-primary">{error}</span>}
        </div>
    );
}

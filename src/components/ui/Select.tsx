import React, { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { label: string; value: string }[];
    error?: string;
}

export function Select({
    className = '',
    label,
    options,
    error,
    id,
    ...props
}: SelectProps) {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label htmlFor={selectId} className="text-sm font-medium text-text-secondary">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    id={selectId}
                    className={`bg-background-dark border ${error ? 'border-primary' : 'border-white/10'
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full appearance-none`}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                    expand_more
                </span>
            </div>
            {error && <span className="text-xs text-primary">{error}</span>}
        </div>
    );
}

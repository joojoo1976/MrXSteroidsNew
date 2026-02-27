import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    fullWidth?: boolean;
    icon?: string;
    children: React.ReactNode;
}

export function Button({
    className = '',
    variant = 'primary',
    fullWidth = false,
    icon,
    children,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-white py-3 px-6 shadow-[0_4px_14px_0_rgba(217,35,35,0.39)] hover:shadow-[0_6px_20px_rgba(217,35,35,0.23)] disabled:hover:bg-primary disabled:hover:shadow-[0_4px_14px_0_rgba(217,35,35,0.39)]',
        secondary: 'bg-transparent border border-white/20 hover:bg-white/5 text-white py-3 px-6 disabled:hover:bg-transparent',
        ghost: 'text-text-secondary hover:text-white py-3 px-4 disabled:hover:text-text-secondary',
    };

    const widthClass = fullWidth ? 'w-full' : 'sm:w-auto';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
            disabled={disabled}
            {...props}
        >
            {icon && variant === 'ghost' && <span className="material-symbols-outlined text-xl">{icon}</span>}
            {children}
            {icon && variant !== 'ghost' && <span className="material-symbols-outlined text-xl">{icon}</span>}
        </button>
    );
}

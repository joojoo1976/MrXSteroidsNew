import React, { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ className = '', children, ...props }: CardProps) {
    return (
        <div
            className={`bg-surface-dark rounded-xl border border-white/5 p-6 shadow-xl relative overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

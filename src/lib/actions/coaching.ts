'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function submitCheckIn(data: {
    weight: number;
    steps: number;
    sleepHours: number;
    notes?: string;
    athleteId: string;
}) {
    try {
        const checkIn = await prisma.checkIn.create({
            data: {
                ...data,
                status: 'PENDING',
            },
        });
        revalidatePath('/progress');
        revalidatePath('/dashboard/trainee');
        return { success: true, checkIn };
    } catch (error: unknown) {
        console.error('Failed to submit check-in:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}

export async function reviewCheckIn(checkInId: string, feedback: string) {
    try {
        const checkIn = await prisma.checkIn.update({
            where: { id: checkInId },
            data: {
                feedback,
                status: 'REVIEWED',
            },
        });
        revalidatePath('/dashboard/coach');
        return { success: true, checkIn };
    } catch (error: unknown) {
        console.error('Failed to review check-in:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}

'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createPost(title: string, content: string, userId: string) {
    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId: userId,
            },
        });
        revalidatePath('/community');
        return { success: true, post };
    } catch (error: unknown) {
        console.error('Failed to create post:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}

export async function addComment(content: string, postId: string, userId: string) {
    try {
        const comment = await prisma.comment.create({
            data: {
                content,
                postId,
                authorId: userId,
            },
        });
        revalidatePath(`/community/${postId}`);
        return { success: true, comment };
    } catch (error: unknown) {
        console.error('Failed to add comment:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}

export async function likePost(postId: string, userId: string) {
    try {
        const like = await prisma.like.create({
            data: {
                postId,
                userId,
            },
        });
        revalidatePath('/community');
        return { success: true, like };
    } catch (error: unknown) {
        console.error('Failed to like post:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}

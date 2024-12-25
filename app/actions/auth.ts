'use server'

import { signIn } from '@/app/auth'

export async function authenticate(provider: string) {
    try {
        await signIn(provider, {
            redirectTo: '/dashboard'
        })
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message }
        }
        return { error: 'Something went wrong' }
    }
}
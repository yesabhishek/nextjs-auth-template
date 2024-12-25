import NextAuth from "next-auth"
import Google from "@auth/core/providers/google"
import GitHub from "@auth/core/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import type { NextAuthConfig } from "next-auth"

const prisma = new PrismaClient()

export const authConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "select_account",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
        async jwt({ token, user, account, profile }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async signIn({ user, account, profile }) {
            if (!user.email) return false

            // Get all accounts registered with this email
            const existingUser = await prisma.user.findUnique({
                where: { email: user.email },
                include: { accounts: true },
            })

            if (existingUser) {
                // If this OAuth account is not linked to the existing user, link it
                const existingAccount = existingUser.accounts.find(
                    (acc) => acc.provider === account?.provider
                )

                if (!existingAccount && account) {
                    await prisma.account.create({
                        data: {
                            userId: existingUser.id,
                            type: account.type,
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                            access_token: account.access_token,
                            expires_at: account.expires_at,
                            token_type: account.token_type,
                            scope: account.scope,
                            id_token: account.id_token,
                            session_state: account.session_state,
                        },
                    })
                }
            }

            return true // Allow sign in
        }
    },
    pages: {
        signIn: '/auth/sign-in',
        error: '/auth/error',
    },
    session: {
        strategy: "database",
    },
    debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)

// For usage in server components
export const session = auth
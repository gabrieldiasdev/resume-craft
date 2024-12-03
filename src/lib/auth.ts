import { db } from '@/db/dizzle'
import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'
import { DrizzleAdapter } from '@auth/drizzle-adapter'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Github],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
  },
})

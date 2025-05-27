import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // In a real app, you would validate against a database
        if (credentials?.email === 'admin@hr.com' && credentials?.password === 'password') {
          return { id: '1', name: 'Admin', email: 'admin@hr.com' };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
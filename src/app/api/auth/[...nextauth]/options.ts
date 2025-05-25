import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authService } from '@/service/auth/auth';
import { AuthResponse } from '@/types';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                login: { label: 'Login', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log(credentials);
                if (!credentials?.login || !credentials?.password) {
                    throw new Error(JSON.stringify({
                        statusCode: 400,
                        message: "Login and password are required"
                    }));
                }
                console.log(credentials);
                const response = await authService.login(
                    {
                        login: credentials.login,
                        password: credentials.password
                    }
                );
                console.log(response);
                
                if (response.success && response.data) {
                    const userData = response.data as AuthResponse['data'];
                    if (!userData) return null;

                    return {
                        id: userData.user.id!,
                        username: userData.user.username,
                        email: userData.user.email,
                        phone: userData.user.phone,
                        user_type_id: userData.user.user_type_id,
                        is_active: userData.user.is_active,
                        updated_at: userData.user.updated_at!,
                        created_at: userData.user.created_at!,
                        user_type: {
                            id: userData.user.user_type?.id || 0,
                            name: userData.user.user_type?.name || ''
                        },
                        token: {
                            accessToken: userData.token.accessToken
                        }
                    } as User;
                }

                throw new Error(JSON.stringify({
                    message: response.message
                }));
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user as any;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: '/',
    },
    secret: process.env.NEXTAUTH_SECRET,
};
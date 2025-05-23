import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string().min(1, { message: 'Username is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    phone: z.string().min(1, { message: 'Phone number is required' }),
    user_type_id: z.string().min(1, { message: 'User type is required' }),
});

export const loginSchema = z.object({
    login: z.string().min(1, { message: 'Login is required' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});



export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;



import {z} from 'zod';

export const UserValidation = z
.string()
.min(3, { message: 'Username must be at least 3 characters long' })
.max(30, { message: 'Username must be at most 30 characters long' })
.regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers, and underscores' })


export const signUpSchema = z.object({
    userName :UserValidation,
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
})
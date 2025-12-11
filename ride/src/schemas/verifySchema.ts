import {z} from 'zod';

export const signUpSchema = z.object({
    code : z.string().length(6, { message: 'Code must be 6 characters long' }),
    
})
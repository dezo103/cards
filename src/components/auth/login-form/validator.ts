import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('custom email error message'), // if we need to show custom error message
  password: z.string().min(3),
  rememberMe: z.boolean().default(false).optional(),
})

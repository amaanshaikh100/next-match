import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

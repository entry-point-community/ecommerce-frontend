import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

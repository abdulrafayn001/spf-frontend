import { signInFormSchema, signUpFormSchema } from "@/validations/authSchemas";
import { z } from "zod";

export type SignUpPayload = z.infer<typeof signUpFormSchema>;

export type SignInPayload = z.infer<typeof signInFormSchema>;

export interface AuthResponse {
  access_token: string;
}

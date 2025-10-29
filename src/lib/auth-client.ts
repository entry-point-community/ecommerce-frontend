import { createAuthClient } from "better-auth/react";
import { LOCAL_STORAGE_BETTER_AUTH_TOKEN_KEY } from "~/features/auth/constants/localStorage";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  fetchOptions: {
    credentials: "omit",
    auth: {
      type: "Bearer",
      token: async () => {
        const token = localStorage.getItem(LOCAL_STORAGE_BETTER_AUTH_TOKEN_KEY);

        return token ?? undefined;
      },
    },
  },
});

type ErrorTypes = Partial<
  Record<
    keyof typeof authClient.$ERROR_CODES,
    {
      en: string;
    }
  >
>;
const errorCodes = {
  USER_ALREADY_EXISTS: {
    en: "user already registered",
  },
} satisfies ErrorTypes;

export type AuthError = {
  code?: string | undefined | keyof typeof authClient.$ERROR_CODES;
  message?: string | undefined;
  status: number;
  statusText: string;
} | null;

export const getErrorMessage = (code: string) => {
  if (code in errorCodes) {
    return errorCodes[code as keyof typeof errorCodes]["en"];
  }
  return "";
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/auth";
import { SignUpPayload, SignInPayload } from "../types/auth";
import { setToken } from "@/lib/utils/auth";

const AUTH_KEY = "auth";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const signUp = useMutation({
    mutationFn: (payload: SignUpPayload) => api.signUp(payload),
    onSuccess: (data) => {
      queryClient.setQueryData([AUTH_KEY], data);
      setToken(data.access_token);
    },
  });

  const signIn = useMutation({
    mutationFn: (payload: SignInPayload) => api.signIn(payload),
    onSuccess: (data) => {
      queryClient.setQueryData([AUTH_KEY], data);
      setToken(data.access_token);
    },
  });

  return { signUp, signIn };
};

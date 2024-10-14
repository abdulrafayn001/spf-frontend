import api from "@/lib/utils/axiosConfig";
import { SignUpPayload, SignInPayload, AuthResponse } from "../types/auth";

const API_BASE_URL = "/auth";

export const signUp = async (payload: SignUpPayload): Promise<AuthResponse> => {
  const response = await api.post(`${API_BASE_URL}/register`, payload);
  return response.data;
};

export const signIn = async (payload: SignInPayload): Promise<AuthResponse> => {
  const response = await api.post(`${API_BASE_URL}/login`, payload);
  return response.data;
};

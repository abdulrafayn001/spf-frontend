import api from "@/lib/utils/axiosConfig";
import { UpdateUserPayload, UserProfile } from "@/types/user";

const API_BASE_URL = "/users";

export const getUser = async (): Promise<UserProfile> => {
  const response = await api.get(`${API_BASE_URL}/profile`);
  return response.data;
};

export const updateUser = async (
  payload: UpdateUserPayload
): Promise<UserProfile> => {
  const response = await api.put(`${API_BASE_URL}/profile`, payload);
  return response.data;
};

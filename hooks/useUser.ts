import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import * as api from "../api/user";
import { UpdateUserPayload } from "@/types/user";

const USER_KEY = "user";

export const useUser = () => {
  const queryClient = useQueryClient();

  const updateUser = useMutation({
    mutationFn: (payload: UpdateUserPayload) => api.updateUser(payload),
    onSuccess: (data) => {
      queryClient.setQueryData([USER_KEY], data);
    },
  });

  const getUserInfo = queryOptions({
    queryKey: [USER_KEY],
    queryFn: () => api.getUser(),
    gcTime: 60 * 60 * 1000,
  });

  return { updateUser, getUserInfo };
};

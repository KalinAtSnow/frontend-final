import { useQuery } from "@tanstack/react-query";
import { userApiService } from "./userService";

export const useUserQuery = () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: userApiService.getUserInfo,
    })
  };
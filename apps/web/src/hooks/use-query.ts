import { axiosAuth } from "@/lib/axiosConfig";
import { useQuery, UseQueryResult, keepPreviousData } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export const useFetchData = <T>(
  queryKey: any[],
  url: string,
  enabled?: boolean,
): UseQueryResult<T> => {

  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      try {
        const response = await axiosAuth.get(`/${url}`);
        return response.data?.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          const network_error = error.code === "ERR_NETWORK"
          const errorToThrow = {
            message: network_error ? error?.message : error.response?.data?.message,
            errors: network_error ? [] : error.response?.data?.errors
          }
          throw new Error(errorToThrow?.message)
        }
        throw error
      }

    },
    enabled: enabled ?? true,
    placeholderData: keepPreviousData,
  });
};

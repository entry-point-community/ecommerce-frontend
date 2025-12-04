import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "~/lib/react-query";

type GetProductByIdInput = {
  id: string;
};

type GetProductByIdResponse = {
  id: string;
  price: number;
  name: string;
  imageUrl: string | null;
  description: string | null;
  category: {
    name: string;
  } | null;
} | null;

export const getProductById = async (input: GetProductByIdInput) => {
  const response = await axiosInstance.get<GetProductByIdResponse>(
    `/products/${input.id}`
  );

  return response.data;
};

export const getProductByIdQueryKey = (id: string) => ["product", id];

export const getProductsQueryOptions = (input: GetProductByIdInput) => {
  return queryOptions({
    queryKey: getProductByIdQueryKey(input.id),
    queryFn: () => getProductById(input),
  });
};

type UseGetProductByIdParams = {
  queryConfig?: QueryConfig<typeof getProductById>;
  input: GetProductByIdInput;
};

export const useGetProducts = ({
  queryConfig,
  input,
}: UseGetProductByIdParams) => {
  return useQuery({
    ...getProductsQueryOptions(input),
    ...queryConfig,
  });
};

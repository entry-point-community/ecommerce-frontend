import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "~/lib/react-query";

export enum ProductSortBy {
  RECOMMENDED = "recommended",
}

type GetProductsInput = {
  sort?: ProductSortBy;
  limit?: number;
};

type GetProductsResponse = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: {
    name: string;
  } | null;
}[];

export const getProducts = async (input?: GetProductsInput) => {
  const response = await axiosInstance.get<GetProductsResponse>("/products", {
    params: input,
  });

  return response.data;
};

export const getProductsQueryKey = () => ["products"];

export const getProductsQueryOptions = (input?: GetProductsInput) => {
  return queryOptions({
    queryKey: getProductsQueryKey(),
    queryFn: () => getProducts(input),
  });
};

type UseGetProductsParams = {
  queryConfig?: QueryConfig<typeof getProducts>;
  input?: GetProductsInput;
};

export const useGetProducts = ({
  queryConfig,
  input,
}: UseGetProductsParams = {}) => {
  return useQuery({
    ...getProductsQueryOptions(input),
    ...queryConfig,
  });
};

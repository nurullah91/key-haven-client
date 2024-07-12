import { baseApi } from "./baseApi";

export type TProduct = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  isDeleted?: boolean;
};

export type TQueryParams = {
  search?: string;
  limit?: number;
  page?: number;
};

type TServerResponse = {
  success: boolean;
  data: TProduct[];
  statusCode: number;
  message: string;
};

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products/create-product",
        method: "POST",
        body: product,
      }),
    }),

    getAllProducts: builder.query<TServerResponse, TQueryParams>({
      query: ({ limit, page, search }) => {
        const params = [];
        if (limit) params.push(`limit=${limit}`);
        if (page) params.push(`page=${page}`);
        if (search) params.push(`search=${encodeURIComponent(search)}`);

        const querySting = params.length ? `?${params.join("&")}` : "";
        return {
          url: `/products${querySting}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useCreateProductMutation } = productsApi;

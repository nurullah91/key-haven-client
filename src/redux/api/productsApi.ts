import { baseApi } from "./baseApi";

export type TProduct = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  ratings: number;
  description: string;
  isDeleted?: boolean;
};

export type TQueryParams = {
  search?: string;
  limit?: number;
  page?: number;
};

type TServerResponseForAllProduct = {
  success: boolean;
  data: TProduct[];
  statusCode: number;
  totalProducts: number;
  message: string;
};

type TServerResponseForSingleProduct = {
  success: boolean;
  data: TProduct;
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

    getAllProducts: builder.query<TServerResponseForAllProduct, TQueryParams>({
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

    getSingleProduct: builder.query<TServerResponseForSingleProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useGetSingleProductQuery,
} = productsApi;

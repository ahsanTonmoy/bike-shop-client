import { baseApi } from "@/redux/api/baseApi";
import { IOrderResponse, TResponseRedux } from "@/types/types";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<IOrderResponse[] | []>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["order"],
    }),
    // specificProducts: builder.query({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "GET",
    //   }),

    // }),
    revenue: builder.query({
      query: () => ({
        url: `/orders/revenue`,
        method: "GET",
      }),
      providesTags: ["revenue"],
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: `/orders`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["order", "product", "revenue"],
    }),
    verifyOrder: builder.mutation({
      query: (data) => ({
        url: `/orders/verify`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["order", "product"],
    }),

    // updateProduct: builder.mutation({
    //   query: ({ data, id }) => ({
    //     url: `/products/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),

    //   invalidatesTags: ["product"],
    // }),
  }),
});

export const {
  useCreateOrderMutation,
  useAllOrdersQuery,
  useVerifyOrderMutation,
  useRevenueQuery,
} = orderApi;

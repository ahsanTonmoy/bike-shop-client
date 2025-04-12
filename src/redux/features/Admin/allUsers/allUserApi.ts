import { baseApi } from "@/redux/api/baseApi";
import {  IUser, TResponseRedux } from "@/types/types";

const allUsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUser: builder.query({
      query: () => ({
        url: `/admin/all-users`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<IUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["allUser"],
    }),
    updateBlockedUser: builder.mutation({
      query: ({id,data}) => ({
        url: `/admin/users/${id}/block`,
        method: "PATCH",
        body: data
      }),

      invalidatesTags: ["allUser"],
    }),
    
  }),
});

export const {
useAllUserQuery,
useUpdateBlockedUserMutation
} = allUsersApi;

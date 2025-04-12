import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    logOut: builder.mutation({
      query: (info) => ({
        url: "/auth/logout",
        method: "POST",
        body: info,
      }),
      invalidatesTags: [
        "product",
        "allUser",
        "updateUserPass",
        "order",
        "revenue",
      ],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateUserPass"],
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/update-password",
        method: "PATCH",
        body: data,
      }),
    }),
    authMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["updateUserPass"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogOutMutation,
  useSignUpMutation,
  useAuthMeQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = authApi;

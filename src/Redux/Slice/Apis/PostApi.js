import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET',
            }),
        }),
        addPosts: builder.mutation({
            query: (data) => ({
                url: 'posts',
                method: 'POST',
                body:data
            }),
        }),
    }),
});
export const { useGetPostsQuery, useAddPostsMutation} = postApi;
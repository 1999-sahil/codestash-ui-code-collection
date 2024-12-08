import { 
    createApi, 
    fetchBaseQuery 
} from "@reduxjs/toolkit/query/react";

import { getBaseUrl } from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/ui-components/buttons`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");

    if (token) {
        Headers.set("Authorization", `Bearer ${token}`);
    }

    return Headers;
  },
});

const buttonsApi = createApi({
    reducerPath: "buttonsApi",
    baseQuery,
    tagTypes: ["Buttons"],
    endpoints: (builder) => ({
        fetchAllButtons: builder.query({
            query: () => "/all-buttons",
            providesTags: ["Buttons"]
        }),
        fetchButtonById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Buttons", id }]
        }),
        addButton: builder.mutation({
            query: (newButton) => ({
                url: `/create-button`,
                method: "POST",
                body: newButton
            }),
            invalidatesTags: ["Buttons"]
        }),
        updateButton: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Buttons"]
        }),
        deleteButton: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Buttons"]
        })
    }),
});

export const { 
    useFetchAllButtonsQuery,
    useFetchButtonByIdQuery,
    useAddButtonMutation,
    useUpdateButtonMutation,
    useDeleteButtonMutation
} = buttonsApi;

export default buttonsApi;
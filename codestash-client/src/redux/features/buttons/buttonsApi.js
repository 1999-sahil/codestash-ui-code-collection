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
    }),
});

export const { useFetchAllButtonsQuery } = buttonsApi;
export default buttonsApi;
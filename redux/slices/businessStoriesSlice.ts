import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBusinessStories = createAsyncThunk(
    "business/fetch",
    async () => {
        const res = await fetch("https://api.agcnewsnet.com/api/general/categories/2/stories?page=1&per_page=15");
        if (!res.ok) throw new Error("Failed to fetch business stories");
        const result = await res.json();
        return result.data.data;
    }
);

const businessStoriesSlice = createSlice({
    name: "businessStories",
    initialState: {
        stories: [],
        loading: false,
        error: null,
    } as {
        stories: any[];
        loading: boolean;
        error: string | null;
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBusinessStories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBusinessStories.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload;
            })
            .addCase(fetchBusinessStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default businessStoriesSlice.reducer;

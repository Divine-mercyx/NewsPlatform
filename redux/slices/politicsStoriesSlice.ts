import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Story } from "@/story"; // ✅ reuse shared type

export const fetchPoliticsStories = createAsyncThunk(
    "politics/fetch",
    async () => {
        const res = await fetch("https://api.agcnewsnet.com/api/general/categories/1/stories?page=1&per_page=15");
        if (!res.ok) throw new Error("Failed to fetch politics stories");
        const result = await res.json();
        return result.data.data;
    }
);

interface PoliticsStoriesState {
    stories: Story[];
    loading: boolean;
    error: string | null;
}

const initialState: PoliticsStoriesState = {
    stories: [],
    loading: false,
    error: null,
};

const politicsStoriesSlice = createSlice({
    name: "politicsStories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPoliticsStories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPoliticsStories.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload;
            })
            .addCase(fetchPoliticsStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default politicsStoriesSlice.reducer;

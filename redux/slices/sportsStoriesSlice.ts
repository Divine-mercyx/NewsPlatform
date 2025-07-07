import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface SportsStory {
    title: string;
    banner_image: string;
    category: {
        category_name: string;
    };
    subtitle: string;
    author: String;
}

interface SportsStoriesState {
    stories: SportsStory[];
    loading: boolean;
    error: string | null;
}

export const fetchSportsStories = createAsyncThunk<SportsStory[]>(
    "sports/fetch",
    async () => {
        const res = await fetch("https://api.agcnewsnet.com/api/general/categories/3/stories");
        if (!res.ok) throw new Error("Failed to fetch sports stories");
        const result = await res.json();
        return result.data.data as SportsStory[];
    }
);

const initialState: SportsStoriesState = {
    stories: [],
    loading: false,
    error: null,
};

const sportsStoriesSlice = createSlice({
    name: "sportsStories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSportsStories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSportsStories.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload;
            })
            .addCase(fetchSportsStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default sportsStoriesSlice.reducer;

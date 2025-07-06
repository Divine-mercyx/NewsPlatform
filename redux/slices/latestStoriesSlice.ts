import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLatestStories = createAsyncThunk(
    'latest/fetch',
    async () => {
        const res = await fetch('https://api.agcnewsnet.com/api/general/stories/latest-stories?page=1&per_page=7');
        if (!res.ok) throw new Error('Failed to fetch latest stories');
        const result = await res.json();
        return result.data;
    }
);

const latestStoriesSlice = createSlice({
    name: 'latestStories',
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
    extraReducers: builder => {
        builder
            .addCase(fetchLatestStories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLatestStories.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload;
            })
            .addCase(fetchLatestStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default latestStoriesSlice.reducer;

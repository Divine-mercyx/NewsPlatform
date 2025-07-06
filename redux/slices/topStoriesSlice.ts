import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TopStoryResponse } from '@/types/story';

export const fetchTopStories = createAsyncThunk(
    'topStories/fetch',
    async () => {
        const res = await fetch('https://api.agcnewsnet.com/api/general/top-stories');
        if (!res.ok) throw new Error('Failed to fetch top stories');
        return (await res.json()) as TopStoryResponse;
    }
);

const topStoriesSlice = createSlice({
    name: 'topStories',
    initialState: {
        stories: [],
        loading: false,
        error: null,
    } as {
        stories: any[]; // or define a more specific type
        loading: boolean;
        error: string | null;
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTopStories.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopStories.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload.data.data;
            })
            .addCase(fetchTopStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default topStoriesSlice.reducer;

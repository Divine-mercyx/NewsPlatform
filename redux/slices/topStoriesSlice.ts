import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TopStoryResponse, Story } from '@/story';

export const fetchTopStories = createAsyncThunk<TopStoryResponse>(
    'topStories/fetch',
    async () => {
        const res = await fetch('https://api.agcnewsnet.com/api/general/top-stories');
        if (!res.ok) throw new Error('Failed to fetch top stories');
        return (await res.json()) as TopStoryResponse;
    }
);

interface TopStoriesState {
    stories: Story[];
    loading: boolean;
    error: string | null;
}

const initialState: TopStoriesState = {
    stories: [],
    loading: false,
    error: null,
};

const topStoriesSlice = createSlice({
    name: 'topStories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTopStories.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopStories.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload.data.data.map(item => item.story);
            })
            .addCase(fetchTopStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default topStoriesSlice.reducer;

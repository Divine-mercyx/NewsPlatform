import { configureStore } from '@reduxjs/toolkit';
import topStoriesReducer from '@/redux/slices/topStoriesSlice';

export const store = configureStore({
    reducer: {
        topStories: topStoriesReducer,
    },
});

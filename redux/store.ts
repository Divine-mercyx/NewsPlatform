import { configureStore } from '@reduxjs/toolkit';
import topStoriesReducer from '@/redux/slices/topStoriesSlice';
import latestStoriesReducer from './slices/latestStoriesSlice';



export const store = configureStore({
    reducer: {
        topStories: topStoriesReducer,
        latestStories: latestStoriesReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


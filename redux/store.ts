import { configureStore } from '@reduxjs/toolkit';
import topStoriesReducer from '@/redux/slices/topStoriesSlice';
import latestStoriesReducer from './slices/latestStoriesSlice';
import editorsPickReducer from './slices/editorsPickSlice';



export const store = configureStore({
    reducer: {
        topStories: topStoriesReducer,
        latestStories: latestStoriesReducer,
        editorsPicks: editorsPickReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


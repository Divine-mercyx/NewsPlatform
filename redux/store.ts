import { configureStore } from '@reduxjs/toolkit';
import topStoriesReducer from '@/redux/slices/topStoriesSlice';
import latestStoriesReducer from './slices/latestStoriesSlice';
import editorsPickReducer from './slices/editorsPickSlice';
import sportsStoriesReducer from "./slices/sportsStoriesSlice";
import businessStoriesReducer from "@/redux/slices/businessStoriesSlice";
import politicsStoriesReducer from "@/redux/slices/politicsStoriesSlice";

export const store = configureStore({
    reducer: {
        topStories: topStoriesReducer,
        latestStories: latestStoriesReducer,
        editorsPicks: editorsPickReducer,
        sportsStories: sportsStoriesReducer,
        businessStories: businessStoriesReducer,
        politicsStories: politicsStoriesReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


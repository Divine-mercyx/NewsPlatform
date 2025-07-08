import { TopStoryResponse } from "@/story";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEditorsPicks = createAsyncThunk(
    "editorsPicks/fetch",
    async () => {
        const res = await fetch("https://api.agcnewsnet.com/api/general/editor-picks?page=1&per_page=15");
        if (!res.ok) throw new Error("Failed to fetch editor's picks");
        const result = await res.json();
        return result.data;
    }
);

interface EditorsPicksState {
    stories: TopStoryResponse['data']['data'];
    loading: boolean;
    error: string | null;
}

const initialState: EditorsPicksState = {
    stories: [],
    loading: false,
    error: null,
};


const editorsPicksSlice = createSlice({
    name: "editorsPicks",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEditorsPicks.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEditorsPicks.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload.data;
            })
            .addCase(fetchEditorsPicks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default editorsPicksSlice.reducer;

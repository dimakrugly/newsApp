import { Article } from '../../types/Article.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from '../hooks/ActionCreator.ts';

interface NewsState {
    news: Article[];
    isLoading: boolean;
    error: string;
}

const initialState: NewsState = {
    news: [],
    isLoading: false,
    error: '',
};

export const newsSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.news = action.payload;
        });
        builder.addCase(fetchNews.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Failed to fetch news';
        });
    },
    initialState,
    name: 'news',
    reducers: {}
});

export default newsSlice.reducer;

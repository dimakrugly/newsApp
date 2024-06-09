import { Article } from '../../types/Article.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addPost, fetchNews, removePost} from '../actionCreators/ActionCreator.ts';

interface NewsState {
    news: Article[];
    isLoading: boolean;
    error: string;
    query: string;
}

const initialState: NewsState = {
    news: [],
    isLoading: false,
    error: '',
    query: '',
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
        builder.addCase(removePost.fulfilled, (state, action) => {
            state.news = state.news.filter(post => post.id !== action.payload);
        });
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.news = state.news.concat(action.payload);
        });
    },
    initialState,
    name: 'news',
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        }
    }
});

export const { setQuery } = newsSlice.actions;
export default newsSlice.reducer;

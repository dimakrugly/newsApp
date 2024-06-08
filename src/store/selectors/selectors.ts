import { createSelector } from '@reduxjs/toolkit';
import {Article} from "../../types/Article.ts";
import {RootState} from "../store.ts";


const selectNews = (state: { newsReducer: { news: Article[]; }; }) => state.newsReducer.news;


const selectArticleId = (state: RootState, articleId: number) => articleId;

// Create a memoized selector to select the article by ID
export const selectArticleById = createSelector(
    [selectNews, selectArticleId],
    (news, articleId) => news.find((article) => article.id === articleId)
);

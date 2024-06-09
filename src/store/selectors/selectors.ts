import { createSelector } from '@reduxjs/toolkit';
import {Article} from "../../types/Article.ts";
import {RootState} from "../store.ts";


const selectNews = (state: { newsReducer: { news: Article[]; }; }) => state.newsReducer.news;


const selectArticleId = (state: RootState, articleId: string) => articleId;
export const selectQuery = (state: RootState) => state.newsReducer.query;
export const selectArticleById = createSelector(
    [selectNews, selectArticleId],
    (news, articleId) => news.find((article) => article.id === articleId)
);

export const selectFilteredData = createSelector(
    [selectQuery, selectNews],
    (query, data) => {
        if (query) {
            const regex = new RegExp(query, 'i');
            return data.filter(item => regex.test(item.title) || regex.test(item.content));
        }

        return data;
    }
);
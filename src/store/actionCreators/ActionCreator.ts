import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Article} from "../../types/Article.ts";

export const fetchNews = createAsyncThunk(
    'news/fetchAll',
    async (_, thunkApi) => {
        const response = await axios.get('http://localhost:3000/news');
        return response.data;
    }
)

export const removePost = createAsyncThunk(
    'news/removePost',
    async (postId: string, thunkApi) => {
        await axios.delete(`http://localhost:3000/news/${postId}`);

        return postId;
    }
);


export const addPost = createAsyncThunk(
    'news/addPost',
    async (articleData: Article, thunkApi ) => {
        await axios.post('http://localhost:3000/news', articleData);

        return articleData;
    }
);


import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

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
        console.log('id', postId)
       try {
           await axios.delete(`http://localhost:3000/news/${postId}`);

       } catch (e) {console.log(e)}
        return postId;
    }
);

import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk(
    'news/fetchAll',
    async (_, thunkApi) => {
        const response = await axios.get('http://localhost:3000/news');
        return response.data;
    }
)
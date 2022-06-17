import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

const loadMoviesAPI = () => {
    return fetch(
        'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48'
    ).then(response => response.json());
}

export const loadData = createAsyncThunk('movie/loadData',
async () => {
    const res = await loadMoviesAPI();
    console.log(' resp:'+res);
    return res;
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        list: [],
        totals: 0,
    },
    reducers: {
        loadDataEnd(state,{payload}) {
            state.list = payload;
            state.totals = payload.length;
        },
    },

    extraReducers: {
        [loadData.fulfilled](state,{payload}) {
            console.log('fulfilled:'+payload);
            state.list = payload.data.list;
        },
        [loadData.rejected](state,err) {
            console.log(err);
        },
        [loadData.pending](state) {
            console.log('pending');
        }
    }
})

export const {loadDataEnd} = movieSlice.actions;
export default movieSlice.reducer;
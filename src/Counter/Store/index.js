import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import moveSlice from "../features/moveSlice";

export default configureStore({
    reducer: {
        counter: counterSlice,
        movie: moveSlice
    },
});
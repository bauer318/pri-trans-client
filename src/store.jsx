import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";

const store = configureStore({
    reducer: {
        users: userReducer,
    }
});

export default store;
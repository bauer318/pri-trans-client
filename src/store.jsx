import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import countryReducers from "./reducers/countryReducers";

const store = configureStore({
    reducer: {
        users: userReducer,
        countries:countryReducers
    }
});

export default store;
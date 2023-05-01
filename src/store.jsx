import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import countryReducers from "./reducers/countryReducers";
import currencyReducers from "./reducers/currencyReducers";

const store = configureStore({
    reducer: {
        users: userReducer,
        countries:countryReducers,
        currencies:currencyReducers

    }
});

export default store;
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import countryReducers from "./reducers/countryReducers";
import currencyReducers from "./reducers/currencyReducers";
import paymentMethodReducers from "./reducers/paymentMethodReducers";

const store = configureStore({
    reducer: {
        users: userReducer,
        countries:countryReducers,
        currencies:currencyReducers,
        paymentMethods:paymentMethodReducers

    }
});

export default store;
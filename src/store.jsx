import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import countryReducers from "./reducers/countryReducers";
import currencyReducers from "./reducers/currencyReducers";
import paymentMethodReducers from "./reducers/paymentMethodReducers";
import exchangeRateReducer from "./reducers/ExchangeRateReducer";
import sendDetails from "./reducers/sendReducers";
import userRoleReducers from "./reducers/roleReducers";
import personalInfoReducer from "./reducers/PersonalInfoReducers"
import accountReducer from "./reducers/accountReducer";


const store = configureStore({
    reducer: {
        users: userReducer,
        countries:countryReducers,
        currencies:currencyReducers,
        paymentMethods:paymentMethodReducers,
        rates:exchangeRateReducer,
        send:sendDetails,
        userRole:userRoleReducers,
        personalInfo:personalInfoReducer,
        accounts:accountReducer
    }
});

export default store;
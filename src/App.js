import React, {useEffect} from 'react';
import './bootstrap.min.css';
import './App.css';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./pages/UserList";
import CountryList from "./pages/CountryList";
import PaymentMethodList from "./pages/PaymentMethodList";
import CurrencyList from "./pages/CurrencyList";
import User from "./pages/User";
import CountryItem from "./pages/CountryItem";
import CountryItemEdit from "./pages/CountryItemEdit";
import CurrencyAdd from "./pages/CurrencyAdd";
import PaymentMethodAdd from "./pages/PaymentMethodAdd";
import ClientHome from "./pages/ClientHome";
import ClientAccount from "./pages/ClientAccount";
import ClientHistory from "./pages/ClientHistory";
import ClientPaymentMethods from "./pages/ClientPaymentMethods";
import BalanceItem from "./pages/BalanceItem";
import Deposit from "./pages/Deposit";
import DepositConfirm from "./pages/DepositConfirm";
import Convert from "./pages/Convert";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        {/*<Route path="/" element={<UserList/>}/>*/}
                        <Route path="/users" element={<UserList/>}/>
                        <Route path={"users/:id"} element={<User/>} />
                        <Route path="/countries" element={<CountryList/>}/>
                        <Route path={"/countries/:id"} element={<CountryItem/>}/>
                        <Route path={"/countries/:id/edit"} element={<CountryItemEdit/>}/>
                        <Route path={"/countries/:id/add-currency"} element={<CurrencyAdd/>}/>
                        <Route path={"/countries/:id/add-payment-method"} element={<PaymentMethodAdd/>}/>
                        <Route path="/currencies" element={<CurrencyList/>}/>
                        <Route path="/payment-methods" element={<PaymentMethodList/>}/>
                        <Route path={"/client/home"} element={<ClientHome/>} />
                        <Route path={"/client/account"} element={<ClientAccount/>} />
                        <Route path={"/client/account/1"} element={<BalanceItem/>} />
                        <Route path={"/client/account/1/convert"} element={<Convert/>}/>
                        <Route path={"/client/account/1/deposit/new"} element={<Deposit/>} />
                        <Route path={"/client/account/1/deposit/confirm"} element={<DepositConfirm/>}/>
                        <Route path={"/client/history"} element={<ClientHistory/>} />
                        <Route path={"/client/payment-methods"} element={<ClientPaymentMethods/>} />
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        </div>
    );
};

export default App;
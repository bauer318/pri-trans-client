import React, {useEffect, useState} from 'react';
import './bootstrap.min.css';
import './App.css';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
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
import UserAccount from "./pages/ClientAccount";
import ClientHistory from "./pages/ClientHistory";
import Wallets from "./pages/Wallets";
import BalanceItem from "./pages/BalanceItem";
import Deposit from "./pages/Deposit";
import DepositConfirm from "./pages/DepositConfirm";
import Convert from "./pages/Convert";
import Send from "./pages/Send";
import Withdraw from "./pages/Withdraw";
import SendTo from "./pages/SendTo";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import PersonalInfo from "./pages/PersonalInfo";
import HomeAddress from "./pages/HomeAddress";
import AgentBalanceItem from "./pages/AgentBalanceItem";
import AgentHistory from "./pages/AgentHistory";
import AgentDeposits from "./pages/AgentDeposits";
import AgentWithdrawals from "./pages/AgentWithdrawals";
import ModeratorHome from "./pages/ModeratorHome";
import {get} from "./services/LocalStorageService";

export var logout = ()=>{};
export var refreshP = ()=>{};
const App = () => {
    const longedUser = get('longedUser');
    const [isLonged, setIsLonged] = useState(longedUser);
    const [refresh, setRefresh] = useState(false);
    logout = () =>{
        console.log(isLonged);
        setIsLonged(false);
    }
    refreshP = () =>{
        setRefresh(!refresh);
    }
    console.log('longed user', longedUser);
    return (
        <div>
            <BrowserRouter>
                <Sidebar user={longedUser}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/register"} element={<CreateAccount/>}/>
                        <Route path={"/register/1/personal-info"} element={<PersonalInfo/>}/>
                        <Route path={'/register/1/personal-info/address'} element={<HomeAddress/>}/>
                        {longedUser?.role==='ROLE_ADMIN' && <Route path={"/admin/users"} element={<UserList/>}/>}
                        <Route path={"/admin/users/:id"} element={<User/>} />
                        <Route path={"/admin/countries"} element={<CountryList/>}/>
                        <Route path={"/admin/countries/:id"} element={<CountryItem/>}/>
                        <Route path={"/admin/countries/:id/edit"} element={<CountryItemEdit/>}/>
                        <Route path={"/admin/countries/:id/add-currency"} element={<CurrencyAdd/>}/>
                        <Route path={"/admin/countries/:id/add-payment-method"} element={<PaymentMethodAdd/>}/>
                        <Route path={"/admin/currencies"} element={<CurrencyList/>}/>
                        <Route path={"/admin/payment-methods"} element={<PaymentMethodList/>}/>
                        <Route path={"/client/home"} element={<ClientHome/>} />
                        <Route path={"/client/account"} element={<UserAccount/>} />
                        <Route path={"/client/account/1"} element={<BalanceItem/>} />
                        <Route path={"/client/account/1/convert"} element={<Convert/>}/>
                        <Route path={"/client/account/1/send"} element={<Send/>}/>
                        <Route path={"/client/account/1/send/to"} element={<SendTo/>}/>
                        <Route path={"/client/account/1/withdraw"} element={<Withdraw/>}/>
                        <Route path={"/client/account/1/deposit/new"} element={<Deposit/>} />
                        <Route path={"/client/account/1/deposit/confirm"} element={<DepositConfirm/>}/>
                        <Route path={"/client/history"} element={<ClientHistory/>} />
                        <Route path={"/client/payment-methods"} element={<Wallets/>} />
                        <Route path={"/agent/account"} element={<UserAccount/>}/>
                        <Route path={"/agent/account/1"} element={<AgentBalanceItem/>}/>
                        <Route path={"/agent/account/1/convert"} element={<Convert/>}/>
                        <Route path={"/agent/history"} element={<AgentHistory/>}/>
                        <Route path={"/agent/payment-methods"} element={<Wallets/>} />
                        <Route path={"/agent/deposits"} element={<AgentDeposits/>}/>
                        <Route path={"/agent/withdrawals"} element={<AgentWithdrawals/>}/>
                        <Route path={"/moderator/users"} element={<ModeratorHome/>}/>
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        </div>
    );
};

export default App;
import React, {useState} from 'react';
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
import UserAccount from "./pages/UserAccount";
import ClientHistory from "./pages/ClientHistory";
import ClientWallets from "./pages/ClientWallets";
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
import {getItem, removeItem} from "./services/LocalStorageService";

export var logout = ()=>{};
export var refreshP = ()=>{};
const App = () => {
    const longedUser = getItem('connectedUser');
    const [isLonged, setIsLonged] = useState(longedUser);
    const [refresh, setRefresh] = useState(false);

    logout = () =>{
        setIsLonged(false);
    }
    refreshP = () =>{
        setRefresh(!refresh);
    }
    return (
        <div>
            <BrowserRouter>
                <Sidebar user={longedUser}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/register"} element={<CreateAccount/>}/>
                        <Route path={"/register/:id/personal-info"} element={<PersonalInfo/>}/>
                        <Route path={'/register/:id/personal-info/address'} element={<HomeAddress/>}/>
                        {longedUser?.userRole?.userRole==='ROLE_ADMIN' && <Route path={"/admin/users"} element={<UserList/>}/>}
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
                        <Route path={"/client/account/item"} element={<BalanceItem/>} />
                        <Route path={"/client/account/convert"} element={<Convert/>}/>
                        <Route path={"/client/account/send"} element={<Send/>}/>
                        <Route path={"/client/account/send/to"} element={<SendTo/>}/>
                        <Route path={"/client/account/withdraw"} element={<Withdraw/>}/>
                        <Route path={"/client/account/deposit/new"} element={<Deposit/>} />
                        <Route path={"/client/account/deposit/confirm"} element={<DepositConfirm/>}/>
                        <Route path={"/client/history"} element={<ClientHistory/>} />
                        <Route path={"/client/wallet"} element={<ClientWallets/>} />
                        <Route path={"/agent/account"} element={<UserAccount/>}/>
                        <Route path={"/agent/account/item"} element={<AgentBalanceItem/>}/>
                        <Route path={"/agent/account/1/convert"} element={<Convert/>}/>
                        <Route path={"/agent/history"} element={<AgentHistory/>}/>
                        <Route path={"/agent/payment-methods"} element={<ClientWallets/>} />
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